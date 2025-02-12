'use client'
import { Canvas, Vector3 } from '@react-three/fiber'
import GlassBox from './GlassBox'
import CylinderText from './CylinderText'
import SVGShape from './SvgShape'
import { useEffect, useState, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

const HeroScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [cameraPosition, setCameraPosition] = useState<Vector3>([0, 3, 8])
  const isInView = useInView(sceneRef);
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false);

  useEffect(() => {
    if(window.innerWidth > 640) {
      setCameraPosition([0, 1.5, 5])
    }
  }, [])

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  }

  return (
    <motion.div ref={sceneRef} className='h-[calc(100svh-40px)] w-screen absolute top-10 left-0' initial={'initial'} variants={variants} animate={isCanvasLoaded ? 'animate' : 'initial'} transition={{ duration: 0.5 }}>
      <Canvas camera={{ position: cameraPosition }} onCreated={() => setIsCanvasLoaded(true)}>
        <ambientLight intensity={1} />
        <GlassBox isInView={isInView} />
        <CylinderText isInView={isInView} />
        <SVGShape 
          url='/cursor.svg' 
          rotation={[Math.PI, 0, 0]} 
          position={[-0.6, 0.5, 0]} 
        />
      </Canvas>
    </motion.div>
  )
}

export default HeroScene 