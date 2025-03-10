"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
// hooks
import useMounted from "@/hooks/useMounted";

function ThemeSwitcher(): React.JSX.Element {
    const { systemTheme, theme, setTheme } = useTheme();
    const mounted = useMounted();

    const currentTheme = useMemo(() => {
        return theme === "system" ? systemTheme : theme;
    }, [systemTheme, theme]);

    function changeThemeHandler() {
        if (currentTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:bg-transparent hover:[@media(hover:hover)]:bg-accent"
            >
                <span className="sr-only">切換主題</span>
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 hover:bg-transparent hover:[@media(hover:hover)]:bg-accent"
            onClick={changeThemeHandler}
        >
            {currentTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 [@media(hover:hover)]:hover:text-yellow-600" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700 dark:text-slate-400 [@media(hover:hover)]:hover:text-slate-900 dark:[@media(hover:hover)]:hover:text-slate-100" />
            )}
            <span className="sr-only">切換主題</span>
        </Button>
    );
}

export default ThemeSwitcher;
