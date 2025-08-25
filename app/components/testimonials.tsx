"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Senior Developer at Stripe",
      company: "Stripe",
      image: "/testimonials/alex-feedback.jpeg",
      rating: 5,
      text: "KorbinAI has completely transformed how I approach development. What used to take me hours now takes minutes, and the quality is consistently excellent. It's like having a senior developer pair programming with me 24/7.",
      highlight: "Transformed my development workflow",
    },
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      company: "DataFlow",
      image: "/professional-woman-ceo.png",
      rating: 5,
      text: "As a non-technical founder, KorbinAI gave me superpowers. I can now prototype ideas, create landing pages, and even build basic features without waiting for developers. It's been a game-changer for our startup.",
      highlight: "Gave me technical superpowers",
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Design Studio Pro",
      image: "/creative-director-man.png",
      rating: 5,
      text: "The content creation capabilities are mind-blowing. KorbinAI understands our brand voice and creates content that's indistinguishable from what our best copywriters produce. Our agency productivity increased 300%.",
      highlight: "300% productivity increase",
    },
    {
      name: "Jennifer Walsh",
      role: "VP of Engineering",
      company: "TechCorp",
      image: "/female-vp-engineering.png",
      rating: 5,
      text: "We rolled out KorbinAI across our 500-person engineering team. The consistency and quality of output is remarkable. Code reviews are faster, documentation is better, and our junior developers are shipping like seniors.",
      highlight: "Scaled across 500+ engineers",
    },
    {
      name: "David Park",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "/asian-product-manager.png",
      rating: 5,
      text: "KorbinAI bridges the gap between product and engineering perfectly. I can prototype features, create detailed specs, and even generate initial implementations. Our product development cycle is now 5x faster.",
      highlight: "5x faster product development",
    },
    {
      name: "Lisa Anderson",
      role: "Marketing Director",
      company: "GrowthCo",
      image: "/marketing-director-woman.png",
      rating: 5,
      text: "The strategic thinking capability is what sets KorbinAI apart. It doesn't just create content—it understands our marketing goals and creates campaigns that actually convert. Our ROI improved by 400%.",
      highlight: "400% ROI improvement",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Loved by
            <span className="gradient-text"> 10,000+ Professionals</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders are saying about KorbinAI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-200" />

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-purple-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="bg-purple-100 rounded-lg px-3 py-1 inline-block mb-4">
                <span className="text-purple-700 text-sm font-medium">{testimonial.highlight}</span>
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-sm opacity-80">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-80">Projects Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500%</div>
              <div className="text-sm opacity-80">Avg. Productivity Gain</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
