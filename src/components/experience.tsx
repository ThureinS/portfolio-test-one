"use client"

import { Section } from "./section"
import { motion } from "framer-motion"

const experiences = [
  {
    role: "Front End Developer",
    company: "Doh Eain",
    period: "Feb 2025 - Present",
    type: "Full Time",
    description: [
      "Starts as a Front End Developer. Currently handling a whole project as a Scrum Master and Full Stack Developer.",
      "Current Project, Previous Project",
      "Design UI with Figma Make, Frontend Vue.js, Backend Laravel.",
      "Carry out Testing and Documentation for websites."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "Code Mal",
    period: "Sep 2024 - Mar 2025",
    type: "Volunteer (Remote)",
    description: [
      "Work as a frontend web developer.",
      "Brainstorm future plans and projects for the team.",
      "Support other tech team processes."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "Sa Map",
    period: "Aug 2024 - Mar 2025",
    type: "Volunteer (Remote)",
    description: [
      "Work as a frontend web developer for in house projects.",
      "Creating frontend side of the website and work together with Project Manager, UI/UX designers and backend developers."
    ]
  },
  {
    role: "Senior Functional Support",
    company: "Abank",
    period: "Dec 2021 - Feb 2025",
    type: "Full Time",
    description: [
      "Supports for operations on core banking system which are mostly related to banking procedures.",
      "Responsible and troubleshoot for user maintenance and user errors.",
      "Create and maintain reports for office use with SQL Query and iReport on ORACLE DBMS.",
      "Perform basic office tasks with Microsoft Office."
    ]
  }
]

export function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Work Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the roles I've held.
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-12 space-y-12 py-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                    {exp.period} • {exp.type}
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm md:text-base pl-2 -indent-2">
                      <span className="inline-block w-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
