"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Play } from "lucide-react"
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="absolute inset-0">
          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Premium badge */}
          <motion.div
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-20"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex items-center space-x-3 shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </motion.div>
                <span className="text-slate-700 font-semibold text-sm tracking-wide">
                  Powered by Enterprise-Grade AI
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Hero headline with premium typography */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-[0.8] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              The AI That
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Actually Delivers
            </span>
          </motion.h1>

          {/* Premium subtitle */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-medium mb-6">
              Stop settling for generic responses. KorbinAI delivers{" "}
              <span className="text-purple-600 font-bold">strategic insights</span>,
              <span className="text-indigo-600 font-bold"> production-ready code</span>, and{" "}
              <span className="text-violet-600 font-bold">actionable solutions</span> that actually move your business
              forward.
            </p>
            <p className="text-lg md:text-xl text-slate-500 font-normal">
              Trusted by 500+ companies to accelerate their most important projects
            </p>
          </motion.div>

          {/* Premium CTA section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:via-violet-700 hover:to-indigo-700 text-white text-lg px-12 py-6 h-16 font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
            >
              <a
                href="https://app.korbinai.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCTAClick}
                className="relative z-10"
              >
                <motion.div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                Start Building Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-purple-300 hover:bg-white text-slate-700 hover:text-purple-700 text-lg px-10 py-6 h-16 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a href="#demo" className="flex items-center">
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </a>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full border-2 border-white shadow-md"
                  />
                ))}
              </div>
              <span className="text-sm font-medium ml-3">Join 12,000+ professionals already building faster</span>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-slate-400 font-semibold text-sm">SOC 2 Compliant</div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="text-slate-400 font-semibold text-sm">Enterprise Security</div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="text-slate-400 font-semibold text-sm">99.9% Uptime</div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="text-slate-400 font-semibold text-sm">24/7 Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-purple-600 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
