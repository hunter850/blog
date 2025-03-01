"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 px-4 dark:from-slate-900 dark:to-slate-800">
            <h1 className="mb-12 mt-[-48px] text-[120px] font-bold leading-none tracking-tighter text-slate-300/50 dark:text-slate-500/50 sm:text-[180px]">
                404
            </h1>
            <div className="relative w-full max-w-2xl rounded-xl bg-white/50 p-8 backdrop-blur-sm dark:bg-slate-800/50">
                {/* 裝飾元素 */}
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-500/5 dark:bg-blue-500/10" />
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10" />

                <div className="relative space-y-8 text-center">
                    {/* 404數字 */}
                    <div className="relative">
                        <div className="space-y-4">
                            <h2 className="text-center text-2xl font-semibold text-slate-800 dark:text-slate-100 sm:text-3xl">
                                Page Not Found
                            </h2>
                            <p className="text-center text-slate-600 dark:text-slate-400">
                                {"The page you are looking for doesn't exist or has been moved."}
                            </p>
                        </div>
                    </div>

                    {/* 返回首頁按鈕 */}
                    <Button
                        asChild
                        variant="outline"
                        className="border-slate-200 bg-white/50 text-slate-800 hover:bg-slate-100/50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50 dark:hover:text-slate-50"
                    >
                        <Link href="/" className="group gap-2">
                            <HomeIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
