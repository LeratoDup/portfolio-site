import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="Professional Journey"
      title={<>Career <span className="gradientText">Timeline</span></>}
      subtitle="A record of professional growth, technical delivery, and commitment to software quality."
    >
      <div style={{ marginTop: 32 }}>
        <Timeline items={experience} />
      </div>
    </Section>
  );
}
