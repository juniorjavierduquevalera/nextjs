// src/components/SeoCards.tsx
import SeoDetails from "../ui/SeoDetails";

interface SeoSection {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  blurData: string; 
  seoItems: string[];
}

interface SeoCardsProps {
  seoSections: SeoSection[];
}

const SeoCards: React.FC<SeoCardsProps> = ({ seoSections }) => {
  if (!seoSections || seoSections.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="container main-bg mx-auto px-2 pb-10">
      <div className="main-bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {seoSections.map((section) => (
          <SeoDetails
            key={section.id}
            id={section.id}
            title={section.title}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            seoItems={section.seoItems}
            blurData={section.blurData}                  
          />
        ))}
      </div>
    </div>
  );
};

export default SeoCards;
