"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallback: string;
};

export function SafeImage({ src, fallback, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={!!imgSrc && imgSrc.length > 0 ? imgSrc : fallback}
      alt={alt}
      onLoad={(event) => {
        const img = event.currentTarget; // isso é um HTMLImageElement
        if (img.naturalWidth === 0) {
          setImgSrc(fallback);
        }
      }}
      onError={() => setImgSrc(fallback)}
      unoptimized // permite tratar manualmente
    />
  );
}
