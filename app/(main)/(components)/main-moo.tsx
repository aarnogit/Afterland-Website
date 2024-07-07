import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { useMediaQuery } from "usehooks-ts";

type GLTFResult = GLTF & {
  nodes: {
    korova3_ZBrushPolyMesh3D_1: THREE.Mesh;
  };
  materials: {
    korova4: THREE.MeshStandardMaterial;
  };
};

export function MainMoo(props: JSX.IntrinsicElements["group"]) {
  const mouse = useRef(new THREE.Vector2());
  const model = useRef<any>(null);

  const { nodes } = useGLTF("/model/korova.glb") as GLTFResult;

  const isXL = useMediaQuery("(max-width:1536px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const isSmall = useMediaQuery("(max-width:735px)");

  useEffect(() => {
    if (isSmall) return;

    const handleMouseMove = (event: any) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const seperate = isSmall ? 0 : isTablet ? -0.33 : -0.66;
  useFrame((state) => {
    if (model.current && !isSmall) {
      const { x, y } = mouse.current;
      const init = new THREE.Vector3(0, 0, 0.5);
      const vector = new THREE.Vector3(x - seperate / 2, y, 0.5).unproject(
        state.camera
      );
      const dir = vector.sub(state.camera.position).normalize();
      const distance = -state.camera.position.z / dir.z;
      const pos = state.camera.position
        .clone()
        .add(dir.multiplyScalar(distance));

      model.current.lookAt(init.lerp(pos, 0.4));
    }
  });

  return (
    <group
      {...props}
      ref={model}
      dispose={null}
      rotation-x={isSmall ? null : Math.PI / 2}
    >
      <mesh
        geometry={nodes.korova3_ZBrushPolyMesh3D_1.geometry}
        scale={isSmall ? 0.15 : 0.3}
      >
        <MeshTransmissionMaterial
          color={"#15FAF8"}
          transmission={1}
          metalness={0.2}
          roughness={0.01}
          ior={1.2}
          chromaticAberration={0.02}
          backside
          // backsideThickness={6}
          thickness={1}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/model/korova.glb");
