"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // 當頁面捲動超過 300px 時顯示按鈕
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <Button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 h-10 w-10 rounded-full bg-slate-100 p-3 text-slate-600 shadow-[0_8px_20px_rgba(148,163,184,0.2)] transition-all duration-300 hover:translate-y-[-4px] hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:shadow-[0_8px_20px_rgba(148,163,184,0.1)] dark:hover:bg-slate-600"
                    size="lg"
                >
                    <ChevronUp />
                </Button>
            )}
        </>
    );
}
