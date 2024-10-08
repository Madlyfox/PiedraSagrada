"use client";
import React from "react";

function Scene() {
  return (
    <mesh rotation={[0, 10, 0]}>
      <boxGeometry attach={"geometry"} args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="#6be092" />
    </mesh>
  );
}

export default Scene;
