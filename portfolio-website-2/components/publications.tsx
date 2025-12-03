import { FileText } from "lucide-react"
import publicationsData from "@/data/publications.json"

export function Publications() {
  const publications = publicationsData


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
