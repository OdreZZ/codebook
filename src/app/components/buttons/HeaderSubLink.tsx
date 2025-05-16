import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

interface HeaderSubLinkProps {
    title: string,
    subtitle?: string,
    highlight?: string,
}

export default function HeaderSubLink({
    title,
    subtitle,
    highlight,
}: HeaderSubLinkProps) {
    return <button
        className="flex justify-between text-lg cursor-pointer"
        onClick={() => console.log("Header sub link")}
    >
        <div className="flex flex-col text-left">
            <div className="">
                {title}
            </div>
            <div className="text-zinc-500 text-sm">
                {subtitle}
            </div>
        </div>

        <div>
            <span className="text-gradient font-bold">
                {highlight}
            </span>
            <KeyboardArrowRightIcon className="opacity-20" />
        </div>
    </button>
}
