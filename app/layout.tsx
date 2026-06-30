import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NimbusLink — Fast, Reliable & High-Speed Internet Solutions",
  description:
    "NimbusLink provides high-speed fiber broadband, home internet, business internet and telecom infrastructure in Amritsar, Punjab.",
  openGraph: {
    title: "NimbusLink — High-Speed Fiber Internet",
    description:
      "We design, build and operate broadband and fiber networks for homes, businesses and communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
