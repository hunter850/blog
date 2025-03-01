import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface SkillCardProps {
    skill: {
        id: number;
        img: string;
        imgDescription: string;
        title: string;
        content: string[];
    };
}

function SkillCard({ skill }: SkillCardProps) {
    return (
        <Card className="border-blue-500/20 transition-all hover:border-cyan-500/40 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]">
            <CardContent className="p-4">
                <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
                    <div className="relative h-24 w-24 shrink-0 sm:h-20 sm:w-20">
                        <Image
                            src={skill.img}
                            alt={skill.imgDescription}
                            fill
                            sizes="(max-width: 640px) 96px, (max-width: 768px) 80px, 80px"
                            className="object-contain"
                        />
                    </div>
                    <div className="w-full text-center sm:text-left">
                        <h3 className="text-center text-xl font-medium md:text-left">{skill.title}</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                            {skill.content.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default SkillCard;
