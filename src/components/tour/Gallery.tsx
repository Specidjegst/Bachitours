"use client";
import Image from "next/image";
import { useState } from "react";

export function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  const [active, setActive] = useState(0);
  if (!images.length) return null;
  return (
    <div className="grid gap-3 md:grid-cols-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl2 md:col-span-4">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:col-span-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`relative aspect-[5/4] overflow-hidden rounded-lg sm:rounded-xl ${active === i ? "ring-2 ring-primary" : "opacity-80 hover:opacity-100"}`}
          >
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 200px, 100px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
