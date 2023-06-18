import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Stage, Grid, Environment, Backdrop, ContactShadows } from '@react-three/drei'
import { Perf } from 'r3f-perf'


function App() {
// const { color } = useControls({ color: '#40006A' })
  return (
     <Canvas shadows camera={{ position: [0, 8, 30], scale: [0.8, 0.8, 0.8], fov: 30 }}>
      <Perf />
      <color attach="background" args={["#40006A"]} />

      <ambientLight intensity={0.1} />
      {/* <directionalLight position={[-10, 0, -5]} intensity={1} color="red" /> */}
      {/* <directionalLight position={[-1, -2, -5]} intensity={0.2} color="#0c8cbf" /> */}
      {/* <spotLight position={[5, 0, 5]} intensity={2.5} penumbra={1} angle={0.35} castShadow color="#2b0080" /> */}

      {/* <Stage intensity={0.2} environment="sunset" shadows={{ type: 'contact', colorBlend: 5, opacity: 5 }} adjustCamera={false} background="#2b0080"> */}
      <Experience/>
      {/* </Stage> */}
      {/* <Backdrop receiveShadow scale={[70, 25, 15]} floor={3} position={[0, -5, -10]}>
        <meshPhysicalMaterial roughness={1} color="#40006A" />
      </Backdrop> */}
      <Grid renderOrder={-1} position={[0, -4.8, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 1]} fadeDistance={50} />
      <ContactShadows frames={2} position={[0, -4.9, 0]} scale={30} blur={2} opacity={0.6} />

      <Environment background files={'/environmentMaps/venice_sunset_1k.hdr'} blur={0.8} />
    </Canvas>
  );
}

export default App;
