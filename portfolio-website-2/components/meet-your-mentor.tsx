"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
    {
        company: "Shopify",
        role: "Senior ML Engineer",
        logo: "/images/shopify-logo.png",
    },
    {
        company: "Tempo Analytics",
        role: "ML Engineer",
        logo: "/images/tempo-logo.png",
    },
    {
        company: "VRapeutic",
        role: "Technical Lead & Co-founder",
        logo: "/images/vrapeutic-logo.png",
    },
    {
        company: "SensorCortek",
        role: "ML Engineer",
        logo: "/images/sensorcortek-logo.png",
    },
    {
        company: "VIVA Lab",
        role: "AI Researcher",
        logo: "/images/vivalab-logo.png",
    },
    {
        company: "Intelligent Systems Lab",
        role: "ML Engineer",
        logo: "/images/isl-logo.png",
    },
]

const publications = [
    {
        title: "Enhanced thermal-rgb fusion for robust object detection",
        venue: "Software Engineering Journal",
        year: "2024",
        link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:9yKSN-GCB0IC",
    },
    {
        title: "RGB-LiDAR fusion for accurate 2D and 3D object detection",
        venue: "IEEE Computer Society",
        year: "2023",
        link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:2osOgNQ5qMEC",
    },
    {
        title: "Sensor fusion for 3d object detection for autonomous vehicles",
        venue: "ACM Queue",
        year: "2023",
        link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:u5HHmVD_uO8C",
    },
    {
        title: "Learnable fusion mechanisms for multimodal object detection in autonomous vehicles",
        venue: "International Conference on AI",
        year: "2022",
        link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:qjMakFHDy7sC",
    },
    {
        title: "Sensor fusion operators for multimodal 2d object detection",
        venue: "Journal of Systems Engineering",
        year: "2022",
        link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:u-x6o8ySG0sC",
    },
]

const teaching = [
    {
        role: "Part-time Professor",
        course: "Software Engineering & AI",
        institution: "University of Ottawa",
        year: "2023",
        logo: "/images/uottawa-logo.png",
    },
    {
        role: "Teaching Assistant",
        course: "Computer Science Courses",
        institution: "University of Ottawa",
        year: "2018 - 2022",
        logo: "/images/uottawa-logo.png",
    },
    {
        role: "Instructor",
        course: "Computer Vision",
        institution: "ITI Egypt",
        year: "2019",
        logo: "/images/iti-logo.jpg",
    },
]

export function MeetYourMentor() {
    return (
        <section id="meet-your-mentor" className="py-24 px-6 bg-secondary/30">
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

                    <TabsContent value="research" className="w-full mt-0">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {publications.map((pub, index) => (
                                <a
                                    key={index}
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 group bg-card/50 border border-border/50 h-full"
                                >
                                    <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                                        <FileText className="h-8 w-8" style={{ stroke: "url(#blue-gradient-icon)" }} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight min-h-[3.5rem] flex items-center justify-center">{pub.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {pub.venue} • {pub.year}
                                    </p>
                                </a>
                            ))}
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
