import { Container } from "@/components/blocks/Container/Container";
import { Heading } from "@/components/blocks/Heading/Heading";
import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { Main } from "@/components/blocks/Main/Main";
import { Slider } from "@/components/blocks/Slider/Slider";
import { BannerSection } from "@/components/sections/BannerSection/BannerSection";
import { RecommendedOffersSection } from "@/components/sections/RecommendedOffersSection/RecommendedOffersSection";
import { formatCurrency } from "@/utils/formatCurrency";
import { twMerge } from "tailwind-merge";

type Props = {
  offer: {
    id: string;
    sold: boolean;
    invoice: boolean;
    title: string;
    features: {
      label: string;
      value: string;
    }[];
    price: number;
    gallery: {
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  recommendedOffers: {
    id: string;
    sold: boolean;
    invoice: boolean;
    title: string;
    features: {
      label: string;
      value: string;
    }[];
    price: number;
    gallery: {
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
  }[];
};

export const SinglePage = ({ offer, recommendedOffers }: Props) => {
  return (
    <>
      <Main>
        <Container>
          <article className="grid grid-cols-12 gap-3 md:gap-6 py-8">
            <div className="col-span-12">
              <Slider images={offer.gallery} />
            </div>
            <div className="col-span-12 md:col-span-7 flex flex-col gap-3 md:gap-6 order-2 md:order-1">
              <div className="p-8 bg-white shadow prose max-w-none flex flex-col gap-4">
                <header aria-labelledby="title">
                  <Heading as="h1" size="base" id="title">
                    {offer.title}
                  </Heading>
                </header>
                <section aria-labelledby="parametry">
                  <header className="sr-only">
                    <Heading as="h2" size="base" id="parametry" hidden>
                      Parametry
                    </Heading>
                  </header>
                  <table className="m-0">
                    <thead className="sr-only">
                      <tr>
                        <th>parametr</th>
                        <th>wartośc</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offer.features.map((feature) => (
                        <tr key={feature.label} className="pb-10">
                          <td>{feature.label}</td>
                          <td>{feature.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-6 order-1 md:order-2">
              <section
                className="p-8 bg-primary-dark text-white sticky top-6 flex flex-col gap-8 shadow"
                aria-labelledby="cena-i-kontakt"
              >
                <header className="sr-only">
                  <Heading as="h2" size="base" id="cena-i-kontakt" hidden>
                    Cena i kontakt
                  </Heading>
                </header>
                <div
                  className={twMerge(
                    "divide-y-2 [&>p]:py-4 [&>p:first-child]:pt-0 [&>p:last-child]:pb-0",
                    !offer.invoice && "pb-4 border-b-2",
                  )}
                >
                  {offer.invoice ? (
                    <>
                      <p className="flex flex-row justify-between">
                        Harga:{" "}
                        <span className="font-bold">
                          {formatCurrency(offer.price)}
                        </span>
                      </p>
                    </>
                  ) : (
                    <p className="flex flex-row justify-between">
                      Cena:
                      <span className="font-bold">
                        {formatCurrency(offer.price)}
                      </span>
                    </p>
                  )}
                </div>
                <div className="flex flex-col flex-wrap flex-wrap justify-center gap-2">
                  <LinkAsButton href="https://api.whatsapp.com/send?phone=62882005295050&text=Assalamualaikum%20mas%20Ulil,%20Saya%20berminat%20menggunakan%20Jasa%20%20Pembuatan%20Website,%20bisa%20tolong%20dibantu?" buttonStyle="white">
                    <span className="font-bold">Whatsapp:</span>+62 882-0052-95050
                  </LinkAsButton>
                </div>
              </section>
            </div>
          </article>
        </Container>
        <RecommendedOffersSection
          offers={recommendedOffers}
          title="Zobacz również inne modele"
          cta={false}
        />
        <BannerSection
          title="Temukan mobil impian Anda hari ini!"
          button={{ label: "Lihat Daftar Mobil", href: "/mobil" }}
        />
      </Main>
    </>
  );
};
