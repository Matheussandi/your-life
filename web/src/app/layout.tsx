import { ReactNode } from 'react'
import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata = {
  title: '+Sua Vida',
  description: 'Gerenciamento de consultas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>{children}</body>
    </html>
  )
}
