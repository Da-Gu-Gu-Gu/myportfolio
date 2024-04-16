import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hein Htet Aung",
  description:
    "As a JavaScript developer with a strong passion for frontend work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
