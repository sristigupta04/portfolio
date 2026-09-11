```jsx
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

export default function AboutWorld({ onBack }) {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      {/* About title */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.8}
        anchorX="center"
        anchorY="middle"
      >
        ABOUT ME
      </Text>

      {/* About content */}
      <Text
        position={[0, 0.5, 0]}
        maxWidth={6}
        fontSize={0.35}
        lineHeight={1.5}
        anchorX="center"
        anchorY="middle"
      >
        I am a developer who loves building
        interactive and creative digital experiences.
      </Text>

      {/* Back */}
      <Text
        position={[0, -2, 0]}
        fontSize={0.4}
        anchorX="center"
        anchorY="middle"
        onClick={onBack}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        ← BACK
      </Text>

      <OrbitControls />
    </Canvas>
  );
}
```
