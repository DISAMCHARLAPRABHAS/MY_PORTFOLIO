
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

export const BackgroundElements = () => {
  const particlesRef = useRef<Group>(null);
  const neonRingsRef = useRef<Group>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (neonRingsRef.current) {
      neonRingsRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group>
      {/* Floating particles */}
      <group ref={particlesRef}>
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 8 + Math.random() * 4;
          const height = (Math.random() - 0.5) * 8;
          
          return (
            <mesh 
              key={i}
              position={[
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius
              ]}
            >
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshBasicMaterial 
                color={i % 3 === 0 ? "#4f46e5" : i % 3 === 1 ? "#7c3aed" : "#06b6d4"} 
                transparent
                opacity={0.6}
              />
            </mesh>
          );
        })}
      </group>

      {/* Neon rings */}
      <group ref={neonRingsRef} position={[0, 0, -5]}>
        <mesh>
          <torusGeometry args={[3, 0.02, 16, 100]} />
          <meshBasicMaterial color="#4f46e5" transparent opacity={0.3} />
        </mesh>
        <mesh>
          <torusGeometry args={[4, 0.015, 16, 100]} />
          <meshBasicMaterial color="#7c3aed" transparent opacity={0.2} />
        </mesh>
        <mesh>
          <torusGeometry args={[5, 0.01, 16, 100]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
        </mesh>
      </group>

      {/* Wall panels */}
      <mesh position={[0, 2, -8]} receiveShadow>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* Floor */}
      <mesh position={[0, -2, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
    </group>
  );
};
