import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aqeel Shamsudheen - Full Stack Developer",
  description: "Full Stack Developer specializing in Flutter, React, and Node.js. Building innovative mobile and web applications.",
  keywords: ["Aqeel Shamsudheen", "Full Stack Developer", "Flutter", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Aqeel Shamsudheen" }],
  creator: "Aqeel Shamsudheen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
