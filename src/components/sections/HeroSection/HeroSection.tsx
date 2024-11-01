import { useId } from "react";
import Image from "next/image";
import { Heading } from "@/components/blocks/Heading/Heading";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { SectionWithOverlay } from "@/components/blocks/SectionWithOverlay/SectionWithOverlay";

export const HeroSection = () => {
  const sectionTitleID = useId();

  return (
    <SectionWithOverlay
      as="header"
      ariaLabeledby={sectionTitleID}
      overlayColor="secondary"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-start">
        <div className="flex flex-col gap-4 flex-1">
          <Heading as="h2" size="lg" id={sectionTitleID}>
           Temukan Mobil Impian Anda di Sini!
          </Heading>
          <p>
          Jelajahi Koleksi Mobil Berkualitas, Harga Terbaik Keunggulan dan Kenyamanan dalam Setiap Perjalanan!
          </p>
          <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start mt-2">
            <LinkAsButton href="/mobil" buttonStyle="primary">
              Mobil Tersedia
            </LinkAsButton>
            <LinkAsButton href="/kontak" buttonStyle="white">
              Kontak
            </LinkAsButton>
          </div>
        </div>
        <picture className="relative w-full flex-1">
          <Image
            src="/hero-image.webp"
            alt="white mercedes car"
            className="w-full h-auto object-contain"
            width={1920}
            height={1084}
            sizes="(max-width: 720px) 100vw, 50vw"
            priority
          />
        </picture>
      </div>
    </SectionWithOverlay>
  );
};
