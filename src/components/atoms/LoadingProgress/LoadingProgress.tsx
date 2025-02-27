"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { createPortal } from "react-dom";

function LoadingProgress() {
    const pathname = usePathname();
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (loading) {
            setProgress(10); // 起始時給 10%
            interval = setInterval(() => {
                setProgress((prev) => Math.min(prev + Math.random() * 20, 90)); // 緩慢增加到 90%
            }, 100);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [loading]);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setProgress(100);
                setTimeout(() => setLoading(false), 300); // 進度條達到 100% 後，稍微延遲再隱藏
            }, 500);
        }
    }, [pathname]); // 當路由變更時，完成進度

    useEffect(() => {
        setLoading(true);
    }, [pathname]); // 每次路由變更時，觸發 loading

    // return <>{loading && <Progress value={progress} className="fixed left-0 top-0 h-1 w-full transition-all" />}</>;
    return (
        <>
            {mounted &&
                createPortal(
                    loading && (
                        <div className="fixed left-0 top-0 z-50 h-1 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                            <div
                                className="animate-loading-progress h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>
                    ),
                    document.body
                )}
        </>
    );
}

export default LoadingProgress;
