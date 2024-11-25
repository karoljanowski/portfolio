import { Canvas, useFrame } from "@react-three/fiber";
import { MutableRefObject, useState, useEffect, useRef } from "react";
import { DoubleSide, MathUtils } from "three";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Projects } from "@/data/projects";
import { Project } from "./Project";

export const Scene = ({currentProject}: {currentProject: MutableRefObject<number>}) => {
    const [cameraPositionZ, setCameraPositionZ] = useState<number>(5)

    useEffect(() => {
        if(window.innerWidth > 640) {
          setCameraPositionZ(4)
        }
    }, [])

    return (
        <Canvas camera={{position: [0, 3.5, cameraPositionZ]}}>
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
                <Project key={index} {...project} position={[index * 10, 0, 0]} />
            ))}
            <CameraController currentProject={currentProject} />
        </Canvas>
    )
} 

const CameraController = ({currentProject}: {currentProject: MutableRefObject<number>}) => {
    const targetX = useRef(0)
    useFrame(({ camera }, delta) => {
        targetX.current = currentProject.current * 10
        
        camera.position.x = MathUtils.lerp(
            camera.position.x,
            targetX.current,
            delta * 2
        )

        const targetLookAt = MathUtils.lerp(camera.position.x, targetX.current, delta * 2)
        camera.lookAt(targetLookAt, 0, 0)
    })
    return null
} 