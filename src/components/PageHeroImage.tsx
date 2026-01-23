import type { FC } from "react";

type PageHeroImageProps = {
  src: string;
  alt: string;
  heightClass?: string;
};

export const PageHeroImage: FC<PageHeroImageProps> = ({
  src,
  alt,
  heightClass = "h-40 md:h-52",
}) => {
  return (
    <div className="relative mt-5 overflow-hidden rounded-2xl border">
      <img src={src} alt={alt} className={`${heightClass} w-full object-cover`} />
      <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
    </div>
  );
};
