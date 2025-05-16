import { useState } from "react"

interface FooterLinkProps {
    title: string,
}

export default function FooterLink({
    title,
}: FooterLinkProps) {
    const [isHovering, setIsHovering] = useState(false)

    return <button onClick={() => console.log("Footer link")}
        className={`text-left text-slate-600 cursor-pointer
            ${isHovering ? "opacity-70" : ""}
        `}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        {title}
    </button>
}
