import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Object3D | null>(null); // Utilise Object3D pour une référence générale

  useEffect(() => {
    // Crée la scène
    const scene = new THREE.Scene();
    
    // Paramètre la caméra
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Crée le renderer avec fond transparent
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const canvasWidth = 800; // Largeur du canvas
    const canvasHeight = 600; // Hauteur du canvas
    renderer.setSize(canvasWidth, canvasHeight);
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    // Ajoute le renderer au DOM
    mountRef.current?.appendChild(renderer.domElement);

    // Ajoute de l'éclairage
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75); 
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Charge le modèle 3D
    const loader = new GLTFLoader();
    loader.load(
      'scene.gltf',
      (gltf) => {
        modelRef.current = gltf.scene; // Stocke une référence au modèle chargé
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('An error happened:', error);
      }
    );

    // Positionne la caméra
    camera.position.set(0, 1.5, 3);

    // Boucle d'animation
    const animate = function () {
      requestAnimationFrame(animate);

      // Fait tourner le modèle sur lui-même autour de l'axe Y
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '800px', height: '600px' }} />;
};

export default ModelViewer;
