"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react"
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

  const guarantees = [
    { icon: CheckCircle, text: "No credit card required" },
    { icon: Zap, text: "Instant access to all features" },
    { icon: Shield, text: "30-day money-back guarantee" },
    { icon: Clock, text: "Cancel anytime" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Transform Your Workflow?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ professionals who've already 10x'd their productivity with KorbinAI. Start your free trial
              today and see the difference in minutes, not months.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-xl p-4">
                  <guarantee.icon className="w-6 h-6 text-green-300" />
                  <span className="text-white text-sm font-medium">{guarantee.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 text-2xl px-16 py-8 h-20 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://app.korbinai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleFinalCTAClick}
                >
                  Start Free Trial Now
                  <ArrowRight className="ml-4 w-8 h-8" />
                </a>
              </Button>

              <div className="text-white/80 space-y-2">
                <p className="text-lg">✅ Full access to all features for 14 days</p>
                <p className="text-lg">✅ No setup fees or hidden costs</p>
                <p className="text-lg">✅ Join 10,000+ satisfied users</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm">
                Still have questions?{" "}
                <a href="mailto:team@korbinai.com" className="text-white underline hover:text-white/90">
                  Contact our team
                </a>{" "}
                for a personalized demo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
