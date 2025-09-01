"use client"

import { useState, useEffect } from "react"
import { Toaster } from "react-hot-toast"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
// import ResumeModal from "./components/ResumeModal"

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App bg-gray-900 text-white">
      <Toaster position="top-right" />
      <Navbar activeSection={activeSection} onResumeClick={() => setIsResumeModalOpen(true)} />
      <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      {/* <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} /> */}
    </div>
  )
}

export default App
