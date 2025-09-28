import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/Theme/theme.provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Berecha Tech | Inovação em Soluções Digitais",
  description:
    "A Berecha Tech transforma ideias em soluções digitais inteligentes. Desenvolvimento web, mobile, UI/UX design e consultoria tecnológica para impulsionar o seu negócio.",
  keywords: [
    "Berecha Tech",
    "tecnologia",
    "inovação digital",
    "desenvolvimento web",
    "desenvolvimento mobile",
    "UI UX design",
    "consultoria tecnológica",
    "soluções digitais",
    "Angola",
  ],
  authors: [{ name: "Berecha Tech" }],
  openGraph: {
    title: "Berecha Tech | Inovação em Soluções Digitais",
    description:
      "Transformando tecnologia em soluções digitais seguras, modernas e eficientes para empresas e pessoas.",
    url: "https://berechatech.com",
    siteName: "Berecha Tech",
    images: [
      {
        url: "/image.jpeg", 
        width: 1200,
        height: 630,
        alt: "Berecha Tech - Soluções Digitais",
      },
    ],
    locale: "pt_AO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berecha Tech | Inovação em Soluções Digitais",
    description:
      "Desenvolvimento web, mobile, UI/UX design e consultoria tecnológica em Angola.",
    images: ["/image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="ligth"
          enableSystem
          disableTransitionOnChange
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
