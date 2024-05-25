import Image from "next/image";

interface SeoDetailsProps {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  blurData: string;
  seoItems: string[];
}

const SeoDetails: React.FC<SeoDetailsProps> = ({
  id,
  title,
  imageSrc,
  imageAlt,
  seoItems,
  blurData,
}) => {
  return (
    <article className="max-w-sm border border-gray-300 rounded-lg shadow">
      <figure
        className="relative w-full h-48" // Agregado margin-bottom para separación entre imagen y título
        style={{
          aspectRatio: "4 / 3",
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          placeholder="blur"
          blurDataURL={blurData}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </figure>
      <div className="p-4">
        <h2 className="tsm:text-2xl text-xl font-medium title-font text-gray-900 mb-4 text-center">
          <span className="text-green-700 mr-2">&lt;</span>
          {title}
          <span className="ml-2 text-green-700">/&gt;</span>
        </h2>
        <ul className="list-none text-gray-700 text-base">
          {seoItems.map((item, index) => (
            <li key={index}>
              <span className="text-green-700">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SeoDetails;
