'use client'
import { Plane, RoundedBox, useTexture } from "@react-three/drei"
import { ArrowUp, ArrowDown } from "lucide-react"
import { Canvas, GroupProps } from "@react-three/fiber"
import { AnimationControls, useAnimationControls, useInView } from "framer-motion"
import { motion } from "framer-motion-3d"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface LayerProps {
    y: number
    texturePath: string
}

const AboutStack = () => {
    const groupControls = useAnimationControls()

    return (
        <div className="relative h-full min-h-[300px]">
            <Scene groupControls={groupControls} />
            <div className="flex justify-between items-center p-4 lg:p-6">
                <div className="text-xl text-cyan-800 uppercase font-semibold">Stack</div>
                <Buttons groupControls={groupControls} />
            </div>
        </div>
    )
}

const Scene = ({groupControls}: {groupControls: AnimationControls}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, margin: '0px 0px -300px 0px' })

    return (
        <div ref={ref} className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={1} />
                <Layers isInView={isInView} groupControls={groupControls} />
            </Canvas>
        </div>
    )
}

const Buttons = ({groupControls}: {groupControls: AnimationControls}) => {

    const handleUp = () => {
        groupControls.start('up')
    }
    const handleDown = () => {
        groupControls.start('down')
    }

    return (
        <div className="flex items-center">
            <div className="flex gap-3 bg-cyan-800 bg-opacity-50 backdrop-blur rounded-xl border border-cyan-800 text-white p-2">
                <button onClick={handleUp} className="grid place-items-center hover:bg-cyan-900 p-1 rounded-md transition-all duration-300">
                    <ArrowUp className="w-4 h-4 text-cyan-300" />
                </button>
                <button onClick={handleDown} className="grid place-items-center hover:bg-cyan-900 p-1 rounded-md transition-all duration-300">
                    <ArrowDown className="w-4 h-4 text-cyan-300" />
                </button>
            </div>
        </div>
    )
}

const Layers = ({isInView, groupControls}: {isInView: boolean, groupControls: AnimationControls}) => {
    const layerControls = useAnimationControls()
    const groupRef = useRef<GroupProps>(null)
    const [YPosition, setYPosition] = useState(0)
    const positionStep = 1

    const textures = [
        'stack/html.svg',
        'stack/css.svg',
        'stack/tailwind.svg',
        'stack/js.svg',
        'stack/ts.svg',
        'stack/react.svg',
        'stack/next.svg',
    ]

    const totalLayers = textures.length
    const distanceBetweenLayers = 0.8
    const startPosition = (distanceBetweenLayers * totalLayers) / 2

    const layers: LayerProps[] = textures.map((texture, index) => ({
        y: -startPosition + index * distanceBetweenLayers,
        texturePath: texture
    }))

    useEffect(() => {
        const startAnimation = async () => {
            await groupControls.start('rotate')
            await Promise.all([
                layerControls.start('opacityDown'),
                layerControls.start('accordion')
            ])
            await layerControls.start('opacityUp')
        }
        const startInitial = async () => {
            groupControls.start('initial')
            layerControls.start('initial')
        }
        if(groupRef.current && groupControls){
            if (isInView) {
                startAnimation()
            }else{
                setYPosition(0)
                startInitial()
                groupControls.set({ y: 0 })
            }
        }

    }, [isInView])

    const handleAnimationStart = (definition: string) => {
        console.log('definition', definition)
        console.log('YPosition', YPosition)
        if (definition === 'up') {
            setYPosition(YPosition + positionStep)
        } else if (definition === 'down') {
            setYPosition(YPosition - positionStep)
        }
    }

    return (
        <motion.group 
        ref={groupRef}
        animate={groupControls} 
        position={[0, 0, 0]} 
        rotation={[Math.PI / 2, 0, 0]}
        transition={{ duration: 0.3}}
        initial={'initial'}
        onAnimationStart={handleAnimationStart}
        variants={{
            initial: { rotateX: Math.PI / 2, rotateY: 0 },
            rotate: { rotateX: Math.PI / 6, rotateY: Math.PI / 4, transition: { delay: 0.3 } },
            up: { y: YPosition + positionStep, },
            down: { y: YPosition - positionStep },
        }}
        >
            {layers.map((layer, index) => (
                <Layer key={index} index={index} y={layer.y} texturePath={layer.texturePath} layerControls={layerControls} />
            ))}
        </motion.group>
    )   
}

const Layer = ({y, texturePath, layerControls, index}: {y: number, texturePath: string, layerControls: AnimationControls, index: number}) => {
    const texture = useTexture(texturePath)
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = - 1;


    return (
        <motion.group 
        animate={layerControls}
        position={[0,0,0]}
        transition={{ duration: 0.5 }}
        initial={'initial'}
        variants={{
            initial: {x:0, y: 0, z: 0 },
            accordion: {x: 0.15 * index, y: y, z: -0.15 * index },
        }}
        >
            <RoundedBox args={[3, 3, 0.1]} position={[0, 0, 0]} radius={0.05} rotation={[Math.PI / 2, 0, 0]}>
                <motion.meshPhysicalMaterial
                animate={layerControls}
                transparent
                opacity={1}
                color={'#222'}
                variants={{
                    opacityDown: { opacity: 0.1 },
                    opacityUp: { opacity: 0.5, transition: { delay: 0.5 * index } },
                }}
                 />
            </RoundedBox>
            <Plane args={[2.8, 2.8]} position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
                <motion.meshPhysicalMaterial
                opacity={1}
                animate={layerControls}
                variants={{
                    opacityDown: { opacity: 0.1 },
                    opacityUp: { opacity: 0.8, transition: { delay: 0.5 * index } },
                }}
                transparent
                map={texture} side={THREE.DoubleSide} />
            </Plane>
        </motion.group>
    )
}

export default AboutStack