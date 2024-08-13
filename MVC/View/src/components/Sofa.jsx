/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 Sofa.gltf 
Author: MADE.COM (https://sketchfab.com/made-it)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/monterosso-left-hand-corner-sofastorm-blue-4232249310824cd99ff7d1c5ae4a9660
Title: Monterosso Left Hand Corner Sofa,Storm Blue
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Sofa(props) {
  const { nodes, materials } = useGLTF('/3dModels/Sofa/Sofa.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Floor.geometry} material={materials.EnvironmentAmbientLight} />
        <mesh geometry={nodes.FABRIC.geometry} material={materials.FABRIC} />
        <mesh geometry={nodes.CHROME.geometry} material={materials.CHROME} />
      </group>
    </group>
  )
}

useGLTF.preload('/3dModels/Sofa/Sofa.gltf')
