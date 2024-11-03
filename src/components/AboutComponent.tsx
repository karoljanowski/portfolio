import AboutText from "./About/AboutText"
import AboutStack from "./About/AboutStack"
const AboutComponent = () => {
  return (
    <div className="h-screen w-screen bg-black">
        <div className="grid grid-cols-2 grid-rows-1 h-full">
            <AboutText />
            <AboutStack />
        </div>
    </div>
  )
}

export default AboutComponent