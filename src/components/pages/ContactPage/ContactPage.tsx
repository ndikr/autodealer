import { Main } from "@/components/blocks/Main/Main";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { HedaerSection } from "@/components/sections/HeaderSection/HeaderSection";

export const ContactPage = () => {
  return (
    <>
      <HedaerSection title="Kontak" />
      <Main>
        <ContactSection />
        <BannerSection
          title="Temukan mobil impian Anda hari ini!"
          button={{ label: "Lihat Daftar Mobil", href: "/mobil" }}
        />
      </Main>
    </>
  );
};
