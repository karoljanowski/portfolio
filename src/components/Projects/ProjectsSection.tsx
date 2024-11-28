'use client'

import { useState } from "react";
import { Scene } from "./Scene";
import { Buttons } from "./Buttons";

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useState(0)
    
    return (
        <div className="h-[100svh]">
            <Scene currentProject={currentProject} />
            <Buttons currentProject={currentProject} setCurrentProject={setCurrentProject} />
        </div>
    );
};

export default ProjectsSection;