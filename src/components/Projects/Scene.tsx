import { Canvas, useFrame } from "@react-three/fiber";
import { MutableRefObject, useState, useEffect, useRef } from "react";
import { DoubleSide, MathUtils } from "three";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Projects } from "@/data/projects";
import { Project } from "./Project";
import useMediaQuery from "@/hooks/useMediaQuery";
import useNavigation from "@/hooks/useNavigation";


const projectsSpace = 7.5

export const Scene = ({currentProject}: {currentProject: MutableRefObject<number>}) => {
    const isMobile = useMediaQuery('(max-width: 640px)')
    const initialCameraPositionZ = 5.5
    const {handleRedirect} = useNavigation()

    return (
        <Canvas camera={{position: [0, 3.5, initialCameraPositionZ]}}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} intensity={1} />
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[100, 100]} />
                <MeshReflectorMaterial side={DoubleSide}
                    mirror={1}
                    blur={1000}
                    mixStrength={20}
                    roughness={1}
                    color="#050505"
                />
            </mesh>
            <mesh position={[0, 0, -10]}>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial side={DoubleSide}
                    color="#050505" />
            </mesh>
            {Projects.map((project, index) => (
                <Project handleRedirect={handleRedirect} key={index} {...project} position={[index * projectsSpace, 0, 0]} />
            ))}
            <CameraController currentProject={currentProject} initialCameraPositionZ={initialCameraPositionZ} isMobile={isMobile} />
        </Canvas>
    )
} 

const CameraController = ({currentProject, initialCameraPositionZ, isMobile}: {currentProject: MutableRefObject<number>, initialCameraPositionZ: number, isMobile: boolean | null}) => {
    const targetX = useRef(0)
    useFrame(({ camera }, delta) => {
        targetX.current = currentProject.current * projectsSpace
        
        camera.position.x = MathUtils.lerp(
            camera.position.x,
            targetX.current,
            delta * 2
        )

        camera.position.z = isMobile ? initialCameraPositionZ : 4

        const targetLookAt = MathUtils.lerp(camera.position.x, targetX.current, delta * 2)
        camera.lookAt(targetLookAt, 0, 0)
    })
    return null
} 