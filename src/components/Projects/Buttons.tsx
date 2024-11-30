import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Projects } from "@/data/projects";
import { StandardButton } from "../Button";
import { InfoIcon } from "lucide-react";

export const Buttons = ({currentProject, setCurrentProject}: {currentProject: number, setCurrentProject: (value: number) => void}) => {
    const handleClick = (direction: 'previous' | 'next') => {
        if (direction === 'previous' && currentProject === 0) return
        if (direction === 'next' && currentProject === Projects.length - 1) return
        setCurrentProject(direction === 'previous' ? currentProject - 1 : currentProject + 1)
    }
    return (
        <div className="absolute bottom-0 left-0 w-full">
            <div className="flex justify-center items-center gap-4 p-3 text-gray-400">
                <InfoIcon className="w-4 h-4" />
                <div className="text-sm">
                    Click on the project to see more details
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 pb-10">
                <StandardButton disabled={currentProject === 0} className="flex-1 max-w-40 disabled:opacity-50" icon="arrow-left" onClick={() => handleClick('previous')}>Previous</StandardButton>
                <StandardButton disabled={currentProject === Projects.length - 1} className="flex-1 max-w-40 disabled:opacity-50" icon="arrow-right" onClick={() => handleClick('next')}>Next</StandardButton>
            </div>
        </div>
    )
}