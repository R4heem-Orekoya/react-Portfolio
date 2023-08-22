import React from "react"
import Header from "./Components/header"
import Hero from "./Components/hero"
import About from "./Components/about"
import Projects from "./Components/projects"
import Contact from "./Components/Contact"
import Footer from "./Components/footer"
import ScrollToTop from "./Components/scrollToTopBtn"

export default function App() {
  return(
    <div className="bg-black w-full min-h-screen font-poppins">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

