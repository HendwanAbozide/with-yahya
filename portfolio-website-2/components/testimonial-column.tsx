"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { PlatformBadge } from "@/components/platform-badge"
import { cn } from "@/lib/utils"

interface Testimonial {
    id: string
    type: string
    rating: number
    text: string
    name: string
    date: string
    avatar: string
    link: string
    location?: string
    position?: string
}

interface TestimonialColumnProps {
    testimonials: Testimonial[]
    className?: string
    duration?: number // Duration in seconds for one full cycle
    reverse?: boolean
}

export function TestimonialColumn({
    testimonials,
    className,
    duration = 40,
    reverse = false
}: TestimonialColumnProps) {
    const [isHovered, setIsHovered] = useState(false)

    // Duplicate testimonials to create seamless loop
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials]

    return (
        <div
            className={cn("relative h-[800px] overflow-hidden group", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={cn(
                    "flex flex-col gap-6 w-full will-change-transform",
                    isHovered && "pause-animation"
                )}
                style={{
                    animation: `marquee-vertical ${duration}s linear infinite`,
                    animationDirection: reverse ? 'reverse' : 'normal'
                }}
            >
                {displayTestimonials.map((testimonial, index) => (
                    <Card
                        key={`${testimonial.id}-${index}`}
                        className="glass relative overflow-hidden border-white/20 bg-white/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-500/30 flex-shrink-0"
                    >
                        <CardContent className="p-6 space-y-4 relative z-10">
                            {/* Header: Rating & Platform */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-full">
                                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                                    <span className="font-bold text-yellow-700 text-xs">{testimonial.rating}.0</span>
                                </div>
                                {testimonial.type && (
                                    <PlatformBadge type={testimonial.type} />
                                )}
                            </div>

                            {/* Testimonial Text */}
                            <div>
                                <p className="text-[15px] text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                            </div>

                            {/* Author Info */}
                            <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                                <div className="relative shrink-0">
                                    <div className="absolute inset-0 bg-blue-500 blur opacity-20 rounded-full"></div>
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover relative border-2 border-white shadow-sm"
                                        draggable={false}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <div className="font-bold text-foreground text-sm truncate">{testimonial.name}</div>
                                    <div className="text-xs text-muted-foreground font-medium truncate">{testimonial.date}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee-vertical {
                    from { transform: translateY(0); }
                    to { transform: translateY(-33.33%); }
                }
                .pause-animation {
                    animation-play-state: paused !important;
                }
            `}</style>
        </div>
    )
}
