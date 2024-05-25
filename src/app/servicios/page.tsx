import type { Metadata } from "next";
import HeroTemplate from "app/components/hero-template";
import BannerForm from "app/components/bannerform";
import SeoCards from "app/components/seocards";
import seoData from "../api/data";

export const metadata: Metadata = {
  title: "▷ Junior Duque Servicios de SEO y Desarrollo de Web",
  description:
    "Optimización y Desarrollo Web, SEO ténico, SEO content, SEO para marketplace, Redes Sociale y videos",
};

export default function Servicios() {
  const seoSections = Object.values(seoData);

  const heroProps = {
    title: "Servicios de SEO y Desarrollo de app Web",
    description:
      "Desde comprender tus necesidades hasta diseñar estrategias SEO efectivas y desarrollar aplicaciones web intuitivas, me ocupo de cada detalle asegurando que cada proyecto alcance su máximo potencial tanto en visibilidad online como en usabilidad.",
    src: "/servicios-de-seo-y-desarrollo-de-app-web.jpg",
    alt: "servicios de seo y desarrollo de app web",
    blurDataURL:
      "data:image/webp;base64,UklGRjoDAABXRUJQVlA4WAoAAAAgAAAAiAAAiAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGNALgAgADIAMAAxADZWUDggTAEAADANAJ0BKokAiQA/EXqzUzi7pSKqV2t7cCIJZ27gNTZ3Z35ZXHQR9g+rMG1N/59ots4MuYwiCrbDRuE0i8Dj4+e+8bEVlv4cLjbglQlX/WnaIaSalfH3WPqq/yEe1HIVbRTo4G6ID/WQy5ToKWz7qqm48AD+7Xcnfd+P3HTUe+Tk4pO5ECJbzDD7bBl4fBrFsOeYAFHp3ESOVkFr48IGP09GoeTzL0c0IHGZJLy6Y/qh+2QA7gkx9CywGVoZfGyFd1jgHTkLriIzqj46+Ha14UWwty7i+Hdcje7HowH4VmZQU/ORzWG2sTYGP84JgMvXVV2VoBhtfUKxgkp/QR1bTaRpQ5iFTVFdj/j/kazOATwcnnXm+ahXgjM27kn44Hw7R3XIbcI3uDQPgLbeNKz2IPQkliVDtSuHDmKncZ8BFDktvS6SQ0pg+qkQgAAA",
  };

  return (
    <>
      <HeroTemplate {...heroProps} />
      <SeoCards seoSections={seoSections} />
      <figure className="w-full pt-5">
        <BannerForm />
      </figure>
    </>
  );
}
