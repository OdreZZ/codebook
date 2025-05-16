import Image from "next/image";

interface ReviewCardProps {
    reviewText: string,
    reviewerName: string,
    reviewerJob: string,
    reviewerImg: string,
}

export default function ReviewCard({
    reviewText,
    reviewerName,
    reviewerJob,
    reviewerImg,
}: ReviewCardProps) {
    return <div className="flex flex-col p-8 gap-4 w-100 h-100 md:w-150 md:h-70 justify-between"
        style={{
            background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 61%, rgba(255,255,255,.1) 100%)",
        }}
    >
        <div className="text-xl">
            {reviewText}
        </div>

        <div className="flex gap-4">
            <div>
                <Image
                    className="rounded-full"
                    src={reviewerImg}
                    width={50}
                    height={50}
                    alt=""
                />
            </div>

            <div className="text-lg font-bold">
                <div>{reviewerName}</div>
                <div>{reviewerJob}</div>
            </div>
        </div>
    </div>
}
