// components
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
// types
import type { ReactNode } from "react";

export interface CentralItemTemplateProps {
    children: ReactNode;
}

function CentralItemTemplate(props: CentralItemTemplateProps): React.JSX.Element {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container mx-auto flex flex-grow flex-col items-center justify-center space-y-6 px-4 py-8 text-center">
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default CentralItemTemplate;
