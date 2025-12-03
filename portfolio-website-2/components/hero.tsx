"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import { ADPListButton } from "@/components/adplist-button"

export function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 px-6 min-h-screen flex items-center relative">
      <div className="container mx-auto max-w-6xl relative z-10 mt-16 md:mt-20 lg:mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                <span className="whitespace-nowrap">Free Mentorship for</span>{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                  Aspiring Engineers
                </span>
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
                👋 I'm <span className="font-semibold text-foreground">Yahya Alaa</span>, a Senior Machine Learning
                Engineer. I help engineers grow their careers through 1:1 guidance, resume reviews, and personalized
                career advice.
              </h2>

              <div className="space-y-4 pt-4">
                <div className="flex flex-col gap-3 items-start">
                  <ADPListButton />
                  <p className="text-sm text-muted-foreground">
                    Also available on{" "}
                    <a
                      href="https://topmate.io/yahya_alaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary underline underline-offset-2 font-medium transition-colors"
                    >
                      Topmate
                    </a>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">100% free. No prep needed. All levels welcome.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/yahya-alaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yahya.alaa.massoud@gmail.com"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 md:order-2 text-primary">
            {/* Profile picture with rotating dashed ring */}
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center group" style={{ perspective: '1200px' }}>
              {/* Rotating dashed ring - vertical flip */}
              <div
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-sky-300"
                style={{
                  animation: 'flipVertical 8s linear infinite',
                  transformStyle: 'preserve-3d'
                }}
              />

              {/* Image Container */}
              <div className="absolute inset-4 md:inset-6 rounded-full overflow-hidden border-[6px] border-white shadow-lg bg-white group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                <Image src="/images/profile-outdoors.jpg" alt="Yahya Alaa" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
