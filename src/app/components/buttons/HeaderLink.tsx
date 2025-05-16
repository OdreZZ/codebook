import { useState } from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

interface HeaderLinkProps {
    title: string,
    onClick: () => void,
    children?: React.ReactNode,
    isExpanded?: boolean,
}

export default function HeaderLink({
    title,
    onClick,
    children,
    isExpanded,
}: HeaderLinkProps) {
    const [isHovering, setIsHovering] = useState(false)

    let fontColor = "text-[#585e71]"
    if (isHovering) {
        fontColor = "text-black"
    }

    return <div className="relative">
        <button
            className="cursor-pointer"
            onClick={() => onClick()}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <span className={`font-bold text-lg text-nowrap ${fontColor}`}>
                {title}{children ? <KeyboardArrowDownIcon fontSize="small"/> : ""}
            </span>
        </button>

        {children && (
            <div className={`absolute flex flex-col gap-3
                bg-white rounded-md shadow-md min-w-100 px-6 py-4
                ${isExpanded ? "" : "hidden"}
            `}>
                {children}
            </div>
        )}
    </div>
}