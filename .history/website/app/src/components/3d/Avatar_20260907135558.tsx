"use client";

import type { ThreeElements } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";

export default function Avatar(props: ThreeElements["group"]) {
  const headRef = useRef<Mesh>(null);

  return (
    <group {...props}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 2.3, 0]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#d9a07c" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.25, 0]}>
        <capsuleGeometry args={[0.55, 1.2, 8, 32]} />
        <meshStandardMaterial color="#24191b" />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.25, 0.2, 0]}>
        <capsuleGeometry args={[0.18, 1.0, 8, 16]} />
        <meshStandardMaterial color="#292022" />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.25, 0.2, 0]}>
        <capsuleGeometry args={[0.18, 1.0, 8, 16]} />
        <meshStandardMaterial color="#292022" />
      </mesh>

      {/* Left shoe */}
      <mesh position={[-0.25, -0.4, 0.12]}>
        <boxGeometry args={[0.4, 0.2, 0.65]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Right shoe */}
      <mesh position={[0.25, -0.4, 0.12]}>
        <boxGeometry args={[0.4, 0.2, 0.65]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}