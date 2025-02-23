import { useTranslations } from "next-intl";
import { personalInfo } from "@/config/personal_configs";

function EducationSection() {
    const t = useTranslations("aboutPage");

    return (
        <div>
            <h2 className="mb-2 text-xl font-semibold">{t("education.title")}</h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {personalInfo.education.map((eduKey, index) => (
                    <li key={index}>{t(eduKey)}</li>
                ))}
            </ul>
        </div>
    );
}

export default EducationSection;
