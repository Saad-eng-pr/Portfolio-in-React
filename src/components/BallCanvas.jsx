import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float floatIntensity={1} speed={1.75}> 
            <ambientLight intensity={0.5}/>
            <directionalLight position={[0,0,0.05]} intensity={2}/>

            <mesh castShadow receiveShadow scale={2.25}>
                <icosahedronGeometry args={[1,1]}/>
                <meshStandardMaterial 
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />

                <Decal 
                    position={[0,0,1]}
                    rotation={[2 * Math.PI, 0, 6]}
                    scale={1}
                    flatShading
                    map={decal}
                />
            </mesh>
        </Float>
    );
}


const BallCanvas = ({ icon }) => {
  return (
    <Canvas>
        <OrbitControls enableZoom={false} /> 
        <Ball imgUrl={icon}/>
    </Canvas>
  )
}

export default BallCanvas