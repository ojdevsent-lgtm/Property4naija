import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Property4Naija | Find Property Worth Calling Home",
  description: "Discover homes, rentals, sales and property opportunities with Property4Naija.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
