import { personalInfo } from "@/config/personal_configs";
import SkillCard from "@/components/molecules/SkillCard";
import AboutSectionCard from "@/components/molecules/AboutSectionCard";

function Skills() {
    return (
        <AboutSectionCard>
            <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent [-webkit-background-clip:text]">
                技能
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {personalInfo.skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>
        </AboutSectionCard>
    );
}

export default Skills;
