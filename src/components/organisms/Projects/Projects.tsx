import { personalInfo } from "@/config/personal_configs";
import ProjectCard from "@/components/molecules/ProjectCard";
import AboutSectionCard from "@/components/molecules/AboutSectionCard";

type Project = (typeof personalInfo.projects.items)[number];

function sortById(a: Project, b: Project) {
    return b.id - a.id;
}

function Projects() {

    return (
        <AboutSectionCard>
            <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent [-webkit-background-clip:text]">
                專案作品
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...personalInfo.projects.items].sort(sortById).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </AboutSectionCard>
    );
}

export default Projects;
