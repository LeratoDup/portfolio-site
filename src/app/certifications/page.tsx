import Section from "@/components/Section";
import { certifications, Certification } from "@/lib/data";

export default function CertificationsPage() {
  return (
    <Section title="Certifications">
      <div className="grid2">
        {certifications.map((c: Certification) => (
          <div
            key={c.name}
            className="card"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <p style={{ margin: 0, color: "var(--text-secondary)" }}>{c.name}</p>
            {c.attachment && (
              <a
                href={c.attachment}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "1rem",
                  fontSize: "0.75rem",
                  color: "var(--bg)",
                  backgroundColor: "var(--accent)",
                  borderRadius: "4px",
                  padding: "3px 10px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  fontWeight: 600,
                }}
              
              >
                View ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}