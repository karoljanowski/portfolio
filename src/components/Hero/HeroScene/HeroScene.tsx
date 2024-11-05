'use client'
import { Canvas, Vector3 } from '@react-three/fiber'
import GlassBox from './GlassBox'
import CylinderText from './CylinderText'
import SVGShape from './SvgShape'
import { useEffect, useState } from 'react'


const HeroScene = () => {
  const [cameraPosition, setCameraPosition] = useState<Vector3>([0, 3, 8])

  useEffect(() => {
    if(window.innerWidth > 640) {
      setCameraPosition([0, 1.5, 5])
    }
  }, [])

  return (
    <div className='h-[100svh] w-screen absolute top-0 left-0'>
      <Canvas camera={{ position: cameraPosition }}>
        <ambientLight intensity={1} />
        <GlassBox />
        <CylinderText />
        <SVGShape 
          url='/cursor.svg' 
          rotation={[Math.PI, 0, 0]} 
          position={[-0.6, 0.5, 0]} 
        />
      </Canvas>
    </div>
  )
}

export default HeroScene 