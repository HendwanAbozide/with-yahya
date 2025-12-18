"use client"

import { motion } from "framer-motion"
import { FileText, ExternalLink, ArrowUpRight } from "lucide-react"

interface Publication {
    title: string
    venue: string
    year: string
    link: string
}

interface ResearchBentoProps {
    publications: Publication[]
}

export function ResearchBento({ publications }: ResearchBentoProps) {
    const sortedPublications = [...publications].sort((a, b) => parseInt(b.year) - parseInt(a.year))

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {sortedPublications.map((pub, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                    >
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                        >
                            <div className="relative h-full overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col">
                                {/* Icon & Year */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FileText className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <span className="text-xs font-semibold text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                                        {pub.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 flex-grow">
                                    <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-blue-600 transition-colors">
                                        {pub.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        {pub.venue}
                                    </p>
                                </div>

                                {/* Link Indicator */}
                                <div className="mt-6 flex items-center text-sm font-medium text-blue-600 opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                                    Read Paper <ArrowUpRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
