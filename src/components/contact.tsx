"use client"

import { Section } from "./section"
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <Section id="contact" className="bg-secondary/30">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Get in Touch</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-card border border-border rounded-xl shadow-sm text-center gap-4"
          >
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground mb-3">thureinjarvis@gmail.com</p>
              <button
                onClick={() => handleCopy("thureinjarvis@gmail.com", "email")}
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {copied === "email" ? (
                  <>
                    <Check className="w-3 h-3" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy Email
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-card border border-border rounded-xl shadow-sm text-center gap-4"
          >
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground mb-3">+959-778-854-252</p>
              <button
                onClick={() => handleCopy("+959-778-854-252", "phone")}
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {copied === "phone" ? (
                  <>
                    <Check className="w-3 h-3" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy Phone
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-card border border-border rounded-xl shadow-sm text-center gap-4"
          >
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Mayangone Township, Yangon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
