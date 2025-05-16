import Image from "next/image"
import { useState } from "react"

interface AppButtonProps {
    title: string,
    image: string,
}

export default function AppButton({
    title,
    image,
}: AppButtonProps) {
    const [isHovering, setIsHovering] = useState(false)

    return <div onClick={() => console.log("AppButton")}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex flex-col relative border border-4 border-zinc-100 rounded-xl 
            cursor-pointer md:w-[599px]
        "
    >
        <div className="text-zinc-400 rounded-full 
            px-2 border border-zinc-400 absolute
            -top-3 -left-3 bg-white font-bold
            transition-all duration-200 ease-in-out
        "
            style={{
                transform: `scale(${isHovering ? "1.2" : "1"})`
            }}
        >
            +
        </div>

        <div className="flex justify-center p-4 grow">
            <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="transition-all h-fit duration-200 ease-in-out rounded-md"
                style={{
                    transform: `scale(${isHovering ? "1.1" : "1"})`,
                    opacity: isHovering ? 0.8 : 1,
                }}
            />
        </div>

        <div className="text-xs font-bold text-center border-t-4 border-zinc-100 px-1 py-2">
            {title}
        </div>
    </div>
}
