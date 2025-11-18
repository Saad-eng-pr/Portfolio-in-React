import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const BunnyDetective = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/bunny_detective.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (animations.length) {
      actions[animations[0].name]?.play()
    }
  }, [actions, animations])

  return (
    <group ref={group} {...props} dispose={null} scale={2.5}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -Math.PI / 3]} position={[0, -1.5, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_39">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Bunny}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Whiskers}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Bunny_38" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/bunny_detective.glb')

export default BunnyDetective
