"use client";
import { Parallax } from "react-parallax";
import Image from "next/image";

export default function BannerContact() {
  return (
    <>
      <Parallax
        strength={200}    
        bgImageAlt="banner de Contacto de Junior Duque"        
        renderLayer={(percentage) => (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Image
              src="/banner-seo-contact.jpg"
              alt="banner de Contacto de Junior Duque"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              priority
              blurDataURL="data:image/webp;base64,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" // Proporciona una imagen borrosa pequeña para el efecto de desenfoque
            />
          </div>
        )}
      >
        <div className="w-full h-[280px] lg:h-[calc(100vh-64px)]"></div>
      </Parallax>
    </>
  );
}
