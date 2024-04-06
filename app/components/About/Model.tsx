"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Model from "../../assets/models/character.glb";
const ModelViewer = () => {
  const mount = useRef<any>(null);
  const animationFrameId = useRef<any>(null);
  const modelRef = useRef<any>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mount?.current?.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      "./character.glb",
      (gltf: any) => {
        modelRef.current = gltf.scene;
        modelRef.current.scale.set(0.1, 0.1, 0.1);
        scene.add(gltf.scene);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const light = new THREE.HemisphereLight(0xffffff, 0x000000, 0.6);
        scene.add(light);

        // Add shadow to the model
        gltf.scene.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
      },
      undefined,
      (error: any) => {
        console.error(error);
      }
    );

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Rotate model
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", handleResize);
      mount.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} />;
};

export default ModelViewer;
