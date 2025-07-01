
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Floating3DIconProps {
  color: string;
  size?: number;
}

const FloatingCube = ({ color }: { color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshPhongMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

const Floating3DIcon = ({ color, size = 40 }: Floating3DIconProps) => {
  return (
    <div className="absolute -top-2 -right-2 pointer-events-none" style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[1, 1, 1]} intensity={0.8} />
        <FloatingCube color={color} />
      </Canvas>
    </div>
  );
};

export default Floating3DIcon;
