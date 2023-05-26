import './globals.css'
import { Poppins,Slabo_13px,Dancing_Script } from 'next/font/google'

const poppins = Poppins({
  weight: ['100','200','300', '500','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--primary'
})
const slabo_13px = Slabo_13px({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--secundary',
})
const dancing_Script = Dancing_Script({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
  variable: '--terciary',
})
export const metadata = {
  title: 'IarlyPhoto',
  description: 'Portfólio de fotografia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${slabo_13px.variable} ${dancing_Script.variable}`}>{children}</body>
    </html>
  )
}
