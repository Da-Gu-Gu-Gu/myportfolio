import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const Cube = ({ light }: { light: string }) => {
  const mount = useRef<any>(null);
  const animationFrameId = useRef<any>(null);
  const cubeRef = useRef<any>(null);

  const params = {
    threshold: 0,
    strength: 0.9,
    radius: 0,
    exposure: 1,
  };

  let composer: EffectComposer;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff97b7,
      //   wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    cubeRef.current = cube; // Save reference to cube
    scene.add(cube);
    const sphere = new THREE.SphereGeometry(0.1, 18, 18);
    const pointLight1 = new THREE.PointLight(0xffffff, 10);
    pointLight1.position.set(1, 0, 1);
    pointLight1.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 }))
    );

    const pointLight2 = new THREE.PointLight(0xffffff, 10);
    pointLight2.position.set(1, 1, 0);
    pointLight2.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff00ff }))
    );

    const pointLight3 = new THREE.PointLight(0xffffff, 10);
    pointLight3.position.set(0, 1, 1);
    pointLight3.add(
      new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x6320ee }))
    );
    scene.add(pointLight2);
    scene.add(pointLight1);
    scene.add(pointLight3);
    console.log(scene);

    const ambientLight = new THREE.AmbientLight(0xffffff); // Adjust intensity as needed
    scene.add(ambientLight);
    camera.position.z = 5;

    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = params.threshold;
    bloomPass.strength = params.strength;
    bloomPass.radius = params.radius;

    const outputPass = new OutputPass();

    composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    composer.addPass(outputPass);

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      cube.rotation.x += 0.03;
      cube.rotation.y += 0.02;
      cube.rotation.z += 0.01;

      const time = Date.now() * 0.0005;
      const radius = 2;
      //   const centerX = 0;
      //   const centerY = 0;
      const newX = Math.cos(time) * radius;
      const newZ = Math.sin(time) * radius;
      pointLight1.position.set(newX, 0, newZ);

      const p2newX = 0.3 + Math.sin(time) * radius;
      const p2newY = Math.cos(time) * radius;
      pointLight2.position.set(p2newX, p2newY, 0);

      const p3newZ = Math.cos(time) * radius;
      const p3newY = Math.sin(time) * radius;
      pointLight3.position.set(0, p3newY, p3newZ);
      renderer.render(scene, camera);

      composer.render();
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      mount?.current?.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    // Change color based on props
    if (cubeRef.current) {
      cubeRef.current.material.color.set(light);
    }
  }, [light]);

  return <div ref={mount} />;
};

export default Cube;
