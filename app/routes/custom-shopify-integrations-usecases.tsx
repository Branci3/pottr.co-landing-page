import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import UseCaseItem from "~/components/UseCaseItem";

const usecases = [
  {
    title: "Aarke - Fulfillment Service Integration",
    description: "https://www.linkedin.com/in/antonio-loncar",
    features: [
      { name: "Origin", description: "Designed by Good Goods, Inc." },
      {
        name: "Material",
        description:
          "Solid walnut base with rare earth magnets and powder coated steel card cover",
      },
      { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
      {
        name: "Finish",
        description: "Hand sanded and finished with natural oil",
      },
      { name: "Includes", description: "Wood card tray and 3 refill packs" },
      {
        name: "Considerations",
        description:
          "Made from natural materials. Grain and color vary with each item.",
      },
    ],
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Custom Shopify App Use cases" },
    { name: "description", content: "Shopify Custom App Use cases" },
  ];
};

export default function ShopifyUsecases() {
  return (
    <div>
      <Header />

      <BodyContent>
        <SectionWrapper>
          <div className="gap-x-8 gap-y-20 m-auto">
            <h1 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
              use cases
            </h1>
            {usecases.map(({ title, description, features }) => (
              <UseCaseItem
                key={title}
                title={title}
                description={description}
                features={features}
              />
            ))}
          </div>
        </SectionWrapper>
      </BodyContent>

      <Footer />
    </div>
  );
}
