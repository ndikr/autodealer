import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { GridList } from "@/components/blocks/GridList/GridList";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Section } from "@/components/blocks/Section/Section";
import { Feature } from "@/components/blocks/Feature/Feature";
import {
  FaCar,
  FaFlag,
  FaShieldAlt,
  FaTachometerAlt,
  FaUser,
  FaWrench,
} from "react-icons/fa";

export const FeaturesSection = () => {
  const sectionTitleID = useId();
  return (
    <Section ariaLabelledby={sectionTitleID}>
      <Container>
        <header className="text-center">
          <Heading as="h2" size="md" id={sectionTitleID}>
          Mengapa Memilih AutoDealer
          </Heading>
        </header>
        <GridList margin="top">
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaTachometerAlt />
              </Feature.Icon>
              <Feature.Title>Kilometer yang Terverifikasi</Feature.Title>
            </Feature.Header>
            <Feature.Description>
            Kami menyediakan kendaraan dengan catatan kilometer yang jelas dan terjamin. Setiap mobil telah melalui proses verifikasi untuk memastikan bahwa informasi kilometer yang diberikan akurat.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaUser />
              </Feature.Icon>
              <Feature.Title>Pemilik Pertama</Feature.Title>
            </Feature.Header>
            <Feature.Description>
            Sebagian besar mobil yang ditawarkan adalah satu pemilik sejak baru, terawat dengan baik, dan memiliki riwayat servis yang jelas.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaFlag />
              </Feature.Icon>
              <Feature.Title>Asal yang Jelas</Feature.Title>
            </Feature.Header>
            <Feature.Description>
            Kendaraan kami berasal dari dealer resmi dan showroom terverifikasi. Setiap mobil harus memenuhi standar ketat sebelum ditawarkan dalam koleksi kami.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaWrench />
              </Feature.Icon>
              <Feature.Title>Buku Servis</Feature.Title>
            </Feature.Header>
            <Feature.Description>
            Kami menjamin riwayat yang jelas dan transparan untuk setiap mobil yang kami jual, dengan semua kendaraan dilengkapi buku servis asli.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaShieldAlt />
              </Feature.Icon>
              <Feature.Title>Garansi Tambahan</Feature.Title>
            </Feature.Header>
            <Feature.Description>
            Untuk memenuhi harapan pelanggan, kami menawarkan opsi pembelian garansi tambahan dengan periode dari 1 hingga 24 bulan. Informasi lebih lanjut melalui Whatsapp.
            </Feature.Description>
          </Feature>
          <Feature>
            <Feature.Header>
              <Feature.Icon>
                <FaCar />
              </Feature.Icon>
              <Feature.Title>Kualitas Terjamin</Feature.Title>
            </Feature.Header>
            <Feature.Description>
            Kendaraan diperiksa untuk mendeteksi kemungkinan kerusakan atau cacat, sehingga memenuhi standar kualitas, kami hanya menjual mobil yang telah terverifikasi!
            </Feature.Description>
          </Feature>
        </GridList>
      </Container>
    </Section>
  );
};
