"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ExternalLink, Calendar, MessageCircle, Clock, LucideIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import testimonialsData from "@/data/testimonials.json"
import statsData from "@/data/stats.json"
import { Inter } from "next/font/google"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PlatformBadge } from "@/components/platform-badge"
import { TestimonialColumn } from "@/components/testimonial-column"

const inter = Inter({ subsets: ["latin"] })

const testimonials = testimonialsData

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  MessageCircle,
  Clock,
}


// Counter component with animation
function AnimatedCounter({ end, duration = 2500, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const startTime = Date.now()
            const animate = () => {
              const now = Date.now()
              const progress = Math.min((now - startTime) / duration, 1)
              // Smoother easing function (ease-out-cubic)
              const easeOutCubic = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(easeOutCubic * end))

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            animate()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={counterRef}>{count}{suffix}</span>
}

export function Testimonials() {
  // Split testimonials into 3 columns
  const column1 = testimonials.slice(0, 10)
  const column2 = testimonials.slice(10, 20)
  const column3 = testimonials.slice(20)

  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden bg-secondary/20">
      <div className="container mx-auto w-full max-w-7xl">
        <div className="space-y-6 mb-16 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
              What Mentees Say
            </h2>
          </ScrollReveal>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-2xl mx-auto">
            {statsData.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Calendar
              return (
                <div key={index} className="glass px-3 py-2.5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-500/30">
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-black tabular-nums text-blue-500 leading-none mb-1 ${inter.className}`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground tracking-tight">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Marquee Grid Container */}
        <div
          className="relative h-[800px] overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            <TestimonialColumn testimonials={column1} duration={column1.length * 10} />
            <TestimonialColumn testimonials={column2} duration={column2.length * 10} className="hidden md:block" />
            <TestimonialColumn testimonials={column3} duration={column3.length * 10} className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
