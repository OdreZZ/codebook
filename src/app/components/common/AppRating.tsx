import { Star } from "@mui/icons-material";

interface AppRating {
    storeName: string,
}

export default function AppRating({
    storeName,
}: AppRating) {
    return <span className="flex gap-1 text-xs">
        <span>5.0</span>
        <span className="text-slate-600">
            <Star fontSize="small" style={{ fontSize: "0.75rem" }} />
            <Star fontSize="small" style={{ fontSize: "0.75rem" }} />
            <Star fontSize="small" style={{ fontSize: "0.75rem" }} />
            <Star fontSize="small" style={{ fontSize: "0.75rem" }} />
            <Star fontSize="small" style={{ fontSize: "0.75rem" }} />
        </span>
        <span>
            on {storeName}
        </span>
    </span>
}
