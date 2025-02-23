"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
    textToCopy: string;
}

function CopyButton({ textToCopy }: CopyButtonProps) {
    const [showCopied, setShowCopied] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleCopy = async () => {
        if (showCopied === false) {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            await navigator.clipboard.writeText(textToCopy);
            setShowCopied(true);
            timerRef.current = setTimeout(() => setShowCopied(false), 1000);
        }
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <button
            onClick={handleCopy}
            className={cn("ml-2 transition-opacity", showCopied ? "cursor-default" : "cursor-pointer")}
            aria-label="Copy email"
        >
            {showCopied ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
            )}
        </button>
    );
}

export default CopyButton;
