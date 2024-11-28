interface ProjectStackProps {
    stack: string[]
    mainColor: string
}

export const ProjectStack = ({ stack, mainColor }: ProjectStackProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: mainColor }}>Stack</h2>
            <div className="flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                    <span 
                        key={index} 
                        className="border rounded-full px-3 py-1 text-sm" 
                        style={{ 
                            borderColor: mainColor, 
                            color: mainColor, 
                            backgroundColor: mainColor + '15' 
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
} 