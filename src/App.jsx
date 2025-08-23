import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  return (
    <main>
     <NavBar/>
     <HeroSection/>
     <MessageSection/>
     <div className="h-dvh border-red border-2 bg-white"></div>
    </main>
  )
}

export default App
