"use client";

import { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
// components
import { Button } from "@/components/ui/button";

function SwitchThemeButton(): React.JSX.Element {
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

    return (
        <>
            {!mounted && (
                <Button className="ph-9 w-[60px]">
                    <span className="visuallyhidden">theme switcher</span>
                </Button>
            )}
            {mounted && (
                <Button className="h-9 w-[60px]" onClick={changeThemeHandler}>
                    {currentTheme === "dark" ? "light" : "dark"}
                </Button>
            )}
        </>
    );
}

export default SwitchThemeButton;
