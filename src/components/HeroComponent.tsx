import dynamic from 'next/dynamic'
import Socials from "./Hero/Socials"
import Menu from "./Menu"
import Text from "./Hero/Text"
import Loading from './Loading'

const HeroScene = dynamic(() => import('./Hero/HeroScene/HeroScene'), {
  ssr: false,
  loading: () => <Loading />
})

const HeroComponent = () => {
  return (
    <div className={`relative h-[100svh] w-screen glow-effect-right glow-effect-middle overflow-x-clip`}>
      <Menu />
      <Socials />
      <Text />
      <HeroScene />
    </div>
  )
}

export default HeroComponent