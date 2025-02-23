import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { personalInfo } from "@/config/personal_configs";
import ProjectCard from "@/components/molecules/ProjectCard";

type Project = (typeof personalInfo.projects.items)[number];

function sortById(a: Project, b: Project) {
    return b.id - a.id;
}

function Projects() {
    const t = useTranslations("aboutPage");

    return (
        <Card className="group relative overflow-visible bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-[1px] dark:from-blue-500/10 dark:to-cyan-500/10">
            <div className="pointer-events-none absolute inset-[-100px]">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[120px]" />
            </div>
            <CardContent className="relative z-10 rounded-lg bg-white/80 p-6 dark:bg-white/[0.08]">
                <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent [-webkit-background-clip:text]">
                    {t("projects.title")}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[...personalInfo.projects.items].sort(sortById).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default Projects;
