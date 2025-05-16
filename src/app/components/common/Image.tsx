import NextImage from "next/image";

interface ImageProps {
    src: string,
    alt: string,
}

export default function Image({
    src,
    alt,
}: ImageProps) {
    return <div>
        <NextImage 
            src={src}
            alt={alt}
        />
    </div>
}
