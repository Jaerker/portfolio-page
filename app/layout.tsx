
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import AnimationLayout from './components/animationLayout'

import BackgroundImage from './components/backgroundImage';

const mainFont = Chakra_Petch({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Johan Jakberger',
  description: 'Front-end developer Johan Jakbergers resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <div className="wrapper">
          <AnimationLayout>
            {children}
          </AnimationLayout>
        </div>
      </body>
    </html>
  )
}
