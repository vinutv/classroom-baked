import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from 'react';
import { Classroom } from "./Classroom";
import { Vector3 } from 'three';


export const Experience = () => {
   const [position, setPosition] = useState(new Vector3(0, 0, 0));

  // Use the useFrame hook to update the position of the model
  useFrame(() => {
    setPosition(new Vector3(0, -4.7, 0)); // Set the desired position
  });

  return (
    <>
      {/* <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
      <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <Classroom position={position} />
    </>
  );
};
