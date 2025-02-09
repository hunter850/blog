import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export interface ThemeProviderProps {
    children: ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
    return (
        <NextThemeProvider enableSystem={true} attribute="class">
            {props.children}
        </NextThemeProvider>
    );
}

export default ThemeProvider;
