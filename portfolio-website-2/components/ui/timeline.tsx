"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
    title: React.ReactNode;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full relative">
            {/* Horizontal Scroll Container */}
            <div
                ref={containerRef}
                className="w-full overflow-x-auto pb-12 pt-4 px-4 md:px-10 flex gap-8 snap-x snap-mandatory no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Connecting Line */}
                <div className="absolute top-[5.5rem] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50 pointer-events-none" />

                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center gap-6 min-w-[300px] md:min-w-[350px] snap-center relative z-10"
                    >
                        {/* Title / Logo Area */}
                        <div className="relative z-10 bg-background p-2 rounded-full">
                            {item.title}
                        </div>

                        {/* Content Card */}
                        <div className="w-full">
                            {item.content}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Scroll Indicators (Optional visual cue) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none md:block hidden" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none md:block hidden" />
        </div>
    );
};
