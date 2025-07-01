
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes component
const FloatingShapes = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Floating cubes */}
      <mesh position={[2, 1, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhongMaterial color="#3b82f6" transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[-3, -1, -3]}>
        <octahedronGeometry args={[0.3]} />
        <meshPhongMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[1, -2, -1]}>
        <tetrahedronGeometry args={[0.4]} />
        <meshPhongMaterial color="#06b6d4" transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[-2, 2, -4]}>
        <icosahedronGeometry args={[0.3]} />
        <meshPhongMaterial color="#f59e0b" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

// Neural network connections
const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const [positions, connections] = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    const connections = [];
    
    // Generate random points
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    // Create connections between nearby points
    for (let i = 0; i < 100; i++) {
      for (let j = i + 1; j < 100; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );
        
        if (distance < 5) {
          connections.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    
    return [positions, new Float32Array(connections)];
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Neural points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.6} />
      </points>
      
      {/* Neural connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.2} />
      </lineSegments>
    </group>
  );
};

// Animated particles
const AnimatedParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#8b5cf6" transparent opacity={0.4} />
    </points>
  );
};

const Dynamic3DBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
        
        <FloatingShapes />
        <NeuralNetwork />
        <AnimatedParticles />
      </Canvas>
    </div>
  );
};

export default Dynamic3DBackground;
