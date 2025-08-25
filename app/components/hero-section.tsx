"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star, Users, Zap } from "lucide-react"
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/10 to-blue-100/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Social Proof Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <span className="text-gray-700 font-medium text-sm">Trusted by 10,000+ creators</span>
              <Users className="w-4 h-4 text-purple-600" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-[0.85] tracking-tight text-gray-900">
            <span className="gradient-text">Transform Ideas</span>
            <br />
            <span className="text-gray-800">Into Reality</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-purple-600 font-medium">In Seconds</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-5xl mx-auto leading-relaxed font-normal">
            The world's most advanced AI copilot that understands context, thinks strategically, and delivers{" "}
            <span className="text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-lg">
              production-ready results
            </span>{" "}
            for coding, content, and creative work.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50">
              <Zap className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">10x Faster Development</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">Zero Learning Curve</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50">
              <Star className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">Enterprise Quality</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-xl px-12 py-6 h-16 font-semibold hover-lift modern-shadow-lg border-0 rounded-xl"
            >
              <a
                href="https://app.korbinai.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start Free Trial - No Credit Card Required"
                onClick={handleCTAClick}
              >
                Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6" aria-hidden="true" />
              </a>
            </Button>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">No credit card required</p>
              <p className="text-sm text-gray-500">Join 10,000+ satisfied users</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 text-sm font-medium">Used by teams at:</div>
            <div className="flex items-center space-x-8">
              <div className="text-gray-400 font-semibold">Google</div>
              <div className="text-gray-400 font-semibold">Microsoft</div>
              <div className="text-gray-400 font-semibold">Shopify</div>
              <div className="text-gray-400 font-semibold">Stripe</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
