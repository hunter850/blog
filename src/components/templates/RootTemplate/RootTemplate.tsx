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
            <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-grow overflow-hidden">{props.children}</main>
                <Footer />
                <ScrollToTopButton />
            </div>
        </>
    );
}

export default RootTemplate;
