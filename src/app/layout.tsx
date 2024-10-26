import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import Provider from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "TONwager",
  description: "Innovative TON/USDT event betting platform",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full flex antialiased bg-[#222B45]`}
      >
        <div className="h-full overflow-y-scroll">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
