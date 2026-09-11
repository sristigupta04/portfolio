import {Canvas} from "@react-three/fiber";
import {OrbitControls, Text} from "@react-three/drei";

export default function About({onClick}){
return(
    <Canvas camera={{position:[0,3,8],fov:60}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10,10,5]} intensity={1} />
        <directionalLight position={[-10,-10,-5]} intensity={1} />
        <OrbitControls enablePan={false} enableZoom={false} />
     <Text position={[0,0.5,0]} maxWidth={2} fontSize={0.3} anchorX="center" anchorY="middle">
        This is a 3D website built with React Three Fiber. It demonstrates the use of 3D graphics in a web application, allowing for interactive and immersive experiences.
     </Text>
    </Canvas>

)

}