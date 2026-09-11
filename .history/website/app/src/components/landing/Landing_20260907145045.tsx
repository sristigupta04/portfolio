import { Canvas } from "@react-three/fiber";
import {OrbitControls,  Text} from "@react-three/drei";


export default function Aboutportal({onClick}){
    return (
        <group position={[3,1.5,-3]}
        onClick={onClick}
            onPointerOver={(e)=>{
           e.stopPropagation();
           document.body.style.cursor = 'pointer';

            }}
            onPointerOut={(e)=>{
                document.body.style.cursor = 'default';
            }

        }>
  <mesh>
<torusGeometry args={[0.5, 0.2, 16, 100]} />
<meshStandardMaterial emissive="white" emissiveIntensity={2} />
  </mesh>   

  <Text 
  position={[0,-1.5,0]}
  fontSize={0.35}
  anchorX="center"
  anchorY="middle"
  >
    About
  </Text>
        </group>   

    )
}


export default function Landing({onOpenAbout}){
    return(
        <Canvas camera={{position:[0,3,8],fov:60}}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10,10,5]} intensity={1} />
            <directionalLight position={[-10,-10,-5]} intensity={1} />
            <OrbitControls enablePan={false} enableZoom={false} />
            <About onClick={onOpenAbout}/>
        </Canvas>
    )
}