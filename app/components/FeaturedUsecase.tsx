import UsecaseItem from "./UsecaseItem";

export default function FeaturedUsecase() {
  return (
    <div className="relative items-center w-full">
      <h3 className="font-semibold tracking-tight text-[#FF4F01] text-lg mb-2 text-center md:text-left">
        featured usecase
      </h3>
      <div className="relative flex-col items-start m-auto align-middle grid grid-cols-1  gap-12">
        <UsecaseItem
          title="Fulfillment service integration"
          description="
          Boost your e-commerce store with our tailor-made Shopify apps and extensions.
          Improve your customer experience with tempting upsells and gift with purchase extensions."
          heroLinkUrl="/custom-shopify-apps-usecases"
        />
        <UsecaseItem
          title="Shopify Automation"
          description="
          Boost your e-commerce store with our tailor-made Shopify apps and extensions.
          Improve your customer experience with tempting upsells and gift with purchase extensions."
          heroLinkUrl="/custom-shopify-apps-usecases"
        />
      </div>
    </div>
  );
}
