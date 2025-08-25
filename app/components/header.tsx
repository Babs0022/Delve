"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { trackEvent, trackLogin, trackSignUp } from "@/components/analytics"

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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
          <img src="/logo.png" alt="KorbinAI Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Korbin<span className="text-purple-600">AI</span>
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-medium">
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
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium border-0"
          >
            <a
              href="https://app.korbinai.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSignUpClick}
            >
              Get Started Free
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
