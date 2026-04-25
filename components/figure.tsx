import Image from "next/image";
import type { Figure as FigureProps } from "@/lib/types";

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="article-figure">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={800}
        className="article-figure__image"
      />
      <figcaption className="article-figure__caption">{caption}</figcaption>
    </figure>
  );
}
