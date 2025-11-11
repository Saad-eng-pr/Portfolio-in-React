import React, { useRef } from 'react'
import { Float, useGLTF, useTexture } from '@react-three/drei'

const Puydedome = (props) => {
  const { nodes, materials } = useGLTF('/models/puy_de_dome.glb');
  const puyTexture = useTexture('textures/TerrainNodeMaterial_baseColor.jpeg');
  return (
    
    <group {...props} dispose={null} scale={0.003}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.TerrainNodeMaterial}
        rotation={[Math.PI / 12, -Math.PI / 2, 0]}
      >
        <meshStandardMaterial map={puyTexture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/puy_de_dome.glb')

export default Puydedome;