import ProjectDetail from "@/components/Projects/ProjectDetail/ProjectDetail"
import { Projects } from "@/data/projects"

const Page = ({ params }: { params: { project: string } }) => {
    const project = Projects.find(project => project.path === params.project)
    if (!project) return <div>Project not found</div>

    return <ProjectDetail project={project} />
}

export default Page

