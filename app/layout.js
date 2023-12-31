import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Introduction to Galerie',
  description: 'Album Photo',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>          
        {children}
      </body>
    </html>
  )
}
