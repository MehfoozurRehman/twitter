import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import AppShell from "@/components/AppShell";
import GoogleAuthProvider from "@/context/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X (Twitter)",
  description: "Twitter / X Clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-black text-white selection:bg-sky-500 selection:text-white">
        <GoogleAuthProvider>
          <AppShell>{children}</AppShell>
        </GoogleAuthProvider>
      </body>
    </html>
  );
}
