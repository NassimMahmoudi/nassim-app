import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nassim Mahmoudi | Software Engineer",
  description: "Senior Software Engineer Portfolio & AI Chatbot",
};

import ChatbotBubble from "@/components/ChatbotBubble";

import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} dark antialiased`}>
      <body className="bg-background text-foreground selection:bg-terminal-blue/30 selection:text-terminal-blue">
        <LanguageProvider>
          <div className="crt-overlay opacity-20" />
          <main className="relative min-h-screen flex flex-col items-center">
            {children}
            <ChatbotBubble />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
