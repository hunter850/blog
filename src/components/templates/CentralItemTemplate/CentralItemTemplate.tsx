// types
import type { ReactNode } from "react";

export interface CentralItemTemplateProps {
    children?: ReactNode;
}

function CentralItemTemplate(props: CentralItemTemplateProps): React.JSX.Element {
    return (
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-6 px-4 py-8 text-center">
            {props.children}
        </div>
    );
}

export default CentralItemTemplate;
