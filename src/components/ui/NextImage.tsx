import { INextImageProps } from "@/types/props/ui.types";
import Image from "next/image";

export default function NextImage({ src, alt, quality, ...props }: INextImageProps) {
    return <Image {...props} quality={quality ? quality : 100} alt={alt} src={src} unoptimized />;
}
