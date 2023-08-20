import React from "react"
import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Projects from "./projects"
import Contact from "./Contact"

function App() {
  return(
    <div className="bg-black w-full min-h-screen font-poppins">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
