
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { DeveloperAvatar } from './3d/DeveloperAvatar';
import { FloatingUIPanel } from './3d/FloatingUIPanel';
import { WorkspaceDesk } from './3d/WorkspaceDesk';
import { BackgroundElements } from './3d/BackgroundElements';

const Interactive3DScene = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#7c3aed" />

          {/* Environment */}
          <Environment preset="city" />

          {/* Main Scene Elements */}
          <DeveloperAvatar position={[0, 0, 0]} />
          <WorkspaceDesk position={[0, -1, 0]} />
          
          {/* Floating UI Panels */}
          <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <FloatingUIPanel 
              position={[-3, 2, 1]} 
              rotation={[0, 0.3, 0]}
              content="code"
            />
          </Float>
          
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.7}>
            <FloatingUIPanel 
              position={[3, 1.5, 0]} 
              rotation={[0, -0.4, 0]}
              content="charts"
            />
          </Float>
          
          <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.6}>
            <FloatingUIPanel 
              position={[0, 3, -1]} 
              rotation={[0, 0, 0]}
              content="startup"
            />
          </Float>

          {/* Background Elements */}
          <BackgroundElements />

          {/* Controls */}
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={15}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      
      {/* UI Overlay */}
      <div className="absolute top-4 left-4 text-white z-10">
        <h3 className="text-xl font-bold mb-2">Interactive Portfolio</h3>
        <p className="text-sm opacity-70">Click and drag to explore • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default Interactive3DScene;
