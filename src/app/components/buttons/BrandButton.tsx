import Image from "next/image";
import { useState } from "react";

interface BrandButtonProps {
    title: string,
    image: string,
}

export default function BrandButton({
    title,
    image,
}: BrandButtonProps) {
    const [isHovering, setIsHovering] = useState(false)

    return <div onClick={() => console.log("Brand button")}
        className="cursor-pointer flex flex-col gap-2"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
        <Image
            src={image}
            alt={title}
            width={564}
            height={376}
            className={`rounded-md transition-transform transition-shadow duration-200`}
            style={{
                transition: "transform 0.2s, box-shadow 0.2s",
                transform: isHovering ? "translateY(-4px)" : "",
                boxShadow: isHovering ? "0 8px 80px rgba(0, 0, 0, 0.2)" : "",
            }}
        />

        <span className="font-bold">
            {title}
        </span>
    </div>
}