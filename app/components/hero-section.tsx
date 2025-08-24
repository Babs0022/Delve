"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/components/analytics"

interface HeroSectionProps {
  y: any
}

export function HeroSection({ y }: HeroSectionProps) {
  const handleCTAClick = () => {
    trackEvent("cta_click", {
      event_category: "engagement",
      event_label: "hero_start_building",
      page_location: "hero_section",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-3 flex items-center space-x-2 shadow-sm">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium text-sm">Powered by Advanced AI Frameworks</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[0.85] tracking-tight text-gray-900">
            <span className="gradient-text">An AI Assistant</span>
            <br />
            That Actually Gets It
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed font-normal">
            Your most resourceful partner for{" "}
            <span className="text-purple-600 font-medium">
              brainstorming, coding, research, content creation, and strategic planning.
            </span>
            <br />
            Built to understand what you need before you even ask.
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-10 font-normal">
            Democratizing the creation process for everyone, everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-base md:text-lg px-8 py-4 h-14 font-medium hover-lift modern-shadow-lg border-0"
            >
              <a
                href="https://app.korbinai.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Experience KorbinAI Copilot - Free trial"
                onClick={handleCTAClick}
              >
                Experience the Copilot
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <figure className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 modern-shadow-lg">
            <div className="bg-gray-50/50 rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4" aria-label="AI Copilot interface">
                <div className="w-3 h-3 bg-red-500 rounded-full" aria-hidden="true" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" aria-hidden="true" />
                <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true" />
                <span className="text-gray-600 ml-4 font-medium">KorbinAI Copilot</span>
              </div>
              <div className="space-y-3">
                <div className="text-blue-600 font-medium">
                  👤 User: I need to launch a SaaS product but don't know where to start
                </div>
                <div className="text-purple-600 font-medium">
                  🤖 Korbin: I'll help you create a comprehensive launch strategy. Let me break this down:
                </div>
                <div className="text-gray-500 ml-4">✨ Analyzing market positioning...</div>
                <div className="text-gray-500 ml-4">📊 Creating go-to-market framework...</div>
                <div className="text-gray-500 ml-4">🎯 Developing content strategy...</div>
                <div className="text-purple-600 font-medium">
                  ✅ Complete launch roadmap ready with actionable steps
                </div>
              </div>
            </div>
            <figcaption className="sr-only">
              Example of KorbinAI Copilot providing strategic guidance for SaaS product launch
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
