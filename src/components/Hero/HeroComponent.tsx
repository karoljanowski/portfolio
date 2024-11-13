'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
import Header from '../Header/Header'
import Scroll from '../Hero/Scroll'
import Loading from '../Loading'

const HeroScene = dynamic(() => import('./HeroScene/HeroScene'), {
  ssr: false,
  loading: () => null,
});

const HeroComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='relative h-[100svh] w-screen glow-effect-right glow-effect-middle overflow-x-clip'>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>
      <Header />
      <HeroScene onLoad={() => setIsLoading(false)} />
      <Scroll />
    </div>
  )
}

export default HeroComponent