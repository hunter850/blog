import { useTranslations } from "next-intl";

interface ExperienceItemProps {
    experience: {
        id: number;
        time: string;
        title: string;
        content: string;
    };
}

function ExperienceItem({ experience }: ExperienceItemProps) {
    const t = useTranslations("aboutPage");

    return (
        <div className="relative pl-8">
            <div className="mb-1 text-sm text-muted-foreground">{t(experience.time)}</div>
            <h3 className="mb-2 text-lg font-medium">{t(experience.title)}</h3>
            <p className="whitespace-pre-line text-sm text-muted-foreground">{t(experience.content)}</p>
        </div>
    );
}

export default ExperienceItem;
