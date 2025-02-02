import Image from "next/image";
// utils
import classNames from "@/utils/classNames";
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
}

function LoginButton(props: LoginButtonProps): React.JSX.Element {
    const { src, imgAlt, priority, children, buttonClassName, ...rest } = props;
    return (
        <button
            className={classNames(
                "relative",
                "flex items-center justify-center",
                "h-12",
                "m-2 p-2",
                "rounded",
                "cursor-pointer",
                buttonClassName
            )}
            {...rest}
            style={{ boxShadow: "var(--mui-shadows-1)" }}
        >
            <div className={classNames("absolute left-0 flex aspect-square h-12 items-center object-contain")}>
                <Image
                    className={classNames("h-full w-full")}
                    src={src}
                    alt={imgAlt ?? ""}
                    priority={priority === true ? true : false}
                />
            </div>
            <div className={classNames("absolute", "h-full", "w-[1px]", "bg-[#f2f2f2]", "left-12 top-0")}></div>
            <span className={classNames("grow pl-12 text-center text-base")}>{children}</span>
        </button>
    );
}

export default LoginButton;
