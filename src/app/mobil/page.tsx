import { OfferPage } from "@/components/pages/OfferPage/OfferPage";
import offers from "@/data/offers.json";

export const metadata = {
  title: "Mobil Tersedia",
};

export default function Page() {
  return <OfferPage offers={offers} />;
}
