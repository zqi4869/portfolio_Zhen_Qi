import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/contexts/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "程序员作品集 | 全栈开发工程师",
  description: "专业的全栈开发工程师作品集，展示技能、项目和经验。专注于现代Web技术栈。",
  keywords: ["程序员", "全栈开发", "作品集", "Web开发", "React", "Next.js"],
  authors: [{ name: "程序员作品集" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <ThemeProvider defaultTheme="dark">
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
