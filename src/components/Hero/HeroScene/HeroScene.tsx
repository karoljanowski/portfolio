'use client'
import { Canvas } from '@react-three/fiber'
import GlassBox from './GlassBox'
import CylinderText from './CylinderText'
import SVGShape from './SvgShape'


const HeroScene = () => {
  return (
    <div className='h-screen w-screen absolute top-0 left-0'>
      <Canvas camera={{ position: [0, 1.5, 5] }}>
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