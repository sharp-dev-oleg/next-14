import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";
import './globals.css'
import Navbar from "@/app/navbar";
import {cookies} from "next/headers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = cookies().get('token')?.value ?? ''
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialToken={token}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
