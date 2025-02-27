// types
import type { ReactNode } from "react";

export interface DefaultTemplateProps {
    children?: ReactNode;
}

function DefaultTemplate(props: DefaultTemplateProps): React.JSX.Element {
    return (
        <>
            <main className="flex-grow overflow-hidden">
                <div className="container mx-auto mt-16 px-4 py-8">{props.children}</div>
            </main>
        </>
    );
}

export default DefaultTemplate;
