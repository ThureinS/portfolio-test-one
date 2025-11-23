"use client"

import { Section } from "./section"
import { motion } from "framer-motion"

const education = [
  {
    school: "University of Computer Studies Yangon (UCSY)",
    period: "2016 - 2025",
    degree: "BSc Computer Science (Software Engineering)",
    description: ""
  },
  {
    school: "KMD Institute / University of Greenwich",
    period: "2016 - 2020",
    degree: "BSc (Hons) BIT (Business Information Technology)",
    description: "NCC Level 4 Diploma in Computing, NCC Level 5 Diploma in Computing"
  },
  {
    school: "Young City Shapers",
    period: "Jul 2025 - Sep 2025",
    degree: "YCS cohort 16 alumni",
    description: "Volunteering in MHPSS"
  },
  {
    school: "Google",
    period: "Jan 2025 - Jun 2025",
    degree: "Project Management Professional Certification",
    description: ""
  },
  {
    school: "American Center",
    period: "2016 - 2018",
    degree: "English Language Program",
    description: "Studied Level 3 to Level 5"
  }
]

export function Education() {
  return (
    <Section id="education" className="bg-secondary/30">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col h-full justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                    <span className="text-xs font-medium bg-secondary px-2 py-1 rounded text-muted-foreground whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium">{edu.degree}</p>
                </div>
                {edu.description && (
                  <p className="text-sm text-muted-foreground border-t border-border pt-4">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
