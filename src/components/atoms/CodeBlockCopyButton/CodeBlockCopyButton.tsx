"use client";

import { useState, useRef, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export interface CodeBlockCopyButtonProps {
    textToCopy?: string;
}

function CodeBlockCopyButton(props: CodeBlockCopyButtonProps) {
    const [showCopied, setShowCopied] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleCopy = async () => {
        if (showCopied === false) {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            await navigator.clipboard.writeText(props?.textToCopy ?? "");
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
            className="absolute right-2 top-2 text-black/30 hover:text-black/50 dark:text-white/30 dark:hover:text-white/50"
            onClick={handleCopy}
        >
            {showCopied ? <Check /> : <Copy />}
        </button>
    );
}

export default CodeBlockCopyButton;
