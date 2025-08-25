"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { trackEvent, trackLogin, trackSignUp } from "@/components/analytics"
import { Menu, X, Zap } from "lucide-react"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const handleLoginClick = () => {
    trackEvent("login_attempt", {
      event_category: "authentication",
      event_label: "header_login_button",
      page_location: "header",
    })
    trackLogin("email")
  }

  const handleSignUpClick = () => {
    trackEvent("signup_attempt", {
      event_category: "authentication",
      event_label: "header_signup_button",
      page_location: "header",
    })
    trackSignUp("email")
  }

  const handleLogoClick = () => {
    trackEvent("logo_click", {
      event_category: "navigation",
      event_label: "header_logo",
      page_location: "header",
    })
  }

  const handleNavClick = (section: string) => {
    trackEvent("navigation_click", {
      event_category: "navigation",
      event_label: section,
      page_location: "header",
    })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Premium logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer group" onClick={handleLogoClick}>
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <img
                src="/logo.png"
                alt="KorbinAI Logo"
                className="relative w-10 h-10 object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Korbin
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
            </span>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold">
              PRO
            </div>
          </Link>

          {/* Premium navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "#problem", label: "Challenge" },
              { href: "#copilot", label: "Solution" },
              { href: "#solutions", label: "Use Cases" },
              { href: "#testimonials", label: "Results" },
              { href: "#faq", label: "FAQ" },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-slate-700 hover:text-purple-600 transition-colors font-semibold text-sm tracking-wide group"
                onClick={() => handleNavClick(item.label.toLowerCase())}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Premium CTA buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="ghost"
              className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-semibold transition-colors"
            >
              <a
                href="https://app.korbinai.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLoginClick}
              >
                Login
              </a>
            </Button>

            <Button
              asChild
              className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold px-6 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
            >
              <a
                href="https://app.korbinai.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSignUpClick}
                className="relative z-10 flex items-center"
              >
                <motion.div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <Zap className="w-4 h-4 mr-2" />
                Get Started Free
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-slate-700 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Premium mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {[
              { href: "#problem", label: "Challenge" },
              { href: "#copilot", label: "Solution" },
              { href: "#solutions", label: "Use Cases" },
              { href: "#testimonials", label: "Results" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block text-slate-700 hover:text-purple-600 transition-colors font-semibold py-2"
                onClick={() => {
                  handleNavClick(item.label.toLowerCase())
                  setIsMenuOpen(false)
                }}
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.a>
            ))}

            <div className="pt-4 space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-slate-200 hover:border-purple-300 font-semibold bg-transparent"
              >
                <a
                  href="https://app.korbinai.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLoginClick}
                >
                  Login
                </a>
              </Button>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold"
              >
                <a
                  href="https://app.korbinai.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleSignUpClick}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started Free
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
