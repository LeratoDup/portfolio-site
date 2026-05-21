import Section from "@/components/Section";
import { certifications } from "@/lib/data";

export default function CertificationsPage() {
  return (
    <Section
      title="Certifications"
      //subtitle="Industry recognised certifications across Azure, automation, API testing, and testing standards."
    >
      <div className="grid2">
        {certifications.map((c) => (
          <div key={c} className="card">
            <p style={{ margin: 0, color: "var(--text-secondary)" }}>{c}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
