import { personalInfo } from "@/config/personal_configs";

function EducationSection() {
    return (
        <div>
            <h2 className="mb-2 text-xl font-semibold">教育背景</h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {personalInfo.educations.map((education) => (
                    <li key={education}>{education}</li>
                ))}
            </ul>
        </div>
    );
}

export default EducationSection;
