"use client";

import { Center, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { useMediaQuery } from "usehooks-ts";
import { MainMoo } from "./main-moo";

const MBackground = () => {
  const isSmall = useMediaQuery("(max-width:735px)");
  return (
    <div
      className="fixed left-0 top-0 h-screen w-screen pointer-events-none z-50"
      style={{
        background: "#000 url('/background.svg') center center no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Canvas camera={{ fov: 20 }}>
        <directionalLight
          position={[4, 0, -5]}
          intensity={1.5}
          color="#15FAF8"
        />
        <directionalLight
          position={[-4, 0, -5]}
          intensity={2}
          color="#0B098D"
        />
        <directionalLight
          position={[-0.66, 0, -20]}
          intensity={2.5}
          color="#15FAF8"
        />
        <ambientLight intensity={2} />
        <EffectComposer>
          <N8AO aoRadius={0.2} intensity={0.2} />
          <TiltShift2 blur={0} />
          {/* <Glitch /> */}
        </EffectComposer>

        <Center position-x={isSmall ? 0 : -0.66} position-y={-0.25}>
          {isSmall ? (
            <Float>
              <MainMoo />
            </Float>
          ) : (
            <MainMoo />
          )}
        </Center>
      </Canvas>
    </div>
  );
};

export default MBackground;
