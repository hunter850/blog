// components
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ScrollToTopButton from "@/components/atoms/ScrollToTopButton";
// types
import type { ReactNode } from "react";

export interface DefaultTemplateProps {
    children: ReactNode;
}

function NarrowContentTemplate(props: DefaultTemplateProps): React.JSX.Element {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-grow overflow-hidden">
                    <div className="container mx-auto mt-16 max-w-4xl px-4 py-8">{props.children}</div>
                </main>
                <Footer />
                <ScrollToTopButton />
            </div>
        </>
    );
}

export default NarrowContentTemplate;
