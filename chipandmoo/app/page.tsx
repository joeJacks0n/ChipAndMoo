import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <Hero />
      <Footer />
    </main>
  )
}