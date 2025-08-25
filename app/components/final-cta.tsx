"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent, trackConversion } from "@/components/analytics"

export function FinalCTA() {
  const handleFinalCTAClick = () => {
    trackEvent("final_cta_click", {
      event_category: "conversion",
      event_label: "bottom_cta_signup",
      page_location: "final_cta_section",
      value: 0,
    })

    trackConversion("final_signup_attempt", {
      currency: "USD",
      value: 0,
    })
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">Rated #1 AI Assistant by 12,000+ Users</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Ready to Build</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join the revolution. Start building faster, smarter, and better with the AI that actually understands your
            vision.
          </motion.p>

          {/* Premium features grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <Zap className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-white font-bold text-lg mb-2">Instant Results</h3>
              <p className="text-slate-300 text-sm">Get production-ready code and content in seconds, not hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <Shield className="w-8 h-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-white font-bold text-lg mb-2">Enterprise Security</h3>
              <p className="text-slate-300 text-sm">SOC 2 compliant with enterprise-grade data protection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <Star className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-white font-bold text-lg mb-2">Premium Support</h3>
              <p className="text-slate-300 text-sm">24/7 expert support and dedicated account management</p>
            </div>
          </motion.div>

          {/* Premium CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white text-xl px-16 py-8 h-auto font-black shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <a
                href="https://app.korbinai.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFinalCTAClick}
                className="relative z-10 flex items-center"
              >
                <motion.div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                Start Building Now - Free Forever
                <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="text-slate-400 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-white font-semibold">Free Trial</div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="text-white font-semibold">No Credit Card</div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="text-white font-semibold">Cancel Anytime</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  )
}
