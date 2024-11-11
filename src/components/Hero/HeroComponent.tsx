import dynamic from 'next/dynamic'
import Loading from '../Loading'
import Header from '../Header/Header'
import Scroll from './Scroll'

const HeroScene = dynamic(() => import('./HeroScene/HeroScene'), {
  ssr: false,
  loading: () => <Loading />
})

const HeroComponent = () => {
  return (
    <div className='relative h-[100svh] w-screen glow-effect-right glow-effect-middle overflow-x-clip'>
      <Header />
      {/* <HeroScene /> */}
      <Scroll />
    </div>
  )
}

export default HeroComponent