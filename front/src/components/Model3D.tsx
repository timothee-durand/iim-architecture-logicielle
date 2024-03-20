import { useRef, useEffect, FC } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * ModelViewer component is responsible for rendering a 3D model.
 * It uses the Three.js library to create a 3D scene, add lighting, load the 3D model, and animate it.
 * @returns {React.FC} The rendered component
 */
const ModelViewer: React.FC = () => {
  // Reference to the HTML element where the 3D scene will be mounted
  const mountRef = useRef<HTMLDivElement>(null);
  // Reference to the loaded 3D model
  const modelRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    // Create the 3D scene
    const scene = new THREE.Scene();

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Create the renderer with a transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const canvasWidth = 800; // Width of the canvas
    const canvasHeight = 600; // Height of the canvas
    renderer.setSize(canvasWidth, canvasHeight);
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();
    // Set the camera to look at the center of the scene
    camera.lookAt(0, 0, 0);

    // Add the renderer to the DOM
    mountRef.current?.appendChild(renderer.domElement);

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 3);
    scene.add(directionalLight);

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(
        'scene.gltf',
        (gltf) => {
          modelRef.current = gltf.scene; // Store a reference to the loaded model
          scene.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error('An error happened:', error);
        }
    );

    // Position the camera
    camera.position.set(0.5, 1, 1.5);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the model around the Y-axis
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Render a div that will contain the 3D scene
  return <div ref={mountRef} style={{display:"flex", justifyItems: "center", alignItems:"center"}}/>;
};

export default ModelViewer;