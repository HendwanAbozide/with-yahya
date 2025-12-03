"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import testimonialsData from "@/data/testimonials.json"

const testimonials = testimonialsData


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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    const scrollSpeed = 0.5 // pixels per frame
    let animationFrameId: number

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed

        // Reset to middle set when reaching the end
        // We use scrollWidth / 4 because we quadrupled the testimonials
        const oneSetWidth = scrollContainer.scrollWidth / 4
        if (scrollContainer.scrollLeft >= oneSetWidth * 3) {
          scrollContainer.scrollLeft = oneSetWidth
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused])

  // Initialize scroll position
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      setTimeout(() => {
        const oneSetWidth = scrollContainer.scrollWidth / 4
        scrollContainer.scrollLeft = oneSetWidth
      }, 100)
    }
  }, [])

  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto w-full">
        <div className="space-y-6 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
            What Mentees Say
          </h2>

          {/* Stats with animated counters */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Minutes</div>
            </div>
          </div>
        </div>

        {/* Horizontal auto-scrolling container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-8 items-start"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[280px]">
                <Card className="glass transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-4 space-y-3">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-foreground text-sm">{testimonial.rating}/5</span>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.text }} />

                    {/* Author Info */}
                    <div className="pt-3 border-t flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full"
                        draggable={false}
                      />
                      <div>
                        <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="https://adplist.org/mentors/yahya-alaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:scale-105 transition-transform inline-block font-medium text-center"
          >
            View all ADPList reviews →
          </a>
          <span className="hidden sm:inline text-muted-foreground">|</span>
          <a
            href="https://topmate.io/yahya_alaa#testimonials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:scale-105 transition-transform inline-block font-medium text-center"
          >
            View all Topmate reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
