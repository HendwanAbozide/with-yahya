"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, GraduationCap } from "lucide-react"

interface Teaching {
    role: string
    course: string
    institution: string
    year: string
    outcome: string
    logo: string
    highlights: string[]
}

interface TeachingBentoProps {
    teaching: Teaching[]
}

export function TeachingBento({ teaching }: TeachingBentoProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <div className="w-full">
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {teaching.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div
                            onClick={() => toggleExpand(index)}
                            className="relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                        >
                            {/* Institution Logo & Year */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="h-16 w-16 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={item.logo}
                                        alt={`${item.institution} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>


                            </div>

                            {/* Role, Institution, Course & Outcome */}
                            <div className="space-y-2 mb-4">
                                <h3 className="text-xl font-bold text-foreground leading-tight">
                                    {item.role}
                                </h3>
                                <p className="text-sm font-medium text-blue-600 mb-1">
                                    {item.institution}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.course}
                                </p>

                            </div>

                            {/* Expand Indicator */}
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-blue-600">
                                    {expandedIndex === index ? "Less details" : "More details"}
                                </span>
                                <motion.div
                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-4 h-4 text-blue-600" />
                                </motion.div>
                            </div>

                            {/* Expandable Section */}
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 mt-4 border-t border-border/30 space-y-3">
                                            <p className="text-sm text-muted-foreground/80 italic mb-2">
                                                {item.outcome}
                                            </p>
                                            <ul className="space-y-2">
                                                {item.highlights.map((highlight, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-muted-foreground flex items-start gap-2"
                                                    >
                                                        <span className="text-blue-600 mt-1 shrink-0">•</span>
                                                        <span className="leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
