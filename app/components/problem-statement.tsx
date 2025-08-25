"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, Zap, Target } from "lucide-react"

export function ProblemStatement() {
  const problems = [
    {
      icon: Clock,
      title: "Hours Wasted on Repetitive Tasks",
      description:
        "Developers and creators spend 60% of their time on boilerplate code and mundane content creation instead of innovation.",
      stat: "60% time wasted",
    },
    {
      icon: AlertTriangle,
      title: "Generic AI Tools Fall Short",
      description:
        "ChatGPT and Claude give generic responses that require extensive editing and lack strategic thinking.",
      stat: "80% need editing",
    },
    {
      icon: Target,
      title: "Context Gets Lost",
      description: "Most AI tools forget your project context, forcing you to re-explain requirements repeatedly.",
      stat: "5x repetition",
    },
    {
      icon: Zap,
      title: "No Strategic Thinking",
      description:
        "Current AI assistants execute tasks but can't think strategically about your business goals and user needs.",
      stat: "0% strategy",
    },
  ]

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">The $120B Problem</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Businesses lose <span className="text-red-600 font-semibold">$120 billion annually</span> due to inefficient
            development and content creation processes. Here's why current solutions fail:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-3">{problem.stat}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">What if there was a better way?</h3>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Imagine an AI that understands your context, thinks strategically about your goals, and delivers
            production-ready results that require zero editing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
