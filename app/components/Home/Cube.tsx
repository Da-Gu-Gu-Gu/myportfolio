// components/Cube.js

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Cube = ({ light }: { light: string }) => {
  const mount = useRef<any>(null);
  const animationFrameId = useRef<any>(null);
  const cubeRef = useRef<any>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    cubeRef.current = cube; // Save reference to cube
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      mount.current.removeChild(renderer.domElement);
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
