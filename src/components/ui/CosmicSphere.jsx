import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.8}>
      <MeshDistortMaterial
        color="var(--color-brand-red)"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        transparent
        opacity={0.6}
        wireframe={true}
      />
    </Sphere>
  );
};

const CosmicSphere = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <a aria-label="Navigation Link"mbientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default CosmicSphere;
