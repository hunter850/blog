// components
import DefaultTemplate from "@/components/templates/DefaultTemplate";
import Avatar from "@/components/atoms/Avatar";
import GradientTitle from "@/components/atoms/GradientTitle";
import BasicInfo from "@/components/organisms/BasicInfo";
import Skills from "@/components/organisms/Skills";
import Experience from "@/components/organisms/Experience";
import Projects from "@/components/organisms/Projects";
import { personalInfo } from "@/config/personal_configs";
// hooks
import { useTranslations } from "next-intl";

function AboutPage(): React.JSX.Element {
    const t = useTranslations("aboutPage");

    return (
        <DefaultTemplate>
            <div className="min-h-screen">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <Avatar src={personalInfo.avatar} alt="avatar" />
                    <GradientTitle>{t(personalInfo.name)}</GradientTitle>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="space-y-6">
                        <BasicInfo />
                        <Skills />
                        <Experience />
                        <Projects />
                    </div>
                </div>
            </div>
        </DefaultTemplate>
    );
}

export default AboutPage;
