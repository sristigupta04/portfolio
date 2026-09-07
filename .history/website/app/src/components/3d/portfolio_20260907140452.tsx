"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";

export default function Portfolio() {
  return (
    <Canvas
      camera={{
        position: [0, 2, 7],
        fov: 45,
      }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[3, 5, 4]}
        intensity={3}
      />

      <Avatar position={[0, 0, 0]} />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
      >
        <circleGeometry args={[4, 64]} />

        <meshStandardMaterial
          color="#351719"
          roughness={0.35}
          metalness={0.4}
        />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}