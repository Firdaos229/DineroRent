import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";
import "swiper/css/bundle";
import {
  DM_Sans,
  Playfair_Display,
  Amita,
  Onest,
  Outfit,
  Parisienne,
} from "next/font/google";
import ContextProvider from "@/components/provider/context-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--tp-ff-dm",
  weight: ["300", "400", "500", "600", "700", "800"],
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--tp-ff-playfair",
  weight: ["400", "500", "600", "700", "800"],
});
const amita = Amita({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--tp-ff-amita",
});
const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-onest",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-outfit",
});
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--tp-ff-parisienne",
});

export const metadata: Metadata = {
  title: "DineroRent",
  description:
    "DineroRent is the ultimate solution for showcasing your Shortlets, Apartments, Cars, or Boats in a modern and visually stunning way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} ${amita.variable} ${onest.variable} ${outfit.variable} ${parisienne.variable}`}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
