// import {
//   Center,
//   useGLTF,
//   useTexture
// } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useEffect, useMemo, useRef } from "react";
// import { DoubleSide, Vector2, Vector4 } from "three";
// import { cowFragmentShader, cowVertexShader } from "./shaders/cow";

// export default function Experience() {
//   const refSM = useRef();
//   const meshRef = useRef();
//   const { nodes } = useGLTF("/model/korova.glb");
//   const noiseTexture = useTexture("/model/korova4_baseColor.png");
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
//     meshRef.current.material.uniforms.iTime.value = time * 0.2;
//   });


//   return (
//     <mesh
//       // geometry={nodes.korova3_ZBrushPolyMesh3D_1.geometry}
//       // scale={0.7}
//       // position={nodes.korova3_ZBrushPolyMesh3D_1.position}
//       // rotation={nodes.korova3_ZBrushPolyMesh3D_1.rotation}
//       ref={meshRef}
//     >
//       {/* <portalMaterial ref={refSM} /> */}
//       {/* <planeGeometry args={[4, 3]} /> */}

//       <shaderMaterial
//         uniforms={uniforms}
//         vertexShader={cowVertexShader}
//         fragmentShader={cowFragmentShader}
//         side={DoubleSide}
//       />
//     </mesh>
//   );
// }
