'use client'

import { useGLTF } from "@react-three/drei"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect } from "react"
import { Mesh, MeshStandardMaterial, Object3D } from "three"

const Scene = () => {
    
    return (
        <Canvas style={{width: '100%', height: '100%'}}>
            <directionalLight position={[0, 0, 10]} intensity={0.8} />
            <Plane />
            {/* <OrbitControls /> */}
        </Canvas>
    )
}

const Plane = () => {
    const {scene} = useGLTF('/plane.gltf')
    const geometry = scene.getObjectByName('Plane') as Object3D

    useEffect(() => {
        if(geometry) {
            geometry.traverse((child:any) => {
                if(child.isMesh) {
                child.material = new MeshStandardMaterial({color: 'cyan'})
                }
            })
        }
    }, [geometry])

    return (
        <group>
            <mesh position={[1, 0.5, 0]} scale={0.025} rotation={[Math.PI/5, Math.PI/3.5, 0]}>
            <primitive object={geometry} />
            <meshStandardMaterial attach="object3d" color="red" />
            </mesh>
        </group>
        )
}

export default Scene