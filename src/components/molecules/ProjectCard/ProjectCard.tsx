import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
    project: {
        id: number;
        image: string;
        alt: string;
        title: string;
        content: string;
        link: string;
        tags: string[];
    };
}

function ProjectCard({ project }: ProjectCardProps) {
    const t = useTranslations("aboutPage");

    return (
        <Card className="group/card flex flex-col overflow-hidden border bg-card shadow transition-all hover:shadow-lg dark:bg-white/[0.04] dark:hover:bg-white/[0.08]">
            <a href={project.link} target="_blank" rel="noreferrer" className="flex h-full flex-col">
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover/card:scale-110"
                    />
                </div>
                <CardContent className="flex flex-1 flex-col p-4">
                    <div className="flex-1">
                        <h3 className="mb-2 text-lg font-medium group-hover/card:text-primary">{t(project.title)}</h3>
                        <p className="text-sm text-muted-foreground">{t(project.content)}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </a>
        </Card>
    );
}

export default ProjectCard;
