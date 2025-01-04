import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Angela Gitonga - Data Analytics Specialist",
  description: "Portfolio of Angela Gitonga, a Data Analytics Specialist based in Nairobi, Kenya",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

