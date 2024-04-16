"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const ModelViewer = () => {
  const containerRef = useRef<any>(null);
  const mount = useRef<any>(null);
  const animationFrameId = useRef<any>(null);
  const modelRef = useRef<any>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const container = containerRef?.current;
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 1.3, 1.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount?.current?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2;

    const plateGeo = new THREE.PlaneGeometry(3, 3);
    const plateMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      // wireframe: true,
    });
    const plate = new THREE.Mesh(plateGeo, plateMaterial);

    plate.position.y = -0.02;
    plate.rotation.x = -Math.PI / 2;
    // plate.castShadow = true;
    plate.receiveShadow = true;

    const loader = new GLTFLoader();
    loader.load(
      "./character.glb",
      (gltf: any) => {
        modelRef.current = gltf.scene;
        modelRef.current.scale.set(0.08, 0.08, 0.08);
        modelRef.current.position.z = 0.2;
        camera.lookAt(modelRef.current.position);
        scene.add(gltf.scene);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight.position.set(10, 10, 10);
        directionalLight.castShadow = true;

        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 500;
        scene.add(directionalLight);

        const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
        scene.add(light);

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
    scene.add(plate);

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      // Update OrbitControls
      controls.update();
      // Rotate model
      // if (modelRef.current) {
      //   modelRef.current.rotation.y += 0.01;
      // }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = container?.clientWidth;
      const height = container?.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", handleResize);
      mount?.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-[30vh] mx-auto md:w-[40vw] md:h-[30vh] lg:h-[30vh]  flex justify-center"
    >
      <div ref={mount} />
    </div>
  );
};

export default ModelViewer;
