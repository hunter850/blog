import { Card, CardContent } from "@/components/ui/card";
// types
import type { ReactNode } from "react";

export interface AboutSectionCardProps {
    children?: ReactNode;
}

function AboutSectionCard(props: AboutSectionCardProps) {
    return (
        <Card className="group relative overflow-hidden bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-[1px] dark:overflow-visible dark:from-blue-500/10 dark:to-cyan-500/10">
            <div className="pointer-events-none absolute inset-[-100px]">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[120px]" />
            </div>
            <CardContent className="relative z-10 rounded-lg bg-white/80 p-6 dark:bg-white/[0.08]">
                {props.children}
            </CardContent>
        </Card>
    );
}

export default AboutSectionCard;
