import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-12 space-y-24">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App