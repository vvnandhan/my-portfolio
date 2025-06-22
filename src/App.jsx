import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </main>
  )
}

export default App;
