"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Experience {
    company: string
    role: string
    period: string
    outcome: string
    logo: string
    highlights: string[]
    tools?: string[]
}

interface IndustryBentoProps {
    experiences: Experience[]
}

export function IndustryBento({ experiences }: IndustryBentoProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    // Extract career progression from roles
    const careerProgression = experiences
        .slice()
        .reverse()
        .map(exp => exp.role.split(' & ')[0]) // Handle "Technical Lead & Co-founder"
        .join(" → ")

    return (
        <div className="w-full space-y-8">
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {experiences.map((exp, index) => (
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
                            className="relative overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:shadow-xl hover:border-blue-500/30 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                        >
                            {/* Company Logo */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="h-16 w-16 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>


                            </div>

                            {/* Role & Outcome */}
                            <div className="space-y-2 mb-4">
                                <h3 className="text-xl font-bold text-foreground leading-tight">
                                    {exp.role}
                                </h3>
                                <p className="text-sm font-medium text-blue-600 mb-1">
                                    {exp.company}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {exp.outcome}
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
                                            <ul className="space-y-2">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-muted-foreground flex items-start gap-2"
                                                    >
                                                        <span className="text-blue-600 mt-1 shrink-0">•</span>
                                                        <span className="leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tools/Skills */}
                                            {exp.tools && exp.tools.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {exp.tools.map((tool, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full"
                                                        >
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
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
