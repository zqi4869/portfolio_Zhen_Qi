"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2, Database, Server, Smartphone,
  Cloud, GitBranch, Palette, Zap
} from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "blue",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "green",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express", level: 88 },
        { name: "FastAPI", level: 80 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "purple",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "MySQL", level: 78 },
        { name: "Prisma", level: 82 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "orange",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS", level: 65 },
        { name: "Android", level: 68 }
      ]
    },
    {
      title: "Cloud Services",
      icon: Cloud,
      color: "cyan",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Vercel", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "Netlify", level: 88 }
      ]
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      color: "red",
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub Actions", level: 85 },
        { name: "VS Code", level: 98 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 90 }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      cyan: "from-cyan-500 to-cyan-600",
      red: "from-red-500 to-red-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Technologies and tools I work with, constantly learning to stay competitive
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <Card
                key={category.title}
                className="bg-white/50 dark:bg-zinc-800/50 border-gray-200 dark:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-800/70 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color)} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-zinc-600 dark:text-zinc-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                          <div
                            className={`h-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Skill Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "AI/ML", "OpenAI API", "Stripe", "Auth0", "Supabase", "Prisma",
              "Jest", "Cypress", "Webpack", "Vite", "ESLint", "Prettier",
              "Socket.io", "WebRTC", "PWA", "SEO", "Analytics", "Sentry"
            ].map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-zinc-700 dark:text-zinc-300 border-gray-300 dark:border-zinc-600 bg-white/30 dark:bg-zinc-800/30 hover:bg-gray-100/50 dark:hover:bg-zinc-700/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              id: "fast-learning",
              icon: Zap,
              title: "Fast Learning",
              description: "Quickly master new technologies and frameworks, adapting to ever-changing tech environments"
            },
            {
              id: "user-oriented",
              icon: Palette,
              title: "User-Focused",
              description: "Always think from the user's perspective, focusing on user experience and product usability"
            },
            {
              id: "best-practices",
              icon: GitBranch,
              title: "Best Practices",
              description: "Follow industry standards and best practices, writing maintainable and scalable code"
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
