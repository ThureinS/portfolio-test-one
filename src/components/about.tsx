"use client"

import { Section } from "./section"

export function About() {
  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a motivated, continuously learning, and resilient tech enthusiast with a strong passion for technology and also a fast learner.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently specialized in frontend web development and aimed to become a full-stack developer. I am a team player who fosters a positive work environment while continuously learning to enhance my skills and deliver tasks efficiently and on time.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border shadow-xl">
            {/* Placeholder for profile image if user wants to add one later, or use a nice abstract graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-muted-foreground/50 font-medium">Profile Image</span>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
        </div>
      </div>
    </Section>
  )
}
