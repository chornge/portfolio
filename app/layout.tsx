import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PostHogProvider } from "./providers"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christian Mbaba | Senior Android Developer | Portfolio",
  description:
    "Senior Android Developer with 10+ years of experience in Kotlin, Java, Jetpack Compose, and building scalable mobile applications.",
  keywords: [
    "Android Developer",
    "Kotlin Developer",
    "Mobile Engineer",
    "Jetpack Compose",
    "Christian Mbaba",
    "Android SDK",
    "Katy",
    "Texas",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Christian Mbaba | Senior Android Developer",
    description:
      "Senior Android Developer with 10+ years of experience in Kotlin, Java, Jetpack Compose, and building scalable mobile applications.",
    type: "website",
    locale: "en_US",
    url: "https://chornge.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Mbaba | Senior Android Developer",
    description:
      "Senior Android Developer with 10+ years of experience in Kotlin, Java, Jetpack Compose, and building scalable mobile applications.",
  },
  alternates: {
    canonical: "https://chornge.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Christian Mbaba",
              url: "https://chornge.com",
              jobTitle: "Senior Android Developer",
              email: "Christianmbaba@live.com",
              telephone: "***-***-9587",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Katy",
                addressRegion: "TX",
                addressCountry: "USA",
              },
              sameAs: ["https://linkedin.com/in/christian-mbaba-6095ba174", "https://github.com/chornge"],
              knowsAbout: ["Android", "Kotlin", "Java", "Jetpack Compose", "Mobile Development"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
