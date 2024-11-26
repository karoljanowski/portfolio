import { MutableRefObject } from "react";
import { Projects } from "@/data/projects";
import { StandardButton } from "../Button";
import { InfoIcon } from "lucide-react";

export const Buttons = ({currentProject}: {currentProject: MutableRefObject<number>}) => {
    const handleClick = (direction: 'previous' | 'next') => {
        if (direction === 'previous' && currentProject.current === 0) return
        if (direction === 'next' && currentProject.current === Projects.length - 1) return
        currentProject.current = direction === 'previous' ? currentProject.current - 1 : currentProject.current + 1
    }
    return (
        <div className="absolute bottom-0 left-0 z-10 w-full">
            <div className="flex justify-center items-center gap-4 p-3 text-gray-400">
                <InfoIcon className="w-4 h-4" />
                <div className="text-sm">
                    Click on the project to see more details
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 pb-10">
                <StandardButton className="flex-1 max-w-40" icon="arrow-left" onClick={() => handleClick('previous')}>Previous</StandardButton>
                <StandardButton className="flex-1 max-w-40" icon="arrow-right" onClick={() => handleClick('next')}>Next</StandardButton>
            </div>
        </div>
    )
} 