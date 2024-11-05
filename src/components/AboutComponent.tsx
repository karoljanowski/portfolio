import AboutText from "./About/AboutText"
import dynamic from 'next/dynamic'

const AboutStack = dynamic(() => import('./About/AboutStack'), {
  ssr: false,
})

const AboutComponent = () => {
  return (
    <div className="h-screen w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-full">
            <AboutStack />
            <AboutText />
        </div>
    </div>
  )
}

export default AboutComponent