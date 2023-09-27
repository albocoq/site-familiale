import Hero from '../components/Hero/Hero'
import { getServerSession } from 'next-auth'


export default async function Home() {
  const session = await getServerSession()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Hero />
    </main>
  )
}
