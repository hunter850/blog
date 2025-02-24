import { useTranslations } from "next-intl";
import EducationSection from "@/components/molecules/EducationSection";
import ExperienceSection from "@/components/molecules/ExperienceSection";
import ContactSection from "@/components/molecules/ContactSection";
import AboutSectionCard from "@/components/molecules/AboutSectionCard";

function BasicInfo() {
    const t = useTranslations("aboutPage");

    return (
        <AboutSectionCard>
            <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent [-webkit-background-clip:text]">
                {t("basicInfo")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-2">
                    <EducationSection />
                    <ExperienceSection />
                </div>
                <ContactSection />
            </div>
        </AboutSectionCard>
    );
}

export default BasicInfo;
