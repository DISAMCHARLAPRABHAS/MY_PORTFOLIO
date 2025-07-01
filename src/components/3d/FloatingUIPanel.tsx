
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Text, RoundedBox } from '@react-three/drei';

interface FloatingUIPanelProps {
  position: [number, number, number];
  rotation: [number, number, number];
  content: 'code' | 'charts' | 'startup';
}

export const FloatingUIPanel = ({ position, rotation, content }: FloatingUIPanelProps) => {
  const panelRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const getContent = () => {
    switch (content) {
      case 'code':
        return {
          title: 'Code Editor',
          lines: ['const developer = {', '  name: "Prabhas",', '  skills: ["Python", "AI"],', '  passion: "Innovation"', '};'],
          color: '#10b981'
        };
      case 'charts':
        return {
          title: 'Analytics Dashboard',
          lines: ['📊 User Growth: +127%', '💰 Revenue: $50K+', '🚀 Projects: 15+', '⭐ Client Rating: 4.9/5'],
          color: '#3b82f6'
        };
      case 'startup':
        return {
          title: 'Startup Vision',
          lines: ['🎯 Mission: AI for All', '🌍 Impact: Global Scale', '💡 Innovation: Daily', '🔮 Future: Limitless'],
          color: '#8b5cf6'
        };
    }
  };

  const contentData = getContent();

  return (
    <group position={position} rotation={rotation}>
      {/* Glow effect */}
      <mesh ref={glowRef}>
        <planeGeometry args={[2.2, 1.4]} />
        <meshBasicMaterial color={contentData.color} transparent opacity={0.1} />
      </mesh>

      {/* Main panel */}
      <RoundedBox ref={panelRef} args={[2, 1.2, 0.05]} radius={0.05} smoothness={4}>
        <meshStandardMaterial 
          color="#1f2937" 
          transparent 
          opacity={0.9}
          emissive={contentData.color}
          emissiveIntensity={0.1}
        />
      </RoundedBox>

      {/* Panel border */}
      <RoundedBox args={[2.05, 1.25, 0.03]} radius={0.05} smoothness={4}>
        <meshBasicMaterial color={contentData.color} transparent opacity={0.5} />
      </RoundedBox>

      {/* Title */}
      <Text
        position={[0, 0.4, 0.03]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {contentData.title}
      </Text>

      {/* Content lines */}
      {contentData.lines.map((line, index) => (
        <Text
          key={index}
          position={[0, 0.15 - index * 0.12, 0.03]}
          fontSize={0.08}
          color="#d1d5db"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-regular.woff"
        >
          {line}
        </Text>
      ))}
    </group>
  );
};
