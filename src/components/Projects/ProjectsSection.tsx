'use client'

import { GradientTexture, MeshReflectorMaterial, OrbitControls, Text3D, Image, useTexture, Text, RoundedBox, Center } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { DoubleSide, MathUtils, Vector3 } from "three";
import Button from "../Button";
import { useState, useRef, MutableRefObject, useEffect } from "react";
const Projects = [
    {
        image: '/projects/pizza.png',
        title: 'Pizza\n& Pasta',
        mainColor: '#A1343B'
    },
    {
        image: '/projects/apartments.png',
        title: 'React\nApartments',
        mainColor: '#979173'
    },
    {
        image: '/projects/portfolio.png',
        title: 'Portfolio\nWebsite',
        mainColor: '#5894A0'
    },

]


const ProjectsSection = () => {
    const currentProject = useRef(0)
    
    return (
        <div className="h-[100svh]">
            <Scene currentProject={currentProject} />
            <Buttons currentProject={currentProject} />
        </div>
    );
};

export default ProjectsSection;

const Buttons = ({currentProject}: {currentProject: MutableRefObject<number>}) => {
    const handleClick = (direction: 'previous' | 'next') => {
        if (direction === 'previous' && currentProject.current === 0) return
        if (direction === 'next' && currentProject.current === Projects.length - 1) return
        currentProject.current = direction === 'previous' ? currentProject.current - 1 : currentProject.current + 1
    }
    return (
        <div className="absolute bottom-0 left-0 z-10 w-full p-10 flex justify-center items-center gap-4">
            <Button onClick={() => handleClick('previous')}>Previous</Button>
            <Button onClick={() => handleClick('next')}>Next</Button>
        </div>
    )
}

const Scene = ({currentProject}: {currentProject: MutableRefObject<number>}) => {
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

const Project = ({image, title, position, mainColor}: {image: string, title: string, position: [number, number, number], mainColor: string}) => {
    const texture = useTexture(image)

    return (
        <group position={position}>
            <pointLight position={[0, 2, -2]} intensity={1000} color={mainColor} />
            <RoundedBox args={[4, 2.5, 0.5]} position={[0, 1.25, 0]} radius={0.1}>
                <meshStandardMaterial color={mainColor}  />
            </RoundedBox>
            <mesh position={[0, 1.25, 0.251]}>
                <planeGeometry args={[3.5, 2]} />
                <meshStandardMaterial map={texture} transparent opacity={0.8} />
            </mesh>
            <Center position={[0, 0, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
                <Text3D size={0.5} lineHeight={0.5} height={0.1} font={'/Manrope_SemiBold.json'}>
                    {title}
                    <meshStandardMaterial color={mainColor} />
                </Text3D>
            </Center>
        </group>

    )
}