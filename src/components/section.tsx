"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Section({ id, children, className, delay = 0, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 min-h-screen flex flex-col justify-center", className)}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}
