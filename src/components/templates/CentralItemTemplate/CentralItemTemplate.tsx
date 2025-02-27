// types
import type { ReactNode } from "react";

export interface CentralItemTemplateProps {
    children?: ReactNode;
}

function CentralItemTemplate(props: CentralItemTemplateProps): React.JSX.Element {
    return (
        <main className="container mx-auto flex flex-grow flex-col items-center justify-center space-y-6 px-4 py-8 text-center">
            {props.children}
        </main>
    );
}

export default CentralItemTemplate;
