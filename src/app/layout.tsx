import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soufiane Tajri | Game Designer & Developer",
  description: "Game designer & developer student focused on building gameplay systems and prototypes. Explore my projects, skills, and passion for crafting immersive gaming experiences with Unity and Godot.",
  keywords: ["game designer", "game developer", "portfolio", "Unity", "Godot", "gameplay systems", "ENSAD"],
  authors: [{ name: "Soufiane Tajri" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased bg-[#0d0d1a] text-[#e8e6e3] overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
