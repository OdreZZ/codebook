"use client"

import { ColorTheme } from "@/app/config/theme";
import { useState } from "react";

export enum CommonButtonSize {
    STANDARD,
    LARGE,
}

interface CommonButtonProps {
    width?: Number,
    onClick: () => void,
    children: React.ReactNode;
    theme?: ColorTheme,
    size?: CommonButtonSize,
}

export default function CommonButton({
    width,
    onClick,
    children,
    theme = ColorTheme.PRIMARY,
    size = CommonButtonSize.STANDARD,
}: CommonButtonProps) {
    const [isHovering, setIsHovering] = useState(false)

    let backgroundColor = "bg-rose-500"
    let textColor = "text-white"
    let textSize = ""
    let border = "border border-rose-500"
    let shadow = isHovering ? "shadow-xl" : ""
    let padding = "px-3 py-2"

    if (theme === ColorTheme.SECONDARY) {
        backgroundColor = isHovering ? "bg-zinc-100" : "bg-zinc-50"
        textColor = "text-rose-500"
        border = "border border-gray-300"
        shadow = ""
    }
    if (size === CommonButtonSize.LARGE) {
        textSize = "text-xl"
        padding = "px-6 py-4"
    }

    return <button
        onClick={() => onClick()}
        className={`h-fit cursor-pointer rounded-md font-bold
            transition-all duration-200 ease-in-out text-nowrap
            ${padding} ${border} ${backgroundColor} ${textColor} ${shadow} ${textSize}
        `}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
            width: `${width}px`,
        }}
    >
        {children}
    </button>
}
