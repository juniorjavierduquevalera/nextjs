import Link from "next/link";
import Image from "next/image";
import ButtonContact from "app/ui/button";

export default function Content() {
  return (
    <>
      <div className="bg-gray-50 w-full">
        <section className="text-gray-600 body-font mb-10 main-bg">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <article className="flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="relative lg:w-3/5 w-3/4 flex justify-center items-center aspect-square">
                  <Image
                    src="/desarrollo-web-y-seo.png"
                    alt="Desarrollo Web y SEO"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"          
                  />
                </div>
                <div>
                  <div className="text-indigo-800 lg:w-3/4 lg:ml-auto lg:text-left tracking-widest font-medium title-font my-2">
                    Especialidades
                  </div>
                  <h2 className="ml-auto text-left lg:w-3/4 tsm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Desarrollador Frontend | Posicionamiento web | SEO Youtube,
                    Amazon, Mercado libre, Instagram, Ebay, Ecommerce | React JS
                    | Next JS | WordPress <span>&#128640;</span>
                  </h2>
                  <p className="lg:w-3/4 text-left lg:ml-auto leading-relaxed text-base">
                    Con experiencia en el campo del <strong>SEO</strong> y
                    desarrollo web, me especializo en la optimización de sitios
                    para plataformas como <strong>eBay</strong>,
                    <strong>Amazon</strong>, <strong>YouTube</strong> e
                    <strong>Instagram</strong>, así como en el desarrollo de
                    aplicaciones web en <strong>React</strong> y CMS como
                    <strong>WordPress</strong>.
                  </p>
                  <br />
                  <p className="lg:w-3/4 text-left lg:ml-auto leading-relaxed text-base">
                    Mi enfoque está en aumentar la
                    <strong> visibilidad y el alcance</strong> de las marcas en
                    los <strong>motores de búsqueda</strong>, asegurando tráfico
                    que genere conversiones significativas.
                  </p>
                  <br />
                  <Link
                    href="/servicios"
                    passHref
                    prefetch={false}
                    aria-label="ir a la pagina de servicios"
                    className="flex justify-center lg:w-3/4 lg:ml-auto"
                  >
                    <ButtonContact name="Servicios" />
                  </Link>
                </div>
              </article>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <section className="flex gap-1">
                  <span>
                    <Image
                      src="/icon-figma.svg"
                      height={24}
                      width={24}
                      alt="icono de figma"
                    />
                  </span>
                  <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    DISEÑO UI/UX
                  </h3>
                </section>
                <section>
                  <p className="leading-relaxed text-base mb-4">
                    Diseños de <strong>Interfaces de usuarios</strong> en
                    <strong>Figma</strong> y diseños óptimos para
                    <strong> campañas</strong> en{" "}
                    <strong>Redes Sociales</strong> y <strong>Ecommerce</strong>
                    , para las siguientes plataformas:{" "}
                    <strong>Instagram</strong>, <strong>Youtube</strong>,
                    <strong>eBay</strong>, <strong>Amazon</strong>,
                    <strong>LinkedIn</strong>, <strong>Facebook</strong>,
                    <strong>Marketplace</strong>.
                  </p>
                </section>
                <Link
                  href="/servicios"
                  className="text-indigo-800 inline-flex items-center"
                  aria-label="leer más acerca sobre mis conocimientos de Diseño UI/UX"
                  prefetch={false}
                >
                  Leer más
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
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <section className="flex gap-1">
                  <span>
                    <Image
                      src="/icon-web.svg"
                      height={24}
                      width={24}
                      alt="icono de web"
                    />
                  </span>
                  <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    DESARROLLO WEB
                  </h3>
                </section>
                <p className="leading-relaxed text-base mb-4">
                  Desarrollo de <strong>aplicaciones web</strong> y
                  <strong> sitios web</strong>, tanto{" "}
                  <strong>estáticos como dinámicos</strong>, manejo de (
                  <strong>CMS</strong>
                  ), destacando <strong>WordPress</strong> y creación de
                  <strong> aplicaciones móviles</strong> eficientes y
                  atractivas.
                </p>
                <Link
                  href="/servicios"
                  className="text-indigo-800 inline-flex items-center"
                  aria-label="leer más acerca sobre mis conocimientos de Desarrollo Web"
                  prefetch={false}
                >
                  Leer más
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
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <section className="flex gap-1">
                  <span>
                    <Image
                      src="/icon-seo-tecnico.svg"
                      height={24}
                      width={24}
                      alt="icono de seo técnico"
                    />
                  </span>
                  <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    SEO TÉCNICO
                  </h3>
                </section>
                <p className="leading-relaxed text-base mb-4">
                  Optimización de la <strong>estructura</strong> y
                  <strong>indexación</strong> de <strong>sitios web</strong>
                  mediante <strong>auditorías técnicas</strong>, implementación
                  de <strong>datos estructurados</strong> y análisis de
                  <strong>Core Web Vitals</strong>. Aseguro que cada sitio sea
                  <strong>accesible</strong> y esté perfectamente configurado
                  para los <strong>motores de búsqueda</strong>.
                </p>
                <Link
                  href="/servicios"
                  className="text-indigo-800 inline-flex items-center"
                  aria-label="leer más acerca sobre mis conocimientos de Desarrollo Web"
                  prefetch={false}
                >
                  Leer más
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
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <section className="flex gap-1">
                  <span>
                    <Image
                      src="/icon-seo-content.svg"
                      height={24}
                      width={24}
                      priority={false}
                      alt="icono de seo content"
                    />
                  </span>
                  <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    SEO CONTENT
                  </h3>
                </section>
                <p className="leading-relaxed text-base mb-4">
                  Desarrollo <strong>estrategias de SEO de contenido</strong>,
                  centrando mis esfuerzos en la
                  <strong>
                    {" "}
                    investigación profunda de palabras clave
                  </strong>{" "}
                  para crear <strong>contenidos</strong> que resonarán con tu
                  <strong>público objetivo</strong>. Mi objetivo es producir
                  material <strong>relevante</strong> y{" "}
                  <strong>optimizado</strong> que mejore tu
                  <strong>visibilidad en línea</strong> y atraiga
                  <strong>tráfico cualificado</strong>.
                </p>
                <Link
                  href="/servicios"
                  className="text-indigo-800 inline-flex items-center"
                  aria-label="leer más acerca sobre mis conocimientos de SEO content"
                  prefetch={false}
                >
                  Leer más
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
        </section>
      </div>
    </>
  );
}
