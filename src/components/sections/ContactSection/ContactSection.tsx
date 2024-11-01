import { useId } from "react";
import { Container } from "@/components/blocks/Container/Container";
import { Section } from "@/components/blocks/Section/Section";
import { Heading } from "@/components/blocks/Heading/Heading";
import { Metrics } from "@/components/blocks/Metrics/Metrics";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";

export const ContactSection = () => {
  const sectionTitleID = useId();

  return (
    <Section ariaLabelledby={sectionTitleID}>
      <Container>
        <header className="sr-only">
          <Heading as="h2" size="base" hidden id={sectionTitleID}>
            Dane kontaktowe
          </Heading>
        </header>
        <Metrics>
          <Metrics.Item bg="primary-dark">
            <Metrics.Item.Number>
              <FaPhoneAlt />
            </Metrics.Item.Number>
            <Metrics.Item.Description>
              <Metrics.Link href="https://api.whatsapp.com/send?phone=62882005295050&text=Assalamualaikum%20mas%20Ulil,%20Saya%20berminat%20menggunakan%20Jasa%20%20Pembuatan%20Website,%20bisa%20tolong%20dibantu?">
              +62 882-0052-95050
              </Metrics.Link>
            </Metrics.Item.Description>
          </Metrics.Item>
          <Metrics.Item bg="primary">
            <Metrics.Item.Number>
              <FaMailBulk />
            </Metrics.Item.Number>
            <Metrics.Item.Description>
              <Metrics.Link href="mailto:mail@yoursuperbcompany.com">
                mail@yoursuperbcompany.com
              </Metrics.Link>
            </Metrics.Item.Description>
          </Metrics.Item>
        </Metrics>
      </Container>
    </Section>
  );
};
