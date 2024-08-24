"use client";

import { Container } from "@/app/components/layout/container";
import { Canvas, Camera } from "@react-three/fiber";
import React, { useEffect, useState, useTransition } from "react";
import Scene from "./scene";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import style from "./index.module.css";
import * as THREE from "three";
import Galery from "@/app/components/galery";

// function Env() {
//   const [preset, setPreset] = useState("sunset");
//   // You can use the "inTransition" boolean to react to the loading in-between state,
//   // For instance by showing a message
//   const [inTransition, startTransition] = useTransition();

//   return <Environment background />;
// }

function Page() {
  // const model = useGLTF("./model/scene.gltf");
  // const bottle = useGLTF("./bottle/scene-2-1.gltf");

  useEffect(() => {});
  return (
    <Container flex flexDirection="column" className={style.cont}>
      <Container flex flexDirection="column" className={style.test}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          necessitatibus tempora facilis et ducimus veritatis corporis omnis,
          doloremque ratione? Explicabo rerum reiciendis, error odio
          necessitatibus ut aspernatur beatae ullam eligendi?
        </p>
      </Container>
      <Container className={style.holder}>
        <Container flex flexDirection="row" className={style.test2}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            necessitatibus tempora facilis et ducimus veritatis corporis omnis,
            doloremque ratione? Explicabo rerum reiciendis, error odio
            necessitatibus ut aspernatur beatae ullam eligendi?
          </p>
        </Container>
      </Container>
    </Container>
  );
}

export default Page;

// <Canvas>
// <ambientLight intensity={5} />
// <PerspectiveCamera position={[0, 0, 0]} />
// <Env />
// <OrbitControls
//   enableZoom={true}
//   maxPolarAngle={Math.PI / 2}
//   minPolarAngle={Math.PI / 2}
//   enablePan={true}
// />
// {/* <primitive object={bottle.scene} scale={1} /> */}
// <primitive object={bottle.scene} scale={5} />
// </Canvas>
