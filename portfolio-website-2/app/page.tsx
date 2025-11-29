import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhoThisIsFor } from "@/components/who-this-is-for"
import { Testimonials } from "@/components/testimonials"
// import { Publications } from "@/components/publications"
// import { Experience } from "@/components/experience"
import { MeetYourMentor } from "@/components/meet-your-mentor"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhoThisIsFor />
      <MeetYourMentor />
      <Testimonials />
      <Services />
      {/* <Experience /> */}
      {/* <Publications /> */}
      <Footer />
    </main>
  )
}

