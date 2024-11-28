'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { DetailBox } from "@/components/Projects/ProjectDetail/DetailBox"
import { ProjectImages } from "@/components/Projects/ProjectDetail/ProjectImages"
import { ProjectStack } from "@/components/Projects/ProjectDetail/ProjectStack"
import { ProjectLinks } from "@/components/Projects/ProjectDetail/ProjectLinks"
import { Project } from "@/data/projects"

const ProjectDetail = ({ project }: { project: Project }) => {
  
    const images = [project.image, ...(project.additionalImages || [])]
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, margin: "-150px" })

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
    }

    return (
        <motion.div
            ref={containerRef}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ '--glow-effect-color': project.mainColor } as React.CSSProperties}
            className="min-h-[100svh] pt-20 md:pt-32 glow-effect-project-middle glow-effect-project-top"
        >
            <div className="container mx-auto w-full p-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <h1 className="text-4xl font-bold md:col-span-3">
                        {project.title}
                    </h1>

                    <DetailBox className="md:col-span-2 row-span-2 !p-0 sm:!p-0 lg:!p-0 overflow-hidden">
                        <ProjectImages images={images} title={project.title} />
                    </DetailBox>

                    <DetailBox className="flex flex-col gap-4">
                        <ProjectStack stack={project.stack} mainColor={project.mainColor} />
                    </DetailBox>

                    <DetailBox className="flex flex-col gap-4">
                        <ProjectLinks 
                            live={project.live} 
                            github={project.github} 
                            dashboard={project.dashboard}
                            mainColor={project.mainColor} 
                        />
                    </DetailBox>

                    <DetailBox className="md:col-span-3">
                        <p className="text-lg text-gray-300">{project.description}</p>
                    </DetailBox>

                    <div className="flex justify-between items-center border-t border-white/10 py-8 mt-8 md:col-span-3">
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Projects
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectDetail

