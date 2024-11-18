'use client'
import { Canvas, useFrame } from "@react-three/fiber"
import { Physics, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from 'three'

const Scene = () => {
    return (
        <div className="absolute inset-0">
            <Canvas>
                <directionalLight position={[0, 0, 10]} intensity={1} />
                <Physics gravity={[0, 0, 0]}>
                    <RigidBody type="fixed" position={[0, 0, 0]} colliders="cuboid">
                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
                            <planeGeometry args={[50, 50]} />
                            <meshStandardMaterial color="cyan" transparent opacity={0} />
                        </mesh>
                    </RigidBody>
                    <RigidBody type="fixed" position={[0, 0, 0]} colliders="cuboid">
                        <mesh rotation={[0, 0, 0]} position={[0, 0, 8]}>
                            <planeGeometry args={[50, 50]} />
                            <meshStandardMaterial color="cyan" transparent opacity={1} />
                        </mesh>
                    </RigidBody>
                    {Array.from({ length: 30 }).map((_, index) => (
                        <Sphere key={index} position={[Math.random() * -10, Math.random() * -10, Math.random() * -10]} color="cyan" />
                    ))}
                </Physics>
            </Canvas>
        </div>
    )
}

const Sphere = ({position, color}: {position: [number, number, number], color: string}) => {
    const rigidBody = useRef<RapierRigidBody>(null)
    const vec = new THREE.Vector3()
    const lastImpulse = useRef(0)

    useFrame((_, delta) => {
        if (!rigidBody.current) return
        delta = Math.min(0.05, delta)
        
        rigidBody.current.applyImpulse(vec.copy(rigidBody.current.translation()).normalize().multiplyScalar(-5 * delta), true)
        
        lastImpulse.current += delta
        if (lastImpulse.current > 2) {
            lastImpulse.current = 0
            const randomImpulse = new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            )
            rigidBody.current.applyImpulse(randomImpulse, true)
        }
    })

    return (
        <RigidBody ref={rigidBody} colliders="ball" position={position} linearDamping={2} angularDamping={2}>
            <mesh>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>

        </RigidBody>
    )
}

export default Scene