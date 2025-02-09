import Image from "next/image";
// utils
import { cn } from "@/lib/utils";
// types
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export interface LoginButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    src: StaticImageData;
    imgAlt?: string;
    priority?: boolean;
    buttonClassName?: string;
    imageWrapProps?: Record<string, any>;
}

function LoginButton(props: LoginButtonProps): React.JSX.Element {
    const { src, imgAlt, priority, children, buttonClassName, imageWrapProps, ...rest } = props;
    const { className: imageWrapClass, ...imageWrapRest } = imageWrapProps ?? {};
    return (
        <button
            className={cn(
                "relative",
                "flex items-center justify-center",
                "h-12",
                "m-2 px-4 py-2",
                "rounded",
                "cursor-pointer",
                "shadow-md",
                buttonClassName
            )}
            {...rest}
        >
            <div
                className={cn("absolute left-0 flex aspect-square h-12 items-center object-contain", imageWrapClass)}
                {...imageWrapRest}
            >
                <Image
                    className={cn("h-full w-full")}
                    src={src}
                    alt={imgAlt ?? ""}
                    priority={priority === true ? true : false}
                />
            </div>
            <div className={cn("absolute", "h-full", "w-[1px]", "bg-[#f2f2f2]", "left-12 top-0")}></div>
            <span className={cn("grow pl-12 text-center text-base")}>{children}</span>
        </button>
    );
}

export default LoginButton;
