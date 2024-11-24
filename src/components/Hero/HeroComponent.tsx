'use client'
import Scroll from '../Hero/Scroll'
import HeroScene from './HeroScene/HeroScene'

const HeroComponent = () => {

  return (
    <div className='relative h-[100svh] w-screen glow-effect-right-cyan glow-effect-middle-purple overflow-x-clip'>
      <HeroScene />
      <Scroll />
    </div>
  )
}

export default HeroComponent