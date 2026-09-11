import {Canvas} from "@react-three/fiber";
import {OrbitControls, Text} from "@react-three/drei";

export default function About({onClick}){
return(
    <Canvas camera={{position:[0,3,8],fov:60}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10,10,5]} intensity={1} />
        <directionalLight position={[-10,-10,-5]} intensity={1} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <group position={[3,1.5,-3]}
        onClick={onClick}
            onPointerOver={(e)=>{
           e.stopPropagation();
           document.body.style.cursor = 'pointer';
)

}