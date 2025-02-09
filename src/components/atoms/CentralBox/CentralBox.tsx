// utils
import { cn } from "@/lib/utils";
// types
import type { ReactNode } from "react";

export interface CentralBoxProps {
    children: ReactNode;
}

function CentralBox(props: CentralBoxProps): React.JSX.Element {
    return (
        <div
            className={cn(
                "px-14 py-9",
                "mx-auto mt-32",
                "max-w-[90%] sm:max-w-md",
                "min-h-48",
                "text-center",
                "flex flex-col items-center justify-center",
                "shadow-md"
            )}
        >
            {props.children}
        </div>
    );
}

export default CentralBox;
