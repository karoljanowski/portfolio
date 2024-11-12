
import dynamic from 'next/dynamic'
import HelloBox from './HelloBox'
import Aboutme from './Aboutme'
import Experience from './Experience'
import Link from 'next/link'
import Button from '../Button'
import { twMerge } from 'tailwind-merge'

const AboutStack = dynamic(() => import('./Stack'), {
    ssr: false,
})

const AboutComponent = () => {
    return (
        <div id="about" className="min-h-[100svh] grid grid-cols-[2fr_1fr] lg:grid-cols-4 container mx-auto py-20 px-4 gap-2 lg:gap-3">
            <AboutBox className="col-span-2 bg-blue-950 border-blue-950">
                <HelloBox />
            </AboutBox>

            <AboutBox className="lg:row-span-2 p-0 lg:p-0 bg-cyan-950 border-cyan-950">
                <AboutStack />
            </AboutBox>

            <Button href="#projects" className="h-full flex justify-center text-3xl bg-purple-950 border-purple-950 text-purple-500 bg-opacity-30" rotate>Projects</Button>

            <AboutBox className="col-span-2 bg-indigo-950 border-indigo-950">
                <Experience />
            </AboutBox>

            <AboutBox className="col-span-2 lg:col-span-1 bg-blue-950 border-blue-950">
                <Aboutme />
            </AboutBox>
        </div>
    )
}

const AboutBox = ({children, className}: {children?: React.ReactNode, className?: string}) => {
    return (
        <div className={twMerge(`backdrop-blur rounded-lg border bg-opacity-30 p-4 lg:p-8`, className)}>
            {children}
        </div>
    )
}

export default AboutComponent