import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/LayoutTransmission/Preloader";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://karoljanowski.vercel.app"),
  title: "Karol Janowski | Portfolio",
  description: "Check out my portfolio, projects and contact me!",
  openGraph: {
    title: "Karol Janowski | Portfolio",
    description: "Check out my portfolio, projects and contact me!",
    url: "https://karoljanowski.vercel.app",
    siteName: "Karol Janowski | Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/cursor.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${manrope.className} bg-black text-gray-300`}>
        <Preloader>
          {children}
        </Preloader>
        <Analytics />
      </body>
    </html>
  );
}
