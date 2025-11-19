import Navbar  from './sections/Navbar'
import Hero  from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Tech from './sections/Tech'
import Education from './sections/Education'

const App = () => {
  return (
    <main className='max-w-9xl mx-auto'>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Education />

      <Projects />

      <Tech />

      <Contact />

      <Footer />
    </main>
  )
}

export default App