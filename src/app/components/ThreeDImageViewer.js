import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDImageViewer = ({ imageSrc }) => {
  const sphereRef = useRef();

  // Load the 360 image and apply it as a texture to the sphere
  useEffect(() => {
    if (sphereRef.current && imageSrc) {
      const loader = new THREE.TextureLoader();
      loader.load(imageSrc, (texture) => {
        sphereRef.current.material.map = texture;
        sphereRef.current.material.needsUpdate = true;
      });
    }
  }, [imageSrc]);

  return (
    <Canvas
      style={{ width: '100%', height: '100vh' }}
      camera={{ position: [0, 0, 3], fov: 76 }}
      shadows
    >
      {/* Environment setup (you can set your background or environment here) */}
      <Sky distance={450000} sunPosition={[100, 10, 100]} />
      <Environment preset="sunset" /> {/* Adding a predefined environment map */}
      
      {/* Add a sphere with the 360 image as texture */}
      <mesh scale={[1, 1, 1]} rotation={[0, Math.PI, 0]} ref={sphereRef}>
        <sphereGeometry args={[50, 50, 50]} />
        <meshBasicMaterial side={THREE.DoubleSide} />
      </mesh>

      {/* Lights for the scene */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      {/* OrbitControls allow user to interact with the scene */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDImageViewer;
