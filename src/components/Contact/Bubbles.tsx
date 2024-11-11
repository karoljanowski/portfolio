'use client'
import { Canvas, useFrame } from "@react-three/fiber"
import { BallCollider, Physics, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { OrbitControls, RoundedBox, useTexture } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'

const AboutStack = () => {
    return (
        <div className="relative grid place-items-center w-full h-screen">
            <Scene />
        </div>
    )
}
const Pointer = ({ vec = new THREE.Vector3() }) => {
    const ref = useRef<RapierRigidBody>(null)
    
    useFrame(({ mouse, viewport }) => {
        vec.lerp({ 
            x: (mouse.x * viewport.width) / 2, 
            y: (mouse.y * viewport.height) / 2, 
            z: 0 
        }, 0.2)
        ref.current?.setNextKinematicTranslation(vec)
    })
    
    return (
        <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
            <BallCollider args={[0.5]} />
        </RigidBody>
    )
}
const Scene = () => {
    return (
        <div className="absolute inset-0">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Physics gravity={[0, 0, 0]}>
                    <Pointer />
                    <Sphere position={[0, 0, 1]} texturePath={'/stack/css.svg'} color="cyan" />
                    <Sphere position={[0, 1, 0]} texturePath={'/stack/html.svg'} color="cyan" />
                    <Sphere position={[0, 0, 0]} texturePath={'/stack/js.svg'} color="cyan" />
                    <Sphere position={[0, 0, 1]} texturePath={'/stack/next.svg'} color="cyan" />
                    <Sphere position={[0, 0, 0]} texturePath={'/stack/tailwind.svg'} color="cyan" />
                    <Sphere position={[0, 1, 0]} texturePath={'/stack/react.svg'} color="cyan" />
                    <Sphere position={[0, 0, 1]} texturePath={'/stack/ts.svg'} color="cyan" />


                </Physics>
                <OrbitControls />
            </Canvas>
        </div>
    )
}

const Sphere = ({position, texturePath, color}: {position: [number, number, number], texturePath: string, color: string}) => {
    const rigidBody = useRef<RapierRigidBody>(null)
    const vec = new THREE.Vector3()
    // const texture = useTexture(texturePath)


    useFrame((_, delta) => {
        if (!rigidBody.current) return
        delta = Math.min(0.05, delta)
        rigidBody.current.applyImpulse(vec.copy(rigidBody.current.translation()).normalize().multiplyScalar(-30 * delta), true)
    })

    return (
        <RigidBody ref={rigidBody} colliders="cuboid" position={position} linearDamping={2} angularDamping={2}>
            <mesh>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshPhysicalMaterial 
                    transparent
                    opacity={0.5}
                    color={'white'}
                    thickness={0.2}
                    roughness={0}
                    metalness={0}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    transmission={1}
                />
            </mesh>

        </RigidBody>
    )
}

export default AboutStack