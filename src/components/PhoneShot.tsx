import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Rendered width in px at the largest size. */
  width?: number;
};

/** A real app screen in a quiet device frame. Fixed aspect ratio, so the layout never jumps while it loads. */
export default function PhoneShot({ src, alt, priority = false, className = "", width = 300 }: Props) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={{ width: `min(${width}px, 72vw)` }}
    >
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          width={660}
          height={1434}
          priority={priority}
          sizes={`(max-width: 640px) 72vw, ${width}px`}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
