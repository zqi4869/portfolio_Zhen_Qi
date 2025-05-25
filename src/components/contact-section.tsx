"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail, Phone, MapPin, Send, Github,
  Linkedin, Twitter, MessageCircle
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log("表单提交:", formData)
    // 重置表单
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "zhenqi778899@gmail.com",
      href: "mailto:zhenqi778899@gmail.com"
    },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      value: "Helsinki, Finland",
      href: "https://maps.google.com/?q=Helsinki,Finland"
    }
  ]

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      href: "https://github.com/zqi4869",
      color: "hover:text-gray-400"
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/zqi4869",
      color: "hover:text-blue-400"
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/zqi4869",
      color: "hover:text-cyan-400"
    },
    {
      id: "wechat",
      icon: MessageCircle,
      label: "微信",
      href: "javascript:void(0)",
      color: "hover:text-green-400"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Contact Me
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Got a project in mind or just want to say hi? I'd love to hear your ideas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Let's Talk
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                No matter if you're looking for help with development, want to team up on something fun, or just have a question — drop me a message!
                I usually get back within a day, often even faster.
              </p>

              <Badge className="mb-8 bg-green-500/10 text-green-400 border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Typically replies within 2 hours
              </Badge>
            </div>

            {/* 联系方式 */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center group hover:bg-gray-100/50 dark:hover:bg-zinc-800/50 p-4 rounded-lg transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-zinc-600 dark:text-zinc-400 text-sm">{item.label}</div>
                      <div className="text-zinc-900 dark:text-white font-medium group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* 社交媒体 */}
            <div className="pt-8 border-t border-gray-200 dark:border-zinc-800">
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">关注我</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  const handleClick = (e: React.MouseEvent) => {
                    if (social.id === 'wechat') {
                      e.preventDefault()
                      alert('微信号：zqi4869')
                    }
                  }
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={handleClick}
                      className={`w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:scale-110 ${social.color} animate-scale-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      title={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <Card className="bg-white/50 dark:bg-zinc-800/50 border-gray-200 dark:border-zinc-700 animate-slide-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-zinc-900 dark:text-white focus:border-blue-400"
                      placeholder="What's your name?"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-zinc-900 dark:text-white focus:border-blue-400"
                      placeholder="How can I reach you?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-zinc-900 dark:text-white focus:border-blue-400"
                    placeholder="e.g. project, collab, question"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 text-zinc-900 dark:text-white focus:border-blue-400 resize-none"
                    placeholder="Tell me more about what you're thinking"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-zinc-800 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              © 2024 程序员作品集. 用心设计与开发.
            </p>
            <p className="text-zinc-500 text-sm">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
