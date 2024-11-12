'use client'

import { OrbitControls, useTexture, MeshTransmissionMaterial, RoundedBox, Text, Environment, GradientTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Color } from "three"
import * as THREE from 'three'

const ProjectsSection = () => {
    return (
        <div className="py-20 px-4 container mx-auto h-[100svh] relative">
            <Scene />
        </div>
    )
}

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 3, 7] }}>
            {/* Main lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            {/* Gradient background */}
            <mesh position={[0, 0, -10]}>
                <sphereGeometry args={[20, 20]} />
                <meshBasicMaterial side={THREE.DoubleSide}>
                    <GradientTexture
                        attach="map"
                        stops={[0, 0.1, 0.5, 1]} // Two color stops
                        colors={['cyan', 'purple', 'purple', 'cyan']} // Purple to Cyan
                    />
                </meshBasicMaterial>
            </mesh>
            <mesh position={[0, -6.5, 0]}>
                <cylinderGeometry args={[3, 3, 10, 32]} />
                <meshBasicMaterial side={THREE.DoubleSide} color="gray" />
            </mesh>

            <Box />
            <OrbitControls />
        </Canvas>
    )
}

const Box = () => {
    const texture = useTexture('/projects/pizza.png')

    return (
        <>
            <RoundedBox position={[0, 0, 0]} args={[3, 3, 3]} radius={0.2} rotation={[0, Math.PI / 6, 0]}>
                <MeshTransmissionMaterial
                background={new Color(255, 255, 255)}
                thickness={0.2}
                roughness={0}
                transmission={0.8}
                ior={1.2}
                chromaticAberration={0.3}
                />
            </RoundedBox>

            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
                <boxGeometry args={[1.8, 1.8, 1.8]} />
                <meshPhysicalMaterial
                    map={texture}
                    />
            </mesh>
        </>
    )
}

export default ProjectsSection