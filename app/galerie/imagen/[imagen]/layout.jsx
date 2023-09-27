import '../../../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default async function Layout({ children}) {

    return (
        <html lang="en" className="dark">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
export const metadata = {
    title: 'Galerie',
    description: 'Galerie',
}