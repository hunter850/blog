import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { personalInfo } from "@/config/personal_configs";
import ExperienceItem from "@/components/molecules/ExperienceItem";

type Experience = (typeof personalInfo.experiences)[number];

function sortById(a: Experience, b: Experience) {
    return b.id - a.id;
}

function Experience() {
    const t = useTranslations("aboutPage");

    return (
        <Card className="group relative overflow-visible bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-[1px] dark:from-blue-500/10 dark:to-cyan-500/10">
            <div className="pointer-events-none absolute inset-[-100px]">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[120px]" />
            </div>
            <CardContent className="relative z-10 rounded-lg bg-white/80 p-6 dark:bg-white/[0.08]">
                <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent [-webkit-background-clip:text]">
                    {t("experience.title")}
                </h2>
                <div className="relative ml-4 space-y-8 before:absolute before:left-2 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-border dark:before:bg-blue-500/30">
                    {[...personalInfo.experiences].sort(sortById).map((exp) => (
                        <ExperienceItem key={exp.id} experience={exp} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default Experience;
