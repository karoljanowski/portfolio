'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
import Header from '../Header/Header'
import Scroll from '../Hero/Scroll'
import Loading from '../Loading'
import HeroScene from './HeroScene/HeroScene'


// const HeroScene = dynamic(() => import('./HeroScene/HeroScene'), {
//   ssr: false,
// });

const HeroComponent = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className='relative h-[100svh] w-screen glow-effect-right-cyan glow-effect-middle-purple overflow-x-clip'>
      <AnimatePresence mode="wait">
        {!loaded && <Loading key="loading" />}
      </AnimatePresence>
      <Header loaded={loaded} />
      <HeroScene onLoad={() => setLoaded(true)} loaded={loaded} />
      <Scroll />
    </div>
  )
}

export default HeroComponent