"use client"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import SideProjects from "@/components/side-projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Analytics, type Section } from "@/lib/analytics"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const startTime = useRef(Date.now())
  const trackedSections = useRef<Set<Section>>(new Set())

  // Dark mode initialization
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode")
    const isDarkMode = storedMode !== null ? storedMode === "true" : false
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Section visibility tracking
  useEffect(() => {
    const sectionIds: { id: string; section: Section }[] = [
      { id: "main-content", section: "hero" },
      { id: "about", section: "about" },
      { id: "skills", section: "skills" },
      { id: "experience", section: "experience" },
      { id: "projects", section: "projects" },
      { id: "contact", section: "contact" },
      { id: "footer", section: "footer" },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionConfig = sectionIds.find((s) => s.id === entry.target.id)
            if (sectionConfig && !trackedSections.current.has(sectionConfig.section)) {
              Analytics.sectionViewed(sectionConfig.section)
              trackedSections.current.add(sectionConfig.section)
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    sectionIds.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Time on page tracking
  useEffect(() => {
    const handleUnload = () => {
      const durationSeconds = Math.round((Date.now() - startTime.current) / 1000)
      Analytics.timeOnPage(durationSeconds)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const durationSeconds = Math.round((Date.now() - startTime.current) / 1000)
        Analytics.timeOnPage(durationSeconds)
      }
    }

    window.addEventListener("beforeunload", handleUnload)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      window.removeEventListener("beforeunload", handleUnload)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    Analytics.themeToggled(newDarkMode ? "dark" : "light")
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SideProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
