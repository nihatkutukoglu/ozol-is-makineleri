import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Özol İş Makineleri | Ankara Ostim Yedek Parça Çözümleri",
  description: "Caterpillar, Komatsu, Volvo, Hitachi, Kawasaki, JCB uyumlu orijinal ve kaliteli muadil iş makinesi yedek parçaları. Ostim Ankara'da hızlı parça tedariği.",
  keywords: [
    "iş makinesi yedek parça",
    "ankara ostim yedek parça",
    "caterpillar yedek parça",
    "komatsu yedek parça",
    "volvo yedek parça",
    "kawasaki yedek parça",
    "hitachi yedek parça",
    "jcb yedek parça",
    "doosan yedek parça",
    "ostim iş makineleri",
    "özol iş makineleri"
  ],
  authors: [{ name: "Özol İş Makineleri" }],
  openGraph: {
    title: "Özol İş Makineleri | İş Makinesi Yedek Parça Çözümleri",
    description: "Caterpillar, Komatsu, Volvo, Hitachi, Kawasaki, JCB uyumlu orijinal ve kaliteli muadil iş makinesi yedek parçaları. Ostim Ankara'da hızlı parça tedariği.",
    url: "https://ozol-is-makineleri.vercel.app",
    siteName: "Özol İş Makineleri",
    images: [
      {
        url: "/logo.png",
        width: 676,
        height: 565,
        alt: "Özol İş Makineleri Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://ozol-is-makineleri.vercel.app",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
