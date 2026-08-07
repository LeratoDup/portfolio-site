import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Lerato Du Plessis | Quality Engineer",
  description: "Quality Engineer, Automation, Playwright, API, CI/CD, Azure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before first paint so a returning visitor who chose light
            mode doesn't see a flash of the default dark theme. Reads
            localStorage directly (not via React) since this has to
            execute ahead of hydration. suppressHydrationWarning on <html>
            above stops React from complaining that the attribute it set
            differs from what the server rendered.

            Uses next/script with strategy="beforeInteractive" rather than
            a raw <script> tag — Next's App Router hydrates the whole
            document including <head>, and a plain <script> JSX element
            there gets pulled into React's own reconciliation, which
            doesn't support executing script tags it manages ("Encountered
            a script tag while rendering React component"). Chromium seems
            to shrug that off, but it broke hydration for the rest of the
            page on Safari — nothing in the nav responded to taps.
            next/script sidesteps this by injecting the script through
            Next's own script-loading mechanism instead. */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();",
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <NavBar />
        <main className="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
