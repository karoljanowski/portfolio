import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Karol Janowski | Portfolio",
  description: "Check out my portfolio, projects and contact me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
