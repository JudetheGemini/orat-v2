import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
import "./globals.css"

export const metadata: Metadata = {
  title: "Ottawa Responsible AI Talks",
  description: "Join us for a series of engaging talks on responsible AI practices in Ottawa.",
  generator: "Next.js",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  scroll-behavior: smooth;
  scroll-speed: 0.8s;
}
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
