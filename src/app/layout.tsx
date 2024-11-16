import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "Karol Janowski | Portfolio",
  description: "Check out my portfolio, projects and contact me!",
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
      <body className={`${manrope.className} bg-black text-gray-300`}>{children}</body>
    </html>
  );
}
