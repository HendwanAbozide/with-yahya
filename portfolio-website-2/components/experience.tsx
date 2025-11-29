"use client"

import { TrendingUp, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        company: "Shopify",
        role: "Senior ML Engineer",
        period: "2024",
        description: "Building scalable ML systems",
        color: "bg-blue-500",
        logo: "/images/shopify-logo.png",
    },
    {
        company: "Tempo Analytics",
        role: "ML Engineer",
        period: "2022",
        description: "Video analytics for QSR",
        color: "bg-purple-500",
        logo: "/images/tempo-logo.png",
    },
    {
        company: "VRapeutic",
        role: "Technical Lead & Co-founder",
        period: "2021",
        description: "VR therapeutics startup",
        color: "bg-indigo-500",
        logo: "/images/vrapeutic-logo.png",
    },
    {
        company: "SensorCortek",
        role: "ML Engineer",
        period: "2020",
        description: "Autonomous driving AI",
        color: "bg-orange-500",
        logo: "/images/sensorcortek-logo.png",
    },
    {
        company: "VIVA Lab",
        role: "AI Researcher",
        period: "2019",
        description: "Multimodal deep learning and sensor fusion",
        color: "bg-green-500",
        logo: "/images/vivalab-logo.png",
    },
    {
        company: "Intelligent Systems Lab",
        role: "ML Engineer",
        period: "2018",
        description: "AR pose estimation",
        color: "bg-teal-500",
        logo: "/images/isl-logo.png",
    },
]

const projects = [
    {
        title: "Semantic Search on Wikipedia",
        description: "Embedded 500k passages in Qdrant vector store using binary quantization to enable retrieval and reranking.",
        tech: ["Qdrant", "SentenceTransformers", "Binary Quantization"],
    },
    {
        title: "Quora Similar Questions Finder",
        description: "Stored BGE sentence embeddings within a Qdrant vector index, enabling similarity search using cosine distance.",
        tech: ["Qdrant", "BGE Embeddings", "Cosine Similarity"],
    },
    {
        title: "Rest APIs for Face Detection & Similarity",
        description: "Developed APIs for face detection & similarity search in videos.",
        tech: ["Flask", "MongoDB", "TensorFlow"],
        link: "https://github.com/vyndapp/vynd_api",
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <div className="space-y-4 mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Building scalable AI systems and leading technical teams
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                                <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain p-2" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight min-h-[3.5rem] flex items-center">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                @ {exp.company}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
