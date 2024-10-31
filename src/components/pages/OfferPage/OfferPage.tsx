import type offersFromJSON from "@/data/offers.json";
import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";
import { OffersSection } from "@/components/sections/OffersSection/OffersSection";

type Props = {
  offers: (typeof offersFromJSON)[number][];
};

export const OfferPage = ({ offers }: Props) => {
  return (
    <>
      <HedaerSection title="Mobil Tersedia" />
      <Main>
        <OffersSection offers={offers} title="Model yang tersedia saat ini" />
        <BannerSection
          title="Temukan mobil impian Anda hari ini!"
          button={{ label: "Lihat Daftar Mobil", href: "/mobil" }}
        />
      </Main>
    </>
  );
};
