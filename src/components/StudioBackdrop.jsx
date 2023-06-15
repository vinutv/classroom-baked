import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function StudioBackdrop(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/Studio_bg.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Backdrop.001']} position={[0, 0.008, -1.534]} rotation={[0, 0, -Math.PI]} scale={[-19.823, -1, -18.406]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Studio_bg.glb')
