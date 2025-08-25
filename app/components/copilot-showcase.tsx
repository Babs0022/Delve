"use client"

import { motion } from "framer-motion"
import { Code, FileText, Palette, BarChart3, Sparkles, CheckCircle } from "lucide-react"

export function CopilotShowcase() {
  const features = [
    {
      icon: Code,
      title: "Code Generation",
      description: "Production-ready React components from plain English",
      example: "Create a responsive pricing table with dark mode support",
      result: "✅ Complete component with TypeScript, animations, and accessibility",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "SEO-optimized content that matches your brand voice",
      example: "Write a blog post about AI trends for SaaS founders",
      result: "✅ 2000-word article with headlines, meta tags, and CTAs",
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Consistent UI patterns and design tokens",
      example: "Design a modern dashboard for analytics platform",
      result: "✅ Complete design system with components and guidelines",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Strategic insights from your business data",
      example: "Analyze user behavior and suggest growth strategies",
      result: "✅ Actionable recommendations with implementation roadmap",
    },
  ]

  return (
    <section id="copilot" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-medium">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Meet Your New
            <span className="gradient-text"> AI Copilot</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            KorbinAI doesn't just execute tasks—it thinks strategically, understands context, and delivers results that
            are ready for production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-purple-500 mb-3">
                      <p className="text-sm text-gray-700 italic">"{feature.example}"</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-green-700 font-medium">{feature.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-sm ml-4">KorbinAI Copilot</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-blue-200">👤 You: Build a landing page for my SaaS product</div>
                <div className="text-purple-200">
                  🤖 Korbin: I'll create a high-converting landing page. Let me analyze your target audience and
                  competitors first...
                </div>
                <div className="text-white/60">✨ Analyzing market positioning...</div>
                <div className="text-white/60">🎯 Designing conversion-optimized layout...</div>
                <div className="text-white/60">📝 Writing compelling copy...</div>
                <div className="text-green-300">
                  ✅ Complete landing page with 15+ sections, mobile-responsive design, and A/B test variants ready!
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">See the Difference</h3>
              <p className="text-white/90">Strategic thinking + Context awareness + Production-ready output</p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-8 bg-gray-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">10x</div>
            <div className="text-gray-600">Faster Development</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Less Editing Required</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Production Ready</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
