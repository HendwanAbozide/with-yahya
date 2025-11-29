import { FileText } from "lucide-react"

export function Publications() {
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

  return (
    <section id="publications" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contributing to the AI and computer vision community through research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {publications.map((pub, index) => {
            return (
              <a
                key={index}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8" style={{ stroke: "url(#blue-gradient-icon)" }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">{pub.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pub.venue} • {pub.year}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
