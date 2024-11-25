'use client'

import { useRef } from "react";
import { Scene } from "./Scene";
import { Buttons } from "./Buttons";

const ProjectsSection = () => {
    const currentProject = useRef(0)
    
    return (
        <div className="h-[100svh]">
            <Scene currentProject={currentProject} />
            <Buttons currentProject={currentProject} />
        </div>
    );
};

export default ProjectsSection;