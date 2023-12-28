import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'

import { Inter, Pixelify_Sans } from 'next/font/google'

const pixelify_sans = Pixelify_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202020]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Header />
      </div>
    </main>
  )
}
