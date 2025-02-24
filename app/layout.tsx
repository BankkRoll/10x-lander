import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMF or Die",
  description: "PMF or Die - 90 Days to Build a $1M Business",
  metadataBase: new URL("https://pmfordie.com"),
  openGraph: {
    type: "website",
    url: "https://pmfordie.com/",
    title: "PMF or Die",
    description: "PMF or Die - 90 Days to Build a $1M Business",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PMF or Die",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PMF or Die",
    description: "PMF or Die - 90 Days to Build a $1M Business",
    images: ["/og-image.png"],
    creator: "@pmfordie",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
