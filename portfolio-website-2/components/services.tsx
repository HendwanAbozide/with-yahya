"use client"

import { useState, useEffect, useRef } from "react"
import { Code2, FileText, Briefcase, Target, MessageSquare, LucideIcon, ArrowUpRight } from "lucide-react"
import servicesData from "@/data/services.json"
import { ScrollReveal } from "@/components/scroll-reveal"

// Map icon string names to actual Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  Target,
  FileText,
  Briefcase,
  Code2,
  MessageSquare,
}

// Transform services data to use actual icon components
const services = servicesData.map((service) => ({
  ...service,
  icon: iconMap[service.icon],
}))

export function Services() {
  const [showPopup, setShowPopup] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const hasShownRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownRef.current) {
          hasShownRef.current = true
          setShowPopup(true)
          // Auto-dismiss after 3 seconds
          setTimeout(() => setShowPopup(false), 3000)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 bg-secondary/30 relative">
      {/* Popup Message */}
      {/* {showPopup && (
        <div className="fixed bottom-8 right-8 z-50 animate-popup">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-2xl shadow-2xl border-2 border-white/20">
            <p className="text-lg font-bold text-center whitespace-nowrap">
              🚀 You're almost there!
            </p>
          </div>
        </div>
      )} */}

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          {/* Flipped gradient (Dark->Mid->Dark) and added w-fit mx-auto for dynamic width */}
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
              Book Your 1:1 Session Now
            </h2>
          </ScrollReveal>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Personalized guidance for engineers at every stage of their journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const hasLink = service.link && service.link.trim() !== ""

            if (hasLink) {
              return (
                <a
                  key={index}
                  href={service.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer group relative overflow-hidden"
                >
                  <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" style={{ stroke: "url(#blue-gradient-icon)" }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className="flex items-center text-xs font-bold text-blue-600 tracking-wider opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                      Click to Book <ArrowUpRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </a>
              )
            }

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8" style={{ stroke: "url(#blue-gradient-icon)" }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: translateX(100%) translateY(20px);
          }
          10% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
          85% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%) translateY(20px);
          }
        }
        
        .animate-popup {
          animation: popup 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  )
}
