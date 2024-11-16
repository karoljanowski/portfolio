'use client'
import dynamic from 'next/dynamic'
import HelloBox from './HelloBox'
import Aboutme from './Aboutme'
import Experience from './Experience'
import Button from '../Button'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

const AboutStack = dynamic(() => import('./Stack'), {
    ssr: false,
})

const AboutComponent = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px -100px" }}
            id="about" 
            className="min-h-[100svh] grid grid-cols-[2fr_1fr] lg:grid-cols-4 container mx-auto py-20 px-4 gap-2 lg:gap-3"
        >
            <AboutBox className="col-span-2 bg-blue-950 border-blue-950">
                <HelloBox />
            </AboutBox>

            <AboutBox className="lg:row-span-2 p-0 lg:p-0 bg-cyan-950 border-cyan-950">
                <AboutStack />
            </AboutBox>

            <AboutBox className="bg-purple-950 border-purple-950 bg-opacity-30 p-0 lg:p-0 overflow-hidden">
                <Button href="projects" className="h-full flex justify-center text-3xl text-purple-500 bg-transparent border-transparent" rotate>Projects</Button>
            </AboutBox>

            <AboutBox className="col-span-2 bg-indigo-950 border-indigo-950">
                <Experience />
            </AboutBox>

            <AboutBox className="col-span-2 lg:col-span-1 bg-blue-950 border-blue-950">
                <Aboutme />
            </AboutBox>
        </motion.div>
    )
}

const AboutBox = ({children, className}: {children?: React.ReactNode, className?: string}) => {
    const boxVariants = {
        hidden: { 
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div 
            variants={boxVariants}
            className={twMerge(`backdrop-blur rounded-lg border bg-opacity-30 p-4 lg:p-8`, className)}
        >
            {children}
        </motion.div>
    )
}

export default AboutComponent