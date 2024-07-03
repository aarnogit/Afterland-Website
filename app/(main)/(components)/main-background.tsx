"use client";

import { Canvas } from "@react-three/fiber";
import { MainMoo } from "./main-moo";
import { Center, OrbitControls } from "@react-three/drei";

const MBackground = () => {
  return (
    <div
      className="fixed right-0 h-screen w-screen pointer-events-none"
      style={{
        background: `#000 url('/background.svg') center center no-repeat`,
        backgroundSize: "180%",
      }}
    >
      <Canvas camera={{ fov: 20 }}>
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Center position-x={1} position-y={-0.15}>
          <MainMoo />
        </Center>
      </Canvas>
    </div>
  );
};

export default MBackground;
