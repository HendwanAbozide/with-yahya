"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Smile } from "lucide-react"

const testimonials = [
  // Ordered by date (newest first)
  // ADPList - Nov 19, 2025
  {
    type: "adplist",
    rating: 5,
    text: "I had an <strong>outstanding experience</strong> with my mentor, who excelled in communication, motivation, subject knowledge, and problem-solving. Their ability to provide clear guidance and inspire me made a <strong>significant impact</strong> on my growth. I highly recommend booking a session with them if you're looking for someone who will <strong>exceed your expectations</strong>.",
    name: "Hossam El-kharbotly",
    country: "🇪🇬",
    role: "Computer Engineer, Free",
    date: "November 19, 2025",
    isRecent: true,
    badges: ["Technically competent", "Very motivational", "Amazing communicator", "Amazing problem solver"],
    avatar: "https://adplist-bucket.s3.amazonaws.com/media/profile_photos/562580f36b354f93a057e5500f783616SN3fr.webp",
  },
  // ADPList - Nov 15, 2025
  {
    type: "adplist",
    rating: 5,
    text: "Yahya was <strong>incredibly generous</strong> with his time, gave me <strong>great advice</strong>, a lot of resources to learn from, and gave me a lot of encouragement. I can't recommend him enough!",
    name: "Mentee",
    country: "",
    role: "Mentee",
    date: "November 15, 2025",
    badges: ["Technically competent", "Very motivational"],
    avatar: "/diverse-avatars.png",
  },
  // Topmate - Dec 12, 2024
  {
    type: "topmate",
    rating: 5,
    text: "Eng. Yahya gave me an <strong>incredible</strong> mock interview session that was very helpful. He asked both behavior and technical questions, like a real interview, and provided clear and <strong>valuable advice</strong>. At the end of the session, he gave me detailed document covering everything I need to review and focus on for both technical and behavioral areas. This <strong>extra effort</strong> boosted my confidence and helped me feel fully prepared. It was an amazing session!",
    name: "Moataz Habib",
    date: "12th Dec, 2024",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=MH&backgroundColor=3b82f6",
  },
  // Topmate - Dec 11, 2024
  {
    type: "topmate",
    rating: 5,
    text: "I had a <strong>fantastic session</strong> with Yahya. He provided <strong>invaluable advice</strong> on transitioning to an ML career, including specific book and tool recommendations. The session <strong>exceeded my expectations</strong> and left me feeling motivated and prepared. I'm truly grateful for his expertise.",
    name: "Adama Sorho",
    date: "11th Dec, 2024",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AS&backgroundColor=3b82f6",
  },
  // Topmate - Nov 3, 2024
  {
    type: "topmate",
    rating: 5,
    text: "I recently had another review of my CV with Yahya, and his input was <strong>invaluable</strong>. He thoroughly tested the previous edits, offering <strong>practical advice</strong> and encouraging me to refine specific areas further. Mossab's attention to detail and friendly, <strong>constructive approach</strong> made all the difference, and I feel that my CV is now polished and ready to make an impact. I really appreciate his time and expertise!",
    name: "Ahmed Mahmoud",
    date: "3rd Nov, 2024",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AM&backgroundColor=3b82f6",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-4 mb-12 text-center">
          {/* Flipped gradient (Dark->Mid->Dark) and added w-fit mx-auto for dynamic width */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
            What Mentees Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real feedback from engineers I've mentored · <span className="font-semibold text-foreground">50+ reviews</span>
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <Card className="glass transition-all duration-300 h-full relative">
                {testimonial.isRecent && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white shadow-sm">
                      Latest
                    </span>
                  </div>
                )}
                <CardContent className="p-6 space-y-4">
                  {testimonial.type === "adplist" ? (
                    <>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-foreground">{testimonial.rating}/5</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                      <div className="flex flex-wrap gap-2">
                        {testimonial.badges?.map((badge, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-accent/10 text-foreground border border-accent/20"
                          >
                            <Smile className="w-4 h-4" />
                            {badge}
                          </span>
                        ))}
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-accent/5 text-muted-foreground">
                          +5
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <div className="font-semibold text-foreground">
                              {testimonial.name} {testimonial.country}
                            </div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                          <p className="text-sm text-muted-foreground">Mentee</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-foreground">{testimonial.rating}/5</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                      <div className="pt-4 border-t flex items-center gap-3">
                        <img
                          src={testimonial.avatar || "https://api.dicebear.com/7.x/initials/svg?seed=User&backgroundColor=3b82f6"}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="https://adplist.org/mentors/yahya-alaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:scale-105 transition-transform inline-block font-medium text-center"
          >
            View all ADPList reviews →
          </a>
          <span className="hidden sm:inline text-muted-foreground">|</span>
          <a
            href="https://topmate.io/yahya_alaa#testimonials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:scale-105 transition-transform inline-block font-medium text-center"
          >
            View all Topmate reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
