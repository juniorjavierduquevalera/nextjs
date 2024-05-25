"use client";
import { Parallax } from "react-parallax";

export default function BannerForm() {
  return (
    <>
      <Parallax
        strength={200}
        bgImage="/banner-seo-form.jpg"
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
        bgImageAlt="banner de Contacto de Junior Duque"      
        lazy={true} 
      >
        <div className="w-full h-[280px] lg:h-[560px]">         
        </div>
      </Parallax>
    </>
  );
}
