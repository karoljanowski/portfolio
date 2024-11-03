'use client'
import { Canvas, useFrame } from "@react-three/fiber"
import { BallCollider, Physics, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from 'three'

const AboutStack = () => {
    return (
        <div className="relative grid place-items-center">
            <div className="text-9xl font-bold text-center">STACK</div>
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
            <BallCollider args={[2]} />
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
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[0, 0, 0]} />
                    <Sphere position={[1, 0, 0]} />
                    <Sphere position={[0, 1, 0]} />
                    <Sphere position={[0, 0, 1]} />
                </Physics>
            </Canvas>
        </div>
    )
}

const Sphere = ({position}: {position: [number, number, number]}) => {
    const rigidBody = useRef<RapierRigidBody>(null)
    const vec = new THREE.Vector3()

    useFrame((_, delta) => {
        if (!rigidBody.current) return
        delta = Math.min(0.05, delta)
        rigidBody.current.applyImpulse(vec.copy(rigidBody.current.translation()).normalize().multiplyScalar(-10 * delta), true)
    })

    return (
        <RigidBody ref={rigidBody} colliders="ball" position={position} linearDamping={4} angularDamping={4}>
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    )
}

export default AboutStack