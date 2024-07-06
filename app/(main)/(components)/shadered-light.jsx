// import { useTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useEffect, useMemo, useRef } from "react";
// import { DoubleSide, Vector2 } from "three";
// import { cowVertexShader, lightFragmentShader } from "./shaders/cow";

// export default function ShaderedLight() {
//   const refSM = useRef();
//   const meshRef = useRef();
//   const noiseTexture = useTexture("/model/noise.png");
//   const mouse = useRef(new Vector2());

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   // Define the shader uniforms with memoization to optimize performance
//   const uniforms = useMemo(
//     () => ({
//       iTime: {
//         type: "f",
//         value: 1.0,
//       },
//       iResolution: {
//         type: "v2",
//         value: new Vector2(4, 3),
//       },
//       iChannel0: {
//         type: "t",
//         value: noiseTexture,
//       },
//     }),
//     []
//   );

//   useFrame((state) => {
//     let time = state.clock.getElapsedTime();
//     meshRef.current.material.uniforms.iTime.value = time * .2;
//   });

//   return (
//     <mesh
//       ref={meshRef}
//       scale={.7}
//     >
//       <planeGeometry args={[6, 4]} />

//       <shaderMaterial
//         uniforms={uniforms}
//         vertexShader={cowVertexShader}
//         fragmentShader={lightFragmentShader}
//         side={DoubleSide}
//         blendColor={'#000'}

//       />
//     </mesh>
//   );
// }
