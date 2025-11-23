"use client"

import { Section } from "./section"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Strong Proficiency",
    skills: ["HTML", "CSS", "JS", "Vue.js", "Oracle SQL", "Postgres SQL", "Git", "GitHub", "Tailwind", "Bootstrap"]
  },
  {
    title: "Moderate Proficiency",
    skills: ["React.js", "Shadcn", "Redux", "TypeScript", "Node.js (Express)", "Next.js", "Postman", "Mongodb"]
  },
  {
    title: "Beginner Proficiency",
    skills: ["Python", "Django", "Flutter", "Dart", "Jest", "Vitest"]
  },
  {
    title: "Tools",
    skills: ["Figma", "FigJam", "ClickUp", "Canva", "ChatGPT", "Gemini", "Codex", "Windsurf", "Cursor", "Notion", "Google Workspace", "Microsoft Office"]
  }
]

export function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Skills & Tools</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground border-b border-border pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
