"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown, Code, Terminal } from "lucide-react"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background Code Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-zinc-400 dark:text-zinc-500 font-mono text-sm">
          {"function() {"}
        </div>
        <div className="absolute top-32 right-20 text-zinc-400 dark:text-zinc-500 font-mono text-sm">
          {"console.log('Hello World')"}
        </div>
        <div className="absolute bottom-40 left-1/4 text-zinc-400 dark:text-zinc-500 font-mono text-sm">
          {"return success;"}
        </div>
        <div className="absolute bottom-60 right-1/3 text-zinc-400 dark:text-zinc-500 font-mono text-sm">
          {"}"}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Hi there! I'm a
            <span className="block bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            With a background in finance, I made the exciting transition to tech and fell in love with coding.
            I enjoy building clean, high-quality web apps and solving complex problems.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "Java", "Database", "Cloud", "AI/ML"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-600 bg-zinc-200/50 dark:bg-zinc-800/50">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-400 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/zqi4869"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:developer@example.com"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Terminal className="h-6 w-6" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="mx-auto block text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 animate-float">
        <Code className="h-8 w-8 text-blue-400/20 dark:text-blue-400/30" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float-delayed">
        <Terminal className="h-8 w-8 text-purple-400/20 dark:text-purple-400/30" />
      </div>
    </section>
  )
}
