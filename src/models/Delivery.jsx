/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import deliveryScene from '../assets/3d/delivery.glb'

const Delivery = (props) => {
    const deliveryRef = useRef()
    const { nodes, materials } = useGLTF(deliveryScene)
    return (
        <a.group ref={deliveryRef} {...props}>
            <group position={[0, 0.2, 0]}>
                <mesh geometry={nodes.Mesh_body.geometry} material={materials.lightBack} />
                <mesh geometry={nodes.Mesh_body_1.geometry} material={materials.paintGreen} />
                <mesh geometry={nodes.Mesh_body_2.geometry} material={materials.paintWhite} />
                <mesh geometry={nodes.Mesh_body_3.geometry} material={materials.plastic} />
                <mesh geometry={nodes.Mesh_body_4.geometry} material={materials.carTire} />
                <mesh geometry={nodes.Mesh_body_5.geometry} material={materials._defaultMat} />
                <mesh geometry={nodes.Mesh_body_6.geometry} material={materials.lightFront} />
                <mesh geometry={nodes.Mesh_body_7.geometry} material={materials.window} />
            </group>
            <group position={[0, 1.5, 1.5]}>
                <mesh geometry={nodes.Mesh_door.geometry} material={materials.carTire} />
                <mesh geometry={nodes.Mesh_door_1.geometry} material={materials._defaultMat} />
            </group>
            <group position={[-0.3, 0.3, 0.6]} scale={[-1, 1, 1]}>
                <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials._defaultMat} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials.plastic} />
            </group>
            <group position={[0.3, 0.3, 0.6]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
                <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials._defaultMat} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials.plastic} />
            </group>
            <group position={[-0.3, 0.3, -1]} scale={[-1, 1, 1]}>
                <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials._defaultMat} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials.plastic} />
            </group>
            <group position={[0.3, 0.3, -1]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
                <mesh geometry={nodes.Mesh_wheel_frontLeft.geometry} material={materials.carTire} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_1.geometry} material={materials._defaultMat} />
                <mesh geometry={nodes.Mesh_wheel_frontLeft_2.geometry} material={materials.plastic} />
            </group>
        </a.group>
    )
}

export default Delivery
