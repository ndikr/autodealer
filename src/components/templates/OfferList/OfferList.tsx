import Link from "next/link";
import { Offer } from "@/components/blocks/Offer/Offer";

type Props = {
  offers: {
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

export const OfferList = ({ offers }: Props) => (
  <>
    {offers.map((offer) => (
      <Offer key={offer.title}>
        {offer.invoice && <Offer.Invoice />}
        <Link href={`/mobil/${offer.id}`}>
          <Offer.Image image={offer.gallery[0]} />
        </Link>
        <Offer.Header href={`/mobil/${offer.id}`} title={offer.title} />
        {offer.features.length > 0 && (
          <Offer.FeaturesList>
            {offer.features.map((feature) => (
              <Offer.FeaturesList.Item key={feature.label}>
                {feature.value}
              </Offer.FeaturesList.Item>
            ))}
          </Offer.FeaturesList>
        )}
        <Offer.Footer>
          <Offer.Footer.PriceTag price={offer.price} type="." />
          <Offer.Footer.Link href={`/mobil/${offer.id}`} />
        </Offer.Footer>
      </Offer>
    ))}
  </>
);
