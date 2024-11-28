import { motion } from 'framer-motion'
import { Github, Globe, AppWindow } from 'lucide-react'

interface ProjectLinksProps {
    live: string
    github: string
    dashboard?: string
    mainColor: string
}

export const ProjectLinks = ({ live, github, dashboard, mainColor }: ProjectLinksProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: mainColor }}>Links</h2>
            <div className="space-y-2">
                <motion.a 
                    href={live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-gray-300" 
                    whileHover={{ color: mainColor }}
                >
                    <Globe className="w-5 h-5" />
                    Live Demo
                </motion.a>
                {dashboard && (
                    <motion.a 
                        href={dashboard} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-gray-300" 
                        whileHover={{ color: mainColor }}
                    >
                        <AppWindow className="w-5 h-5" />
                        Page Dashboard
                    </motion.a>
                )}
                <motion.a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-gray-300" 
                    whileHover={{ color: mainColor }}
                >
                    <Github className="w-5 h-5" />
                    Source Code
                </motion.a>
            </div>
        </div>
    )
} 