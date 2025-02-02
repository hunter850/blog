"use client";
import { StyledEngineProvider } from "@mui/material/styles";
// types
import type { ReactNode } from "react";

export interface GlobalCssPriorityProps {
    children: ReactNode;
}

export default function GlobalCssPriority(props: GlobalCssPriorityProps) {
    return <StyledEngineProvider injectFirst>{props.children}</StyledEngineProvider>;
}
