import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title:
    "Inci Masszázs - Professzionális Masszázsterápia Budapest | Relaxáció & Megújulás",
  description:
    "Professzionális masszázs szolgáltatások Budapesten. Svéd masszázs, aromaterápia, mélyszöveti kezelések. Diplomás masszőr, személyre szabott kezelések. Foglaljon időpontot még ma!",
  keywords:
    "masszázs Budapest, masszőr, svéd masszázs, aromaterápia, mélyszöveti masszázs, relaxációs masszázs, nyak váll masszázs, wellness, stressz oldás, fájdalom csökkentés, diplomás masszőr, Anna masszázs",
  authors: [{ name: "Anna Masszázs" }],
  creator: "Inci Masszázs",
  publisher: "Inci Masszázs",
  robots: "index, follow",
  language: "hu",
  category: "Health & Wellness",
  classification: "Massage Therapy",

  // Open Graph metaadatok (Facebook, LinkedIn, stb.)
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://massage-blush.vercel.app",
    siteName: "Anna Masszázs",
    title: "Anna Masszázs - Professzionális Masszázsterápia Budapest",
    description:
      "Professzionális masszázs szolgáltatások Budapesten. Diplomás masszőr, személyre szabott kezelések. Svéd masszázs, aromaterápia, mélyszöveti kezelések.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Inci Masszázs - Professzionális masszázsterápia Budapest",
      },
    ],
  },

  // Twitter Card metaadatok
  twitter: {
    card: "summary_large_image",
    site: "@anna_masszazs",
    creator: "@anna_masszazs",
    title: "Inci Masszázs - Professzionális Masszázsterápia Budapest",
    description:
      "Professzionális masszázs szolgáltatások Budapesten. Diplomás masszőr, személyre szabott kezelések.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },

  // Viewport és technikai metaadatok
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#f43f5e",
  colorScheme: "light",

  // Manifest és ikonok
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#f43f5e" },
    ],
  },

  // Egyéb metaadatok
  alternates: {
    canonical: "https://massage-blush.vercel.app",
    languages: {
      "hu-HU": "https://massage-blush.vercel.app",
    },
  },

  // Verification metaadatok
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <head>
        {/* Strukturált adatok (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://massage-blush.vercel.app",
              name: "Inci Masszázs",
              alternateName: "Inci Masszázs Stúdió",
              description:
                "Professzionális masszázs szolgáltatások Budapesten. Diplomás masszőr, személyre szabott kezelések.",
              url: "https://massage-blush.vercel.app",
              telephone: "+36301234567",
              email: "anna@masszazs.hu",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Példa utca 12.",
                addressLocality: "Budapest",
                postalCode: "1051",
                addressCountry: "HU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "47.4979",
                longitude: "19.0402",
              },
              openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-15:00"],
              priceRange: "8000-25000 HUF",
              paymentAccepted: "Cash, Credit Card",
              currenciesAccepted: "HUF",
              serviceArea: {
                "@type": "City",
                name: "Budapest",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Masszázs szolgáltatások",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Svéd masszázs",
                      description:
                        "Klasszikus teljes test masszázs a feszültség oldására",
                    },
                    price: "12000",
                    priceCurrency: "HUF",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aromaterápiás masszázs",
                      description:
                        "Illóolajokkal kiegészített relaxációs masszázs",
                    },
                    price: "15000",
                    priceCurrency: "HUF",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mélyszöveti masszázs",
                      description:
                        "Intenzív kezelés krónikus feszültségek oldására",
                    },
                    price: "14000",
                    priceCurrency: "HUF",
                  },
                ],
              },
              founder: {
                "@type": "Person",
                name: "Anna",
                jobTitle: "Diplomás masszőr",
                description: "5+ év tapasztalattal rendelkező diplomás masszőr",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              image: [
                "https://anna-masszazs.hu/placeholder.svg?height=630&width=1200",
              ],
              sameAs: [
                "https://www.facebook.com/anna.masszazs",
                "https://www.instagram.com/anna.masszazs",
              ],
            }),
          }}
        />

        {/* További SEO metaadatok */}
        <meta name="geo.region" content="HU-BU" />
        <meta name="geo.placename" content="Budapest" />
        <meta name="geo.position" content="47.4979;19.0402" />
        <meta name="ICBM" content="47.4979, 19.0402" />

        {/* Hreflang alternatívák */}
        <link rel="alternate" hrefLang="hu" href="https://anna-masszazs.hu" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://anna-masszazs.hu"
        />

        {/* Preconnect a teljesítményért */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Preload kritikus erőforrások */}
        <link
          rel="preload"
          href="/fonts/poppins-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className}>
        {children}

        {/* Google Analytics (példa) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
