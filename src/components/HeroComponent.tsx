import HeroScene from "./Hero/HeroScene/HeroScene"
import Socials from "./Hero/Socials"
import Menu from "./Menu"
import Text from "./Hero/Text"
const HeroComponent = () => {
  return (
    <div className={`relative h-screen w-screen glow-effect-right glow-effect-middle overflow-hidden`}>
      <Menu />
      <Socials />
      <Text />
      <HeroScene />
    </div>
  )
}

export default HeroComponent