import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const ThreeScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000); // Increased far plane to 2000
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: false });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Set clear color to black

    const particles = [];
    const particleCount = 250; // Adjusted to a more moderate particle count
    const geometry = new THREE.BufferGeometry();
    
    // Create particles
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 800; // Adjust range for X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 800; // Adjust range for Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 800; // Adjust range for Z
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Use a larger size for particles and set opacity for better visibility
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 3, sizeAttenuation: true, transparent: true, opacity: 0.7 }); 
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);
    
    camera.position.z = 100; // Adjust camera position as needed

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.01;
      particlesMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, []); // Run only once on mount

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ThreeScene;
