"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-semibold text-foreground transition-colors"
          >
            Yahya Alaa
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("who-this-is-for")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full cursor-pointer"
            >
              Who This Is For
            </button>
            <button
              onClick={() => scrollToSection("meet-your-mentor")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full cursor-pointer"
            >
              Meet Your Mentor
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Services
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("who-this-is-for")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
            >
              Who This Is For
            </button>
            <button
              onClick={() => scrollToSection("meet-your-mentor")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
            >
              Meet Your Mentor
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
            >
              Services
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
