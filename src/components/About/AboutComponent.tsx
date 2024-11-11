
import dynamic from 'next/dynamic'
import HelloBox from './HelloBox'
import Aboutme from './Aboutme'
import Experience from './Experience'
import Link from 'next/link'
import Button from '../Button'

const AboutStack = dynamic(() => import('./Stack'), {
    ssr: false,
})

const AboutComponent = () => {
    return (
        <div id="about" className="min-h-[100svh] grid grid-cols-2 lg:grid-cols-4 grid-rows-auto grid-flow-dense h-full container mx-auto py-20 px-4 gap-2 lg:gap-3">
            <AboutBox className="col-span-2">
                <HelloBox />
            </AboutBox>

            <AboutBox className="row-span-2 p-0 lg:p-0 bg-red-950 !bg-opacity-40 border-red-950">
                <AboutStack />
            </AboutBox>

            <Button href="#projects" className="w-full flex justify-center text-3xl bg-cyan-950 border-cyan-950 text-cyan-500">Projects</Button>

            <AboutBox className="col-span-2">
                <Experience />
            </AboutBox>

            <AboutBox className="bg-blue-950 border-blue-950">
                <Aboutme />
            </AboutBox>
        </div>
    )
}

const AboutBox = ({children, className}: {children?: React.ReactNode, className?: string}) => {
    return (
        <div className={`bg-gray-900 bg-opacity-30 backdrop-blur rounded-lg border border-gray-800 p-4 lg:p-8 ${className}`}>
            {children}
        </div>
    )
}

export default AboutComponent