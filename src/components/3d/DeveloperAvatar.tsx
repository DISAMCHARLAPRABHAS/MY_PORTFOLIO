
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { Text } from '@react-three/drei';

interface DeveloperAvatarProps {
  position: [number, number, number];
}

export const DeveloperAvatar = ({ position }: DeveloperAvatarProps) => {
  const groupRef = useRef<Group>(null);
  const headRef = useRef<Mesh>(null);
  const bodyRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.7, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>
      
      {/* Hair */}
      <mesh position={[0, 1.9, -0.1]} castShadow>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Body */}
      <mesh ref={bodyRef} position={[0, 1, 0]} castShadow>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Blazer */}
      <mesh position={[0, 1, 0.05]} castShadow>
        <boxGeometry args={[0.85, 1.25, 0.35]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.6, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.8]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      <mesh position={[0.6, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.8]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Typing hands */}
      <mesh position={[-0.3, 0.3, 0.4]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>
      <mesh position={[0.3, 0.3, 0.4]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Name label */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        Prabhas Naidu
      </Text>
      <Text
        position={[0, 2.2, 0]}
        fontSize={0.12}
        color="#a855f7"
        anchorX="center"
        anchorY="middle"
      >
        AI Builder & Startup Founder
      </Text>
    </group>
  );
};
