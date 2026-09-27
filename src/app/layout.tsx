import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profileData } from "@/data/profile";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/siteConfig";

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profileData.name} | ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description:
    "Personal engineering portfolio of Abednego Osoro Nyabicha. Systems at the intersection of cybersecurity, software engineering, DevSecOps, and data/AI.",
  keywords: [
    "Abednego Osoro Nyabicha",
    "Cybersecurity Engineer",
    "Software Engineer",
    "Cloud Engineer",
    "DevSecOps",
    "SBOM Visibility",
    "Software Supply Chain Security",
    "ResearchPlugHub",
    "Python",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteUrl,
    title: `${profileData.name} | ${profileData.role}`,
    description: profileData.headline,
    siteName: `${profileData.name} Engineering Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${profileData.role}`,
    description: profileData.headline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    description: profileData.headline,
    url: siteUrl,
    knowsAbout: profileData.credibilityStrip,
    worksFor: {
      "@type": "Organization",
      name: "ResearchPlugHub",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground bg-tech-grid antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <div className="relative min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
