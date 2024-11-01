import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Metrics } from "@/components/blocks/Metrics/Metrics";

export const MetricsSection = () => {
  const sectionTitleID = useId();

  return (
    <Section
      ariaLabelledby={sectionTitleID}
      margin="negative-top"
      padding="none"
    >
      <Container>
        <header className="sr-only">
          <Heading as="h2" size="base" hidden id={sectionTitleID}>
            Kilka naszych zalet
          </Heading>
        </header>
        <Metrics>
          <Metrics.Item bg="primary-dark">
            <Metrics.Item.Number>8</Metrics.Item.Number>
            <Metrics.Item.Description>
              Tahun Kami Memberi Kepuasan kepada Setiap Pelanggan.
            </Metrics.Item.Description>
          </Metrics.Item>
          <Metrics.Item bg="primary">
            <Metrics.Item.Number>+480</Metrics.Item.Number>
            <Metrics.Item.Description>
            Pelanggan yang Puas
            </Metrics.Item.Description>
          </Metrics.Item>
          <Metrics.Item bg="primary-light">
            <Metrics.Item.Number>24</Metrics.Item.Number>
            <Metrics.Item.Description>
            Kami Memberi Hingga 24 Bulan Garansi
            </Metrics.Item.Description>
          </Metrics.Item>
        </Metrics>
      </Container>
    </Section>
  );
};
