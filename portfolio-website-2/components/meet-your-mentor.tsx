"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import experiencesData from "@/data/experiences.json"
import publicationsData from "@/data/publications.json"
import teachingData from "@/data/teaching.json"

const experiences = experiencesData
const publications = publicationsData
const teaching = teachingData

export function MeetYourMentor() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="meet-your-mentor" ref={sectionRef} className="py-24 px-6 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <div className="space-y-4 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
                        Meet Your Mentor
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A blend of industry leadership, academic research, and educational experience.
                    </p>
                </div>

                <Tabs defaultValue="industry" className="w-full flex flex-col items-center">
                    <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-12 p-1 bg-muted/50 rounded-full">
                        <TabsTrigger value="industry" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-bold transition-all duration-300">
                            <Briefcase className="w-4 h-4 mr-2" />
                            Industry
                        </TabsTrigger>
                        <TabsTrigger value="research" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-bold transition-all duration-300">
                            <FileText className="w-4 h-4 mr-2" />
                            Research
                        </TabsTrigger>
                        <TabsTrigger value="teaching" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:font-bold transition-all duration-300">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Teaching
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="industry" className="w-full mt-0">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 group bg-card/50 border border-border/50 h-full"
                                >
                                    <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                                        <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain p-2" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight min-h-[3.5rem] flex items-center justify-center">{exp.role}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        @ {exp.company}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="research" className="w-full mt-0 min-h-[400px] relative flex flex-col items-center justify-center overflow-hidden">
                        <div
                            className="relative w-full max-w-4xl h-[350px] flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing"
                            onMouseDown={(e) => {
                                const startX = e.pageX;
                                const handleMouseUp = (e: MouseEvent) => {
                                    const diff = e.pageX - startX;
                                    if (Math.abs(diff) > 50) {
                                        if (diff > 0) {
                                            setActiveIndex((prev) => (prev - 1 + publications.length) % publications.length);
                                        } else {
                                            setActiveIndex((prev) => (prev + 1) % publications.length);
                                        }
                                    }
                                    window.removeEventListener('mouseup', handleMouseUp);
                                };
                                window.addEventListener('mouseup', handleMouseUp, { once: true });
                            }}
                            onTouchStart={(e) => {
                                const startX = e.touches[0].pageX;
                                const handleTouchEnd = (e: TouchEvent) => {
                                    const diff = e.changedTouches[0].pageX - startX;
                                    if (Math.abs(diff) > 50) {
                                        if (diff > 0) {
                                            setActiveIndex((prev) => (prev - 1 + publications.length) % publications.length);
                                        } else {
                                            setActiveIndex((prev) => (prev + 1) % publications.length);
                                        }
                                    }
                                    window.removeEventListener('touchend', handleTouchEnd);
                                };
                                window.addEventListener('touchend', handleTouchEnd, { once: true });
                            }}
                        >
                            {publications.map((pub, index) => {
                                const len = publications.length;
                                const offset = (index - activeIndex + len) % len;

                                let style = {};
                                let cardClass = "absolute w-[320px] h-[280px] transition-all duration-500 ease-in-out flex flex-col items-center text-center p-8 rounded-2xl border border-border/50 shadow-xl justify-center select-none";
                                let isInteractive = false;

                                if (offset === 0) {
                                    // Active (Center) - Opaque and larger
                                    style = { transform: 'translateX(0) scale(1)', zIndex: 30, opacity: 1 };
                                    cardClass += " bg-card hover:shadow-2xl"; // Solid background
                                    isInteractive = true;
                                } else if (offset === 1) {
                                    // Next (Right) - Smaller and transparent
                                    style = { transform: 'translateX(70%) scale(0.85)', zIndex: 20, opacity: 0.5 };
                                    cardClass += " glass-card bg-card/50";
                                } else if (offset === len - 1) {
                                    // Previous (Left) - Smaller and transparent
                                    style = { transform: 'translateX(-70%) scale(0.85)', zIndex: 20, opacity: 0.5 };
                                    cardClass += " glass-card bg-card/50";
                                } else {
                                    // Hidden
                                    style = { transform: 'scale(0.8)', zIndex: 0, opacity: 0, pointerEvents: 'none' };
                                    cardClass += " glass-card bg-card/50";
                                }

                                return (
                                    <div
                                        key={index}
                                        className={cardClass}
                                        style={style}
                                        onClick={(e) => {
                                            // Only allow navigation click if it wasn't a drag
                                            // We can use a simple check or just allow the click to bubble
                                            // For side cards, we want them to navigate
                                            if (offset === 1) {
                                                e.preventDefault();
                                                setActiveIndex((prev) => (prev + 1) % len);
                                            }
                                            if (offset === len - 1) {
                                                e.preventDefault();
                                                setActiveIndex((prev) => (prev - 1 + len) % len);
                                            }
                                        }}
                                    >
                                        <a
                                            href={isInteractive ? pub.link : undefined}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex flex-col items-center w-full h-full justify-center ${!isInteractive ? 'pointer-events-none' : ''}`}
                                            draggable="false"
                                            onDragStart={(e) => e.preventDefault()}
                                        >
                                            <div className="h-14 w-14 rounded-full bg-blue-50/80 flex items-center justify-center mb-4 shrink-0">
                                                <FileText className="h-7 w-7" style={{ stroke: "url(#blue-gradient-icon)" }} />
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground mb-2 leading-tight line-clamp-3">{pub.title}</h3>
                                            <p className="text-sm font-medium text-blue-600 mb-1">{pub.venue}</p>
                                            <p className="text-sm text-muted-foreground">{pub.year}</p>

                                            {isInteractive && (
                                                <div className="mt-auto pt-2 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                                    Click to Read Paper
                                                </div>
                                            )}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-6 mt-4 z-40">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveIndex((prev) => (prev - 1 + publications.length) % publications.length);
                                }}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 text-foreground"
                                aria-label="Previous paper"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <div className="flex gap-2">
                                {publications.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-blue-200/50'}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveIndex((prev) => (prev + 1) % publications.length);
                                }}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 text-foreground"
                                aria-label="Next paper"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </TabsContent>

                    <TabsContent value="teaching" className="w-full mt-0">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teaching.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 group bg-card/50 border border-border/50 h-full"
                                >
                                    <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                                        <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain p-2" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight min-h-[3.5rem] flex items-center justify-center">{item.role}</h3>
                                    <p className="text-sm font-medium text-primary mb-1">{item.course}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.institution} • {item.year}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
