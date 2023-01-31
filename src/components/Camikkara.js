import React, { Suspense } from "react";
import { Stage, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

function CamikarraBottle() {
  return (
    <div>
      <Canvas
        shadows
        camera={{ position: [4, 0, -12], fov: 35 }}
        style={{ height: "60vh", width: "60vw" }}
      >
        <Suspense fallback={null}>
          <Stage intensity={0} adjustCamera={1.2}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
          </Stage>
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={8.0}
            enableZoom={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default React.memo(CamikarraBottle);
