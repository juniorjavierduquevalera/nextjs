import Image from "next/image";
import Link from "next/link";
import ButtonContact from "../ui/button";
export default function Feature() {
  return (
    <>
      <div className="w-full bg-gray-50">
        <section className="text-gray-600 body-font main-bg py-10">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Habilidades y Estudios
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-green-700 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <figure className="relative flex justify-center w-24 h-20 items-center aspect-auto">
                  <Image
                    src="/icon-upel.png"
                    alt="icono de la Universidad UPEL Maracay"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={96}
                    height={80}
                    style={{ width: "auto", height: "auto", maxWidth: "96px", maxHeight: "80px" }}
                  />
                </figure>
                <div className="flex-grow">
                  <h3 className="text-gray-900 text-lg title-font font-medium mb-3">
                    UPEL
                  </h3>
                  <p className="leading-relaxed text-base text-left">
                    La Universidad Pedagógica Experimental Libertador (UPEL)
                    ofrece programas avanzados en educación matemática,
                    incluyendo un doctorado y una maestría. Estos programas se
                    centran en formar investigadores y educadores altamente
                    cualificados en la enseñanza y el aprendizaje de las
                    matemáticas en Venezuela.
                  </p>
                  <Link
                    href="https://upel.edu.ve/"
                    className="mt-3 text-indigo-800 inline-flex items-center"
                    aria-label="saber más de la UPEL"
                    target="blank"
                    prefetch={false}
                  >
                    Saber más del instituto
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <figure className="relative flex justify-center items-center w-24 h-20 aspect-auto">
                  <Image
                    src="/icon-platzi.png"
                    alt="icono de Platzi"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={96}
                    height={80}
                    style={{ width: "auto", height: "auto", maxWidth: "96px", maxHeight: "80px" }}
                  />
                </figure>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Platzi Aprendizaje Online
                  </h2>
                  <p className="leading-relaxed text-base text-left">
                    Platzi es una plataforma de educación en línea que ofrece
                    cursos y programas de aprendizaje en áreas como desarrollo
                    de software, marketing digital, diseño, negocios y más. se
                    destaca por el aprendizaje práctico y efectivo, con clases
                    en vivo y acceso a una comunidad activa y en crecimiento de
                    profesionales.
                  </p>
                  <Link
                    href="https://platzi.com/"
                    className="mt-3 text-indigo-800 inline-flex items-center"
                    aria-label="saber más Platzi"
                    target="blank"
                    prefetch={false}
                  >
                    Saber más del instituto
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <figure className="relative flex justify-center items-center w-24 h-20 aspect-auto">
                  <Image
                    src="/icon-big-seo-agencia.png"
                    alt="icono de big seo agencia"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={96}
                    height={80}
                    style={{ width: "auto", height: "auto", maxWidth: "96px", maxHeight: "80px" }}
                  />
                </figure>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Big SEO Academia
                  </h2>
                  <p className="leading-relaxed text-base text-left">
                    La Academia BIG SEO se centra en la formación online en
                    Marketing Digital. Ofrece cursos especializados que puedes seguir a tu
                    ritmo y desde cualquier lugar. Se destaca por su soporte
                    directo con profesores y profesionales activos en el campo del SEO,
                    proporcionando una enseñanza práctica y realista.
                  </p>
                  <Link
                    href="https://bigseo.com/"
                    className="mt-3 text-indigo-800 inline-flex items-center"
                    aria-label="saber más de la academia Big SEO"
                    target="_blank"
                    prefetch={false}
                  >
                    Saber más del instituto
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/servicios"
              passHref
              prefetch={false}
              aria-label="ir a la página de contactos"
              className="flex justify-center mt-10"
            >
              <ButtonContact name="Contacto" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
