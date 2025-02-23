import { useTranslations } from "next-intl";
import { personalInfo } from "@/config/personal_configs";

function ExperienceSection() {
    const t = useTranslations("aboutPage");

    return (
        <div>
            <h2 className="mb-2 text-xl font-semibold">{t("experience.title")}</h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {personalInfo.projects.experience.map((projectKey, index) => (
                    <li key={index}>{t(projectKey)}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceSection;
