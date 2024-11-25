'use client'
import dynamic from 'next/dynamic'
import HelloBox from './HelloBox'
import Aboutme from './Aboutme'
import Experience from './Experience'
import { ButtonLink } from '../Button'
import { twMerge } from 'tailwind-merge'
import { motion, stagger, useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutStack from './Stack'

const AboutComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-150px" });
    
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
    };
    
    return (
        <motion.div
            id="about" 
            ref={containerRef}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="min-h-[100svh] grid grid-cols-[2fr_1fr] lg:grid-cols-4 container mx-auto py-20 px-4 gap-2 lg:gap-3"
        >
            <AboutBox className="col-span-2 bg-blue-950 border-blue-950">
                <HelloBox />
            </AboutBox>

            <AboutBox className="lg:row-span-2 p-0 lg:p-0 bg-cyan-950 border-cyan-950">
                <AboutStack />
            </AboutBox>

            <AboutBox className="bg-purple-950 border-purple-950 bg-opacity-30 p-0 lg:p-0 overflow-hidden">
                <ButtonLink icon="arrow-up-right" href="/projects" className="h-full flex justify-center text-3xl text-purple-500 bg-transparent border-transparent" rotate>Projects</ButtonLink>
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
    const variants = {
        hidden: { opacity: 0, y: 70 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    }

    return (
        <motion.div 
            className={twMerge(`backdrop-blur rounded-lg border bg-opacity-30 p-4 lg:p-8`, className)}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default AboutComponent