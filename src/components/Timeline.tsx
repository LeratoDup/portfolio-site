type TimelineEntry = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {items.map((e, idx) => (
        <div className="timelineItem" key={`${e.company}-${e.role}`}>
          <span className={`timelineDot ${idx === 0 ? "" : "past"}`} />
          <p className="timelineDate">{e.dates}</p>
          <div className="card">
            <h3 className="h2" style={{ margin: 0, fontSize: "1.1rem" }}>
              {e.role}
            </h3>
            <p className="muted" style={{ margin: "4px 0 0", fontWeight: 600, color: "var(--text-secondary)" }}>
              {e.company}
            </p>
            <ul className="list" style={{ marginTop: 14 }}>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
