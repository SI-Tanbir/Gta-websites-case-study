import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import CommingSoon from './components/sections/CommingSoon';
import FirstVideo from './components/firstVideo/FirstVideo';
import JasonLife from './components/sections/JasonLife';
import SecondVideo from './components/secondVideo/SecondVideo';



gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <CommingSoon />
      <FirstVideo />
      <JasonLife /> 
      {/* lucia life second vides */}
      <SecondVideo />

    </main>
  )
}

export default App