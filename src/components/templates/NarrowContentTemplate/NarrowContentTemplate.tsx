// types
import type { ReactNode } from "react";

export interface DefaultTemplateProps {
    children?: ReactNode;
}

function NarrowContentTemplate(props: DefaultTemplateProps): React.JSX.Element {
    return (
        <>
            <div className="container mx-auto mt-6 max-w-4xl px-4 py-8 md:mt-16">{props.children}</div>
        </>
    );
}

export default NarrowContentTemplate;
