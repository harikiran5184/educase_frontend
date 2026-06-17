import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import MuiProvider from "@/src/providers/ThemeRegistry";

import "@/styles/globals.scss";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "PopX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}