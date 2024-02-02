import type { MetaFunction } from "@remix-run/cloudflare";
import BodyContent from "~/components/BodyContent";
import FeaturedUsecase from "~/components/FeaturedUsecase";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroHorizontal from "~/components/HeroHorizontal";
import LogoCloud from "~/components/LogoCloud";
import SectionWrapper from "~/components/SectionWrapper";
import Services from "~/components/Services";

export const meta: MetaFunction = () => {
  return [
    { title: "Pottr.co - Digital agency" },
    {
      name: "description",
      content:
        "A small digital agency for Shopify integration and custom app development",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Header />

      <BodyContent>
        <SectionWrapper>
          <Services />
        </SectionWrapper>

        <SectionWrapper>
          <LogoCloud />
        </SectionWrapper>

        <SectionWrapper>
          <FeaturedUsecase />
        </SectionWrapper>

        <SectionWrapper>
          <HeroHorizontal />
        </SectionWrapper>

        <Footer />
      </BodyContent>
    </>
  );
}
