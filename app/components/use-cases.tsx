"use client"

import { motion } from "framer-motion"
import { Briefcase, Rocket, Users, Building } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Launch faster with AI-generated MVPs, landing pages, and marketing content",
      benefits: [
        "Reduce development time by 80%",
        "Professional designs without hiring",
        "Marketing copy that converts",
      ],
      testimonial: "KorbinAI helped us launch our SaaS in 2 weeks instead of 2 months.",
      author: "Sarah Chen, Founder of DataFlow",
    },
    {
      icon: Briefcase,
      title: "Freelancers & Agencies",
      description: "Deliver more projects with higher quality in less time",
      benefits: ["Handle 3x more clients", "Consistent quality output", "Faster project delivery"],
      testimonial: "My agency revenue increased 200% after integrating KorbinAI into our workflow.",
      author: "Marcus Rodriguez, Creative Director",
    },
    {
      icon: Users,
      title: "Development Teams",
      description: "Focus on complex logic while AI handles boilerplate and documentation",
      benefits: ["Eliminate repetitive coding", "Auto-generated documentation", "Consistent code standards"],
      testimonial: "Our team now ships features 5x faster with KorbinAI handling the routine work.",
      author: "Alex Kim, Lead Developer at TechCorp",
    },
    {
      icon: Building,
      title: "Enterprise",
      description: "Scale content and development across large organizations",
      benefits: ["Standardized outputs", "Brand consistency", "Reduced training time"],
      testimonial: "KorbinAI transformed how our 500+ person team collaborates on projects.",
      author: "Jennifer Walsh, VP of Engineering",
    },
  ]

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Built for Every
            <span className="gradient-text"> Use Case</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From solo entrepreneurs to Fortune 500 companies, KorbinAI adapts to your workflow and scales with your
            needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{useCase.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                <p className="text-gray-700 italic mb-2">"{useCase.testimonial}"</p>
                <p className="text-sm text-purple-600 font-medium">— {useCase.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to 10x Your Productivity?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of professionals who've transformed their workflow with KorbinAI
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm opacity-80">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-sm opacity-80">Projects Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-80">Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
