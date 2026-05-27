import Header from './components/Header'
import Hero from './components/Hero'
import CoursesSection from './components/CoursesSection'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
        <ProductShowcase />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
