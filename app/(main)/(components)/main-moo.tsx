import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

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
  const [matcap] = useMatcapTexture("1D3FCC_051B5F_81A0F2_5579E9");
  const model = useRef<any>(null);

  const { nodes, materials } = useGLTF("/korova.glb") as GLTFResult;

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    if (model.current) {
      const { x, y } = mouse.current;
      const vector = new THREE.Vector3(x, y, 0.5).unproject(state.camera);
      const dir = vector.sub(state.camera.position).normalize();
      const distance = -state.camera.position.z / dir.z;
      const pos = state.camera.position
        .clone()
        .add(dir.multiplyScalar(distance));

      model.current.lookAt(pos);
    }
  });
  return (
    <group {...props} ref={model} dispose={null} rotation-x={Math.PI / 2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.korova3_ZBrushPolyMesh3D_1.geometry}
        // material={materials.korova4}
        scale={0.25}
      >
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/korova.glb");
