"use client";
import { Parallax } from "react-parallax";

export default function CustomParallax() {
  return (
    <>
      <Parallax
        strength={200}
        bgImage="/banner-seo.jpg"
        bgImageStyle={{ objectFit: "contain", width: "100%", height: "100%" }}
        bgImageAlt="Banner de SEO"
        className="my-5 lg:my-10"
        lazy={true}
      >
        <figure
          className="relative w-full max-w-[480px]"
          style={{
            aspectRatio: "480 / 280",
          }}
        >
          <div className="w-full h-[280px] lg:h-[480px] max-w-[480px]"></div>
        </figure>
      </Parallax>
    </>
  );
}
