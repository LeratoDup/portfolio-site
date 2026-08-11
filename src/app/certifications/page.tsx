import Section from "@/components/Section";
import { certifications, Certification } from "@/lib/data";

function certIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("azure")) return "fa-solid fa-cloud";
  if (n.includes("istqb")) return "fa-solid fa-shield-halved";
  if (n.includes("leapwork") || n.includes("accelq"))
    return "fa-solid fa-robot";
  if (n.includes("salesforce")) return "fa-solid fa-code";
  if (n.includes("postman")) return "fa-solid fa-satellite-dish";
  if (n.includes("sigma")) return "fa-solid fa-chart-line";
  return "fa-solid fa-certificate";
}

export default function CertificationsPage() {
  return (
    <Section
      eyebrow="Professional Validation"
      title={
        <>
          Certifications <span className="gradientText">&amp; Credentials</span>
        </>
      }
      subtitle="Professional certifications and technical training completed to support quality engineering, automation, and the path toward cloud infrastructure work."
    >
      <div className="grid3" style={{ marginTop: 24 }}>
        {certifications.map((c: Certification) => (
          <div
            key={c.name}
            className="card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ flex: 1 }}>
              <div className="certRow">
                <div className="certIcon">
                  <i className={certIcon(c.name)}></i>
                </div>
                <span
                  className={`badge ${c.status === "verified" ? "badgeVerified" : "badgeProgress"}`}
                >
                  {c.status === "verified" ? "Verified" : "In Progress"}
                </span>
              </div>

              <h3
                className="h2"
                style={{ fontSize: "1rem", marginTop: 14, marginBottom: 2 }}
              >
                {c.name}
              </h3>
              {c.issuer && (
                <p className="muted" style={{ margin: 0 }}>
                  {c.issuer}
                </p>
              )}

              {(c.date || c.targetDate) && (
                <p className="muted" style={{ marginTop: 12 }}>
                  <i className="fa-regular fa-calendar iconGap"></i>
                  {c.status === "verified"
                    ? `Completed: ${c.date}`
                    : c.targetDate}
                </p>
              )}
              {c.credentialId && (
                <p className="muted" style={{ marginTop: 4 }}>
                  <i className="fa-solid fa-link iconGap"></i>
                  ID: {c.credentialId}
                </p>
              )}
            </div>

            {c.attachment ? (
              <a
                href={c.attachment}
                target="_blank"
                rel="noopener noreferrer"
                className="btnPrimary"
                style={{ marginTop: 16, width: "fit-content" }}
              >
                View credential
              </a>
            ) : (
              <div
                className="btnGhost"
                style={{
                  marginTop: 16,
                  width: "fit-content",
                  opacity: 0.6,
                  cursor: "default",
                }}
              >
                Awaiting completion
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
