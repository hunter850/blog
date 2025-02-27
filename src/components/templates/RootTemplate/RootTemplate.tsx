// components
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ScrollToTopButton from "@/components/atoms/ScrollToTopButton";
// types
import type { ReactNode } from "react";

export interface RootTemplateProps {
    children?: ReactNode;
}

function RootTemplate(props: RootTemplateProps): React.JSX.Element {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                {props.children}
                <Footer />
                <ScrollToTopButton />
            </div>
        </>
    );
}

export default RootTemplate;
