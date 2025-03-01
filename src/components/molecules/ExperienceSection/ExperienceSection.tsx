import { personalInfo } from "@/config/personal_configs";

function ExperienceSection() {
    return (
        <div>
            <h2 className="mb-2 text-xl font-semibold">經歷</h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {personalInfo.projects.experiences.map((experience) => (
                    <li key={experience}>{experience}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceSection;
