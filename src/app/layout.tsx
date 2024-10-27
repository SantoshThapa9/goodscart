import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoodsCart",
  description: "E-commerce Website created by Santosh",
};
const kanit = localFont({
  src: "./fonts/Kanit/Kanit-Regular.ttf",
  variable: "--kanit",
  display: "swap",
  weight: "400",
  style: "normal",
});

const lilitaOne = localFont({
  src: "./fonts/Lilita_One/LilitaOne-Regular.ttf",
  variable: "--lilitaone",
  display: "swap",
  weight: "400",
  style: "normal",
});

const oxanium = localFont({
  src: "./fonts/Oxanium/static/Oxanium-Regular.ttf",
  variable: "--oxanium",
  display: "swap",
  weight: "400",
  style: "normal",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon.png" />
      </head>
      <body
        className={`${kanit.variable} ${lilitaOne.variable} ${oxanium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
