import CommonButton from "./CommonButton";

interface CustomerCardProps {
    image: string,
}

export default function CustomerCard({
    image,
}: CustomerCardProps) {
    return <CommonButton onClick={() => console.log("Customer card")}>
        Image
    </CommonButton>
}