
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial } from 'three';
import { RoundedBox } from '@react-three/drei';

interface WorkspaceDeskProps {
  position: [number, number, number];
}

export const WorkspaceDesk = ({ position }: WorkspaceDeskProps) => {
  const laptopScreenRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (laptopScreenRef.current && laptopScreenRef.current.material) {
      const material = laptopScreenRef.current.material as MeshStandardMaterial;
      material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Desk surface */}
      <RoundedBox args={[4, 0.1, 2]} radius={0.02} smoothness={4} receiveShadow>
        <meshStandardMaterial color="#374151" />
      </RoundedBox>

      {/* Desk legs */}
      {[[-1.8, -0.5, -0.8], [1.8, -0.5, -0.8], [-1.8, -0.5, 0.8], [1.8, -0.5, 0.8]].map((pos, index) => (
        <mesh key={index} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      ))}

      {/* Laptop base */}
      <RoundedBox args={[1.2, 0.05, 0.8]} radius={0.02} position={[0, 0.08, 0]} castShadow>
        <meshStandardMaterial color="#1f2937" />
      </RoundedBox>

      {/* Laptop screen */}
      <RoundedBox 
        ref={laptopScreenRef}
        args={[1.2, 0.02, 0.75]} 
        radius={0.02} 
        position={[0, 0.45, -0.2]} 
        rotation={[-0.3, 0, 0]}
        castShadow
      >
        <meshStandardMaterial 
          color="#000000"
          emissive="#4f46e5"
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* Coffee cup */}
      <mesh position={[1.2, 0.2, 0.3]} castShadow>
        <cylinderGeometry args={[0.08, 0.06, 0.15]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>

      {/* Plant pot */}
      <mesh position={[-1.2, 0.15, 0.2]} castShadow>
        <cylinderGeometry args={[0.1, 0.08, 0.2]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>

      {/* Plant */}
      <mesh position={[-1.2, 0.35, 0.2]} castShadow>
        <coneGeometry args={[0.15, 0.3, 8]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>

      {/* Books */}
      <RoundedBox args={[0.2, 0.05, 0.3]} radius={0.01} position={[-0.8, 0.08, -0.5]} castShadow>
        <meshStandardMaterial color="#dc2626" />
      </RoundedBox>
      <RoundedBox args={[0.2, 0.05, 0.3]} radius={0.01} position={[-0.8, 0.13, -0.5]} castShadow>
        <meshStandardMaterial color="#2563eb" />
      </RoundedBox>
    </group>
  );
};
