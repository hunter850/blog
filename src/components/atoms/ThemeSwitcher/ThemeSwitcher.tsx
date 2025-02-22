"use client";

import { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

function ThemeSwitcher(): React.JSX.Element {
    const t = useTranslations();
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

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

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="h-9 w-9">
                <span className="sr-only">{t("toggleSomething", { something: t("theme") })}</span>
            </Button>
        );
    }

    return (
        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={changeThemeHandler}>
            {currentTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-colors hover:text-yellow-600" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
            )}
            <span className="sr-only">{t("toggleSomething", { something: t("theme") })}</span>
        </Button>
    );
}

export default ThemeSwitcher;
