import type { Metadata } from "next";
import BannerContact from "app/components/bannercontact";
export const metadata: Metadata = {
  title: "▷ Junior Duque Contacto Servicios de SEO y Desarrollo de Web",
  description:
    "Contáctame aquí para Optimización, SEO, creación de contenidos y Desarrollo Web",
};
export default function Conatcato() {
  return (
    <>
      <BannerContact />
    </>
  );
}
