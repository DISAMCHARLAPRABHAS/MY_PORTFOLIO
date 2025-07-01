
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GeometricDivider = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.2;
        child.rotation.z = Math.cos(state.clock.elapsedTime + index) * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 5 }).map((_, index) => (
        <mesh key={index} position={[(index - 2) * 1.5, 0, 0]}>
          <dodecahedronGeometry args={[0.2]} />
          <meshPhongMaterial 
            color={`hsl(${220 + index * 20}, 70%, 60%)`} 
            transparent 
            opacity={0.7} 
          />
        </mesh>
      ))}
    </group>
  );
};

const SectionTransition3D = () => {
  return (
    <div className="h-20 relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 2]} intensity={0.6} color="#3b82f6" />
        <GeometricDivider />
      </Canvas>
    </div>
  );
};

export default SectionTransition3D;
