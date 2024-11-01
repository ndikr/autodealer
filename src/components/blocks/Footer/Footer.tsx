import { Container } from "@/components/blocks/Container/Container";
import { memo } from "react";

export const Footer = memo(() => {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 text-white text-center py-8">
      <Container>
        <p>Merdeka Square, Jalan Lapangan Monas, Gambir, Kecamatan Gambir, Kota Jakarta Pusat <a href="https://www.google.com/maps/place/Monumen+Nasional/@-6.1745491,106.8243148,565m/data=!3m1!1e3!4m10!1m2!2m1!1smonas!3m6!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528!15sCgVtb25hc1oHIgVtb25hc5IBCG1vbnVtZW504AEA!16zL20vMDNxN2hz?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"  style="color:##4a81ff;">[Google Maps]</a></p>
        <p>AutoDealer © {actualYear}</p>
      </Container>
    </footer>
  );
});

Footer.displayName = "Footer";
