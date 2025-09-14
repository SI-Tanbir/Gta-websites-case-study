import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import CommingSoon from './components/sections/CommingSoon';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <CommingSoon />

    </main>
  )
}

export default App