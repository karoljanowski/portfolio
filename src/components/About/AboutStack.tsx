'use client'
import { OrbitControls, RoundedBox, shaderMaterial, useTexture } from "@react-three/drei"
import { Canvas, extend } from "@react-three/fiber"

const AboutStack = () => {
    return (
        <div className="relative grid place-items-center">
            <Scene />
        </div>
    )
}

const Scene = () => {
    return (
        <div className="absolute inset-0">
            <Canvas>
                <ambientLight intensity={1} />
                <Layers />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

const Layers = () => {
    return (
        <>
            <Layer position={[0, -1.2, 0]} opacity={1} texturePath="stack/html.png" />
            <Layer position={[0, -0.8, 0]} opacity={1} texturePath="stack/css.png" />
            <Layer position={[0, -0.4, 0]} opacity={1} texturePath="stack/js.png" />
            <Layer position={[0, 0, 0]} opacity={1} texturePath="stack/ts.png" />
            <Layer position={[0, 0.4, 0]} opacity={1} texturePath="stack/react.png" />
            <Layer position={[0, 0.8, 0]} opacity={1} texturePath="stack/next.png" />
            <Layer position={[0, 1.2, 0]} opacity={1} texturePath="stack/tailwind.png" />
        </>
    )   
}

const Layer = ({position, opacity, texturePath}: {position: [number, number, number], opacity: number, texturePath: string}) => {
    const texture = useTexture(texturePath)
    return (
        <RoundedBox position={position} args={[2, 2, 0.08]} radius={0.05} rotation={[Math.PI / 2, 0, Math.PI]}>
            <meshStandardMaterial 
                map={texture} 
                transparent
                opacity={opacity}
                onBeforeCompile={(shader) => {
                    shader.fragmentShader = shader.fragmentShader.replace(
                        '#include <map_fragment>',
                        `
                        #include <map_fragment>
                        diffuseColor.rgb = vec3(dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114)));
                        `
                    );
                }}
            />
        </RoundedBox>
    )
}

export default AboutStack