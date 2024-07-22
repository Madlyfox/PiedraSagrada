"use client";

import { Container } from "@/app/components/layout/container";
import { Canvas, Camera } from "@react-three/fiber";
import React, { useEffect } from "react";
import Scene from "./scene";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import style from "./index.module.css";
import * as THREE from "three";

function Page() {
  const model = useGLTF("./model/scene.gltf");
  const bottle = useGLTF("./bottle/scene.gltf");

  useEffect(() => {});
  return (
    <Container flex flexDirection="row" className={style.cont}>
      <Canvas>
        <PerspectiveCamera position={[0, 0, 0]} lookAt={} />

        {/* <Scene /> */}
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        /> */}
        <primitive object={model.scene} scale={1} />
        {/* <primitive object={bottle.scene} scale={5} /> */}
      </Canvas>
    </Container>
  );
}

export default Page;
