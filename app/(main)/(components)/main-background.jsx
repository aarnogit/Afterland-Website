"use client";

import { Center, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  ChromaticAberration,
  EffectComposer,
  Glitch,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";

import { useMediaQuery } from "usehooks-ts";
import { MainMoo } from "./main-moo";
import { Vector2 } from "three";

const MBackground = () => {
  const isXL = useMediaQuery("(max-width:1536px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const isSmall = useMediaQuery("(max-width:735px)");
  return (
    <div
      className="fixed left-0 top-0 h-full min-h-dvh w-screen pointer-events-none z-50"
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
          <TiltShift2 blur={0.07} />

          <ChromaticAberration offset={[0.001, 0.002]} />
          <Glitch
            delay={[0.5, 35]}
            duration={[0.2, 1.0]}
            strength={[0.05, 0.14]}
            mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
            active // toggle on/off
            ratio={0.05}
          />
        </EffectComposer>

        <Center
          position-x={isSmall ? 0 : isTablet ? -0.33 : -0.66}
          position-y={isSmall ? -0.25 : 0}
        >
          {isSmall ? (
            <Float
              speed={0.6} // Animation speed, defaults to 1
              rotationIntensity={1.5} // XYZ rotation intensity, defaults to 1
              floatIntensity={0.4} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            >
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
