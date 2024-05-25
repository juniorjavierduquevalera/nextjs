import Image from "next/image";
import Link from "next/link";
import ButtonContact from "app/ui/button";
import Email from "app/ui/email";
import Phone from "app/ui/phone";
import SocialMedia from "app/ui/socialmedia";

interface HeroTemplateProps {
  title: string;
  description: string;
  src: string;
  alt: string;
  blurDataURL: string;
}

// Exporta por defecto directamente en la declaración del componente
export default function HeroTemplate({
  title,
  description,
  src,
  alt,
  blurDataURL,
}: HeroTemplateProps) {
  return (
    <>
      <section className="flex lg:my-28 flex-col lg:flex-row container mx-auto text-gray-600 body-font main-bg">
        <article className="text-max-w flex px-5 py-5 lg:py-24 items-center justify-star lg:justify-center flex-col order-2 lg:order-1">
          <div className="text-center w-full">
            <h1 className="text-left title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              {title}
            </h1>
            <p className="text-left mb-8 leading-relaxed">{description}</p>
            <div className="flex items-end gap-2 mb-3">
              <Email />
            </div>
            <div className="flex gap-2 items-end">
              <Phone />
            </div>
            <Link
              className="flex justify-center w-full mt-5"
              href="./contacto"
              aria-label="Ir a la página de contacto"
              prefetch={false}
            >
              <ButtonContact name="Contacto" />
            </Link>
          </div>
        </article>
        <article className="w-full flex justify-center lg:justify-between items-center order-1 lg:order-2 px-5">
          <figure className="w-full aspect-square relative overflow-hidden rounded-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
              priority={true}
            />
          </figure>
        </article>
      </section>
      <figure className="flex justify-center mb-14">
        <SocialMedia />
      </figure>
    </>
  );
}
