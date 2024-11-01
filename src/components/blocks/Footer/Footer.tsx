import { Container } from "@/components/blocks/Container/Container";
import { memo } from "react";

export const Footer = memo(() => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white text-center py-8">
      <Container>
        <p>Merdeka Square, Jalan Lapangan Monas, Gambir, Kecamatan Gambir, Kota Jakarta Pusat <a href="https://maps.app.goo.gl/NDPvPsYfrRjvyaQF9"  style="color:#4a81ff">Google Maps</a></p>
        <p>AutoDealer © {actualYear}</p>
      </Container>
    </footer>
  );
});

Footer.displayName = "Footer";
