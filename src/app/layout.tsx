import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFCtron — Event Infrastructure for Payments, Ticketing & Operations",
  description: "Modern event infrastructure combining payments, ticketing, analytics, and operations in one ecosystem. Trusted by festivals and organizers.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NFCtron — Event Infrastructure Platform",
    description: "Complete ecosystem for event organizers: payments, ticketing, data, and operations.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
