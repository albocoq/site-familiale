import '../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Galerie',
    description: 'Galerie',
}
export default async function Layout({ children }) {
    
    return (
        <>{children}</>
    )
}