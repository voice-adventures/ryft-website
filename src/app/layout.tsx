import './globals.css'
import type { Metadata } from 'next'
import { Kadwa } from 'next/font/google'

const kad = Kadwa({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'RYFT: A Timely Manor',
  description: 'An audio & voice mystery adventure.',
  openGraph: {
    title: 'RYFT: A Timely Manor',
    description: 'An audio & voice mystery adventure.',
    url: 'https://ryftgame.com',
    siteName: 'RYFT',
    images: [
      {
        url: 'https://ryftgame.com/og.png',
        width: 1814,
        height: 1214,
      },
      // {
      //   url: 'https://ryftgame.com/og.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'Ryft alt',
      // },
    ],
    locale: 'en_US',
    type: 'website',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kad.className}>{children}</body>
    </html>
  )
}
