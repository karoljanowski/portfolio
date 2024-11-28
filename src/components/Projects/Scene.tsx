import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, useMemo } from "react";
import { DoubleSide, MathUtils } from "three";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Projects } from "@/data/projects";
import { Project } from "./Project";
import useMediaQuery from "@/hooks/useMediaQuery";
import useNavigation from "@/hooks/useNavigation";
import { motion } from "framer-motion";

const projectsSpace = 7.5

export const Scene = ({currentProject}: {currentProject: number}) => {
    const isMobile = useMediaQuery('(max-width: 640px)')
    const initialCameraPositionZ = 5.5
    const {handleRedirect} = useNavigation()
    const [isCanvasLoaded, setIsCanvasLoaded] = useState(false);
    const floorPlane = useMemo(() => (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial 
                side={DoubleSide}
                mirror={1}
                blur={1000}
                mixStrength={20}
                roughness={1}
                color="#050505"
            />
        </mesh>
    ), [])

    const backgroundPlane = useMemo(() => (
        <mesh position={[0, 0, -10]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial 
                side={DoubleSide}
                color="#050505" 
            />
        </mesh>
    ), [])

    const projectElements = useMemo(() => (
        Projects.map((project, index) => (
            <Project 
                handleRedirect={handleRedirect} 
                key={index} 
                {...project} 
                position={[index * projectsSpace, 0, 0]} 
            />
        ))
    ), [handleRedirect])

    const lights = useMemo(() => (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} intensity={1} />
        </>
    ), [])

    return (
        <motion.div className='h-full' animate={isCanvasLoaded ? {opacity: 1} : {opacity: 0}} transition={{ duration: 0.5 }}>
            <Canvas 
                camera={{position: [0, 3.5, initialCameraPositionZ]}} 
            onCreated={() => setIsCanvasLoaded(true)}
        >
            {lights}
            {floorPlane}
            {backgroundPlane}
            {projectElements}
            <CameraController 
                currentProject={currentProject} 
                initialCameraPositionZ={initialCameraPositionZ} 
                isMobile={isMobile}     
                />
            </Canvas>
        </motion.div>
    )
} 

const CameraController = ({currentProject, initialCameraPositionZ, isMobile}: {currentProject: number, initialCameraPositionZ: number, isMobile: boolean | null}) => {
    const targetX = useRef(0)
    useFrame(({ camera }, delta) => {
        targetX.current = currentProject * projectsSpace
        
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