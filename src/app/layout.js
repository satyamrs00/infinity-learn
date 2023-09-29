import './globals.css'
import { Inter } from 'next/font/google'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Infinity Learn',
  description: 'Infinity Learn is a platform for students to learn and grow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeRegistry>
        {children}
      </ThemeRegistry>
      </body>
    </html>
  )
}
