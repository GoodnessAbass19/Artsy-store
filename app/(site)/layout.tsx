import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artsy Studio",
  description: "Created by Goodness.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className="overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}