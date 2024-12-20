import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection/MetricsSection";
import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
import offersFromJSON from "@/data/offers.json";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Main>
        <MetricsSection />
        <FeaturesSection />
        <RecommendedOffersSection
          offers={offersFromJSON.slice(0, 3)}
          title="Mobil Tersedia"
        />
        <BannerSection
          title="Temukan mobil impian Anda hari ini!"
          button={{ label: "Lihat Daftar Mobil", href: "/mobil" }}
        />
      </Main>
    </>
  );
};
