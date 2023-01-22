import React from "react";
import { useGLTF } from "@react-three/drei";
import Bottle from "../assets/scene5/bottle_3d.glb";
export function Model(props) {
  const { nodes, materials } = useGLTF(Bottle);
  return (
    <group {...props} dispose={null}>
      <group scale={0.09}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object004001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rum001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logo2001.geometry}
          material={materials.logo2}
          position={[0.07, 59.01, -0.48]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logo005.geometry}
          material={materials["Labble.003"]}
          position={[-5.58, 24.48, 0]}
          scale={0.99}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cap001.geometry}
          material={materials.gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Label_m001.geometry}
          material={materials.label}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CORK001.geometry}
          material={materials.cork}
        />
      </group>
    </group>
  );
}

useGLTF.preload(Bottle);
