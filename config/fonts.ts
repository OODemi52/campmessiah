import {
  Be_Vietnam_Pro as FontVietnam,
  Bebas_Neue as FontBebas,
  Bungee_Inline as FontBungee,
  Fira_Code as FontMono,
} from "next/font/google";

export const fontVietnam = FontVietnam({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const fontBebas = FontBebas({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const fontBungee = FontBungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontSans = fontVietnam;
