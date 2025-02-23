import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { personalInfo } from "@/config/personal_configs";
import SkillCard from "@/components/molecules/SkillCard";

function Skills() {
    const t = useTranslations("aboutPage");

    return (
        <Card className="group relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-[1px] dark:from-blue-500/30 dark:to-cyan-500/30">
            <CardContent className="rounded-lg bg-card p-6 dark:bg-white/[0.08]">
                <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent [-webkit-background-clip:text]">
                    {t("skills.title")}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {personalInfo.skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default Skills;
