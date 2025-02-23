// components
import MsLogoutButton from "@/components/atoms/MsLogoutButton";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
// hooks
import { useTranslations } from "next-intl";

function BlogPage(): React.JSX.Element {
    const t = useTranslations();
    return (
        <DefaultTemplate>
            <h1>BlogPage</h1>
            <p>{t("welcome")}</p>
            <MsLogoutButton />
        </DefaultTemplate>
    );
}

export default BlogPage;
