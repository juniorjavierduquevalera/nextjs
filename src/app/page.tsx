import type { Metadata } from "next";
import HeroTemplate from "app/components/hero-template";
import CustomParallax from "app/components/banner";
import Content from "app/components/content";
import Feature from "app/components/feature";
import BannerForm from "app/components/bannerform";

export const metadata: Metadata = {
  title: "▷ Junior Duque - SEO / Frontend Developer",
  description:
    "Especialista en SEO técnico y desarrollo Wed, centrado en optimizar el rendimiento y la visibilidad de sitios web en motores de búsqueda.",
};

export default function Home() {
  const heroTemplateProps = {
    title: "Junior Duque Seo / Frontend Developer",
    description:
      "Soy especialista en SEO técnico, SEO Content y desarrollo web, centrado en optimizar el rendimiento, la interfaz, el diseño y funcionalidad de sitios web, mi meta es potenciar el máximo la visibilidad de aplicaciones en los motores de buscadores con un alto performance.",
    src: "/junior-duque-perfil.jpg",
    alt: "Junior Duque perfil",
    blurDataURL:
      "data:image/webp;base64,UklGRuYCAABXRUJQVlA4WAoAAAAgAAAAiAAAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGNALgAgADIAMAAxADZWUDgg+AAAADAMAJ0BKokAiQA/mcTTYbkyKyYrFJtTIDMJZ27dfv8NyHrX8PlmxP5KGPT1Ljy6yI9n37pQEleNF+4wnaY44q8qltldO5/50In0ObMES0RKmczTkXXBvOyU7wJGuAl04sLO6VOk8lxkiAAA/J7NRh+NVl4GKfLTMjn9/7gmtm55iW1FTqF2mnmQ8dB69aKIdgPXTBr3OgZo1sYX/9HMjMArxFw91V69NVcJ/sqgukePhIfrtuoPeTc6xo0xDhQQSTF+NdRvz7hACEa9xT/i9CDTRHvHkfgqQX8LE+L00fG4z/C9wVw9lUjIsM8h6fGOjTKJS2L7kAAA",
  };

  return (
    <>
      <HeroTemplate {...heroTemplateProps} />
      <Content />
      <CustomParallax />
      <Feature />
      <BannerForm />
    </>
  );
}
