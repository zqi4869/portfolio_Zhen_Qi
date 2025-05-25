"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Lightbulb, Users, Zap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building clean, scalable web applications from frontend to backend"
    },
    {
      icon: Lightbulb,
      title: "Career Transition",
      description: "Successfully transitioned from finance to tech, bringing analytical skills to coding"
    },
    {
      icon: Users,
      title: "Animal Rescue Volunteer",
      description: "Passionate about helping stray cats and dogs find safe, loving homes"
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Always exploring new frameworks and tools to solve complex problems"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            From finance to code - a passionate developer creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 个人介绍 */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Hello! I'm a full-stack developer 👋
              </h3>
              <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  I'm a full-stack developer with a unique background in finance. I used to work as a financial analyst in China,
                  but a few years ago, I decided to follow my passion for tech and made the switch to coding — and I've loved the journey ever since.
                </p>
                <p>
                  I enjoy building clean, high-quality web apps and solving tricky problems. I'm always learning new tools and frameworks,
                  and I love turning ideas into something real that people can use.
                </p>
                <p>
                  Outside of coding, I care deeply about animal rescue. I've been volunteering for years, helping stray cats and dogs find safe homes —
                  it's something that really keeps me grounded and inspired.
                </p>
              </div>
            </div>

            {/* 技术兴趣 */}
            <div className="animate-slide-up">
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Currently focusing on:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js", "React", "TypeScript", "Node.js",
                  "Java", "Spring Boot", "Cloud Services", "Database Design"
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-gray-300 dark:border-zinc-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 特质卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
                  className="bg-white/50 dark:bg-zinc-800/50 border-gray-200 dark:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-800/70 transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h4>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-zinc-800">
          {[
            { id: "experience", number: "3+", label: "Years Coding" },
            { id: "projects", number: "20+", label: "Projects Built" },
            { id: "technologies", number: "10+", label: "Technologies" },
            { id: "animals", number: "100+", label: "Animals Rescued" }
          ].map((stat, index) => (
            <div
              key={stat.id}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
