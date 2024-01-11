import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import UseCaseItem from "~/components/UseCaseItem";

const usecases = [
  {
    title: "Gift With Purchase",
    description: "https://www.linkedin.com/in/antonio-loncar",
    imageUrl:
      "https://aarke.com/cdn/shop/files/EU_Featured_Collection_Desktop_178e1e1a-463c-4ad2-9914-5666e12dc246.jpg?v=1691413024&width=1500",
    features: [
      { name: "Origin", description: "Custom Shopify App" },
      {
        name: "Platform",
        description: "Shopify Plus",
      },
      { name: "App type", description: "Checkout UI Extension" },
      {
        name: "Features",
        description: "Hand sanded and finished with natural oil",
      },
    ],
  },
  {
    title: "Upsell",
    description: "https://www.linkedin.com/in/antonio-loncar",
    imageUrl:
      "https://aarke.com/cdn/shop/files/EU_Featured_Collection_Desktop_178e1e1a-463c-4ad2-9914-5666e12dc246.jpg?v=1691413024&width=1500",
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
  {
    title: "Upsell",
    description: "https://www.linkedin.com/in/antonio-loncar",
    imageUrl:
      "https://aarke.com/cdn/shop/files/EU_Featured_Collection_Desktop_178e1e1a-463c-4ad2-9914-5666e12dc246.jpg?v=1691413024&width=1500",
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
            <div className="mt-6 grid gap-y-32">
              {usecases.map(({ title, description, features, imageUrl }) => (
                <UseCaseItem
                  key={title}
                  title={title}
                  description={description}
                  features={features}
                  imageUrl={imageUrl}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>
      </BodyContent>

      <Footer />
    </div>
  );
}
