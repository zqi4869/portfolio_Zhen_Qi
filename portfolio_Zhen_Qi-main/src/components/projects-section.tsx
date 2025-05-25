"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: "task-management",
      title: "智能任务管理系统",
      description: "基于 AI 的项目管理平台，帮助团队提高工作效率。集成了自然语言处理，可以自动分类和优先级排序任务。",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Tailwind CSS"],
      github: "https://github.com/zqi4869",
      live: "https://task-management-demo.vercel.app",
      featured: true
    },
    {
      id: "code-editor",
      title: "实时协作编辑器",
      description: "多人实时协作的代码编辑器，支持语法高亮、智能补全和版本控制。使用 WebSocket 实现低延迟通信。",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "WebSocket", "MongoDB", "Redis"],
      github: "https://github.com/zqi4869",
      live: "https://code-editor-demo.vercel.app",
      featured: true
    },
    {
      id: "ecommerce-dashboard",
      title: "电商分析仪表板",
      description: "为电商平台设计的数据可视化仪表板，提供实时销售分析、用户行为洞察和库存管理。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI", "Docker"],
      github: "https://github.com/zqi4869",
      live: "https://ecommerce-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: "social-app",
      title: "移动端社交应用",
      description: "基于位置的社交应用，用户可以发现附近的活动和朋友。包含实时聊天、动态发布等功能。",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Node.js", "GraphQL"],
      github: "https://github.com/zqi4869",
      live: "https://social-app-demo.vercel.app",
      featured: false
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            精选项目
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            一些我最引以为豪的作品，展示了我的技术能力和创新思维
          </p>
        </div>

        {/* 主要项目轮播 */}
        <div className="relative mb-20">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card className="bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-96">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 dark:from-zinc-900/50 to-transparent" />
                      </div>
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <Badge className="w-fit mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
                          精选项目
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => window.open(project.live, '_blank')}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            实时预览
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-zinc-600 text-zinc-300"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            源代码
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* 轮播控制 */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="border-gray-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentProject ? "bg-blue-400" : "bg-gray-400 dark:bg-zinc-600"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="border-gray-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 其他项目网格 */}
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            更多项目
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-white/50 dark:bg-zinc-800/50 border-gray-200 dark:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-800/70 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 dark:from-zinc-900/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-2"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
