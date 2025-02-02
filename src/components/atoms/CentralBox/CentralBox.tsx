// mui
import Paper from "@mui/material/Paper";
// utils
import classNames from "@/utils/classNames";
// types
import type { ReactNode } from "react";

export interface CentralBoxProps {
    children: ReactNode;
}

function CentralBox(props: CentralBoxProps): React.JSX.Element {
    return (
        <Paper
            className={classNames(
                "px-14 py-9",
                "mx-auto mt-32",
                "max-w-[90%] sm:max-w-md",
                "min-h-48",
                "text-center",
                "flex flex-col items-center justify-center"
            )}
        >
            {props.children}
        </Paper>
    );
}

export default CentralBox;
