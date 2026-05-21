import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
