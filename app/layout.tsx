import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://wismartech.com";

export const metadata: Metadata = {
  title: {
    default: "Wismar Technology - Learn to Code & Grow Tech Skills",
    template: "%s | Wismar Technology"
  },
  description: "Your one stop to learn and grow tech skills. Master Full-Stack, Backend, Frontend, UI/UX, and AI Engineering through project-based learning, bootcamps, and mentorship.",
  keywords: ["coding bootcamp", "learn to code", "tech skills", "web development", "software engineering", "full-stack", "UI/UX design", "AI engineering", "mentorship", "online learning"],
  authors: [{ name: "Wismar Technology" }],
  creator: "Wismar Technology",
  publisher: "Wismar Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Wismar Technology",
    title: "Wismar Technology - Learn to Code & Grow Tech Skills",
    description: "Your one stop to learn and grow tech skills. Master engineering through project-based learning, bootcamps, and mentorship.",
    images: [
      {
        url: "/wizmar_logo.PNG",
        width: 1200,
        height: 630,
        alt: "Wismar Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wismar Technology - Learn to Code & Grow Tech Skills",
    description: "Your one stop to learn and grow tech skills. Master engineering through project-based learning, bootcamps, and mentorship.",
    images: ["/wizmar_logo.PNG"],
  },
  icons: {
    icon: "./wizmar_logo.PNG",
    apple: "/wizmar_logo.PNG",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KBCFWZTD');
            `,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col overflow-x-hidden">
           <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-KBCFWZTD"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>
        {children}</body>
    </html>
  );
}
