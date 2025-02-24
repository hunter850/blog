import { useTranslations } from "next-intl";
import { personalInfo } from "@/config/personal_configs";
import ExperienceItem from "@/components/molecules/ExperienceItem";
import AboutSectionCard from "@/components/molecules/AboutSectionCard";

type Experience = (typeof personalInfo.experiences)[number];

function sortById(a: Experience, b: Experience) {
    return b.id - a.id;
}

function Experience() {
    const t = useTranslations("aboutPage");

    return (
        <AboutSectionCard>
            <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent [-webkit-background-clip:text]">
                {t("experience.title")}
            </h2>
            <div className="relative ml-4 space-y-8 before:absolute before:left-2 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-border dark:before:bg-blue-500/30">
                {[...personalInfo.experiences].sort(sortById).map((exp) => (
                    <ExperienceItem key={exp.id} experience={exp} />
                ))}
            </div>
        </AboutSectionCard>
    );
}

export default Experience;
