'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Zap, Brain, Code, Target, Flame, Award, TrendingUp, Moon, Sun, Search, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect as useLayoutEffect } from 'react'

interface SubjectProgress {
  name: string
  progress: number
  icon: React.ReactNode
  color: string
  status: 'strong' | 'moderate' | 'weak'
}

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userStats, setUserStats] = useState({
    overallProgress: 68,
    dailyStreak: 12,
    studyHours: 24,
    totalXP: 2480,
    level: 8,
  })

  const subjectsData: SubjectProgress[] = [
    { name: 'Python', progress: 85, icon: <Code className="w-4 h-4" />, color: 'from-blue-500 to-blue-600', status: 'strong' },
    { name: 'SQL', progress: 72, icon: <Database className="w-4 h-4" />, color: 'from-orange-500 to-orange-600', status: 'moderate' },
    { name: 'Aptitude', progress: 58, icon: <Brain className="w-4 h-4" />, color: 'from-pink-500 to-pink-600', status: 'weak' },
    { name: 'Data Analytics', progress: 91, icon: <TrendingUp className="w-4 h-4" />, color: 'from-green-500 to-green-600', status: 'strong' },
    { name: 'DSA', progress: 64, icon: <Zap className="w-4 h-4" />, color: 'from-yellow-500 to-yellow-600', status: 'moderate' },
    { name: 'Web Dev', progress: 45, icon: <BookOpen className="w-4 h-4" />, color: 'from-purple-500 to-purple-600', status: 'weak' },
  ]

  const motivationalQuotes = [
    "Every expert was once a beginner. Keep pushing!",
    "120 days to mastery - You've got this! 🚀",
    "Code today, succeed tomorrow.",
    "Progress over perfection. Small steps, big wins.",
    "Consistency is the key to your breakthrough.",
  ]

  const [quote, setQuote] = useState(motivationalQuotes[0])

  useLayoutEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white' : 'bg-gradient-to-br from-white via-blue-50 to-white text-slate-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${darkMode ? 'border-purple-900/50 bg-slate-950/80' : 'border-blue-200 bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-500" />
            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SkillVerse</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/skills" className="hover:text-purple-400 transition">Skills</Link>
            <Link href="/interview" className="hover:text-purple-400 transition">Interview</Link>
            <Link href="/formulas" className="hover:text-purple-400 transition">Formulas</Link>
            <Link href="/planner" className="hover:text-purple-400 transition">Planner</Link>
            <Link href="/notes" className="hover:text-purple-400 transition">Notes</Link>
            <Link href="/mentor" className="hover:text-purple-400 transition">AI Mentor</Link>
            <Link href="/compiler" className="hover:text-purple-400 transition">Compiler</Link>
            <Link href="/checklist" className="hover:text-purple-400 transition">Checklist</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/50' : 'bg-blue-100'}`}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="hidden md:block p-2 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Search className="w-5 h-5" />
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'border-purple-900/50 bg-slate-900' : 'border-blue-200 bg-blue-50'} p-4 space-y-3`}>
            <Link href="/skills" className="block hover:text-purple-400 transition text-sm">Skills Arena</Link>
            <Link href="/interview" className="block hover:text-purple-400 transition text-sm">Interview Master</Link>
            <Link href="/formulas" className="block hover:text-purple-400 transition text-sm">Formula Vault</Link>
            <Link href="/planner" className="block hover:text-purple-400 transition text-sm">Smart Planner</Link>
            <Link href="/notes" className="block hover:text-purple-400 transition text-sm">My Notes</Link>
            <Link href="/mentor" className="block hover:text-purple-400 transition text-sm">AI Mentor</Link>
            <Link href="/compiler" className="block hover:text-purple-400 transition text-sm">AI Compiler</Link>
            <Link href="/checklist" className="block hover:text-purple-400 transition text-sm">Checklists</Link>
            <Link href="/missions" className="block hover:text-purple-400 transition text-sm">120-Day Plan</Link>
            <Link href="/coding-lab" className="block hover:text-purple-400 transition text-sm">Coding Lab</Link>
            <Link href="/resources" className="block hover:text-purple-400 transition text-sm">Resources</Link>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className={`rounded-2xl p-6 md:p-8 mb-8 ${darkMode ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50' : 'bg-gradient-to-r from-blue-100 to-pink-100'} border ${darkMode ? 'border-purple-700/50' : 'border-blue-200'}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Learner! 🚀</h2>
              <p className={`text-lg mb-4 ${darkMode ? 'text-purple-200' : 'text-blue-700'}`}>{quote}</p>
              <div className="flex gap-3 flex-wrap">
                <Badge className="px-3 py-1 text-sm"><Flame className="w-4 h-4 mr-1" /> {userStats.dailyStreak}-day streak</Badge>
                <Badge className="px-3 py-1 text-sm"><Award className="w-4 h-4 mr-1" /> Level {userStats.level}</Badge>
              </div>
            </div>
            <div className={`text-5xl font-black text-center w-24 h-24 rounded-2xl flex items-center justify-center ${darkMode ? 'bg-purple-900/50' : 'bg-blue-200'}`}>
              {userStats.overallProgress}%
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className={`${darkMode ? 'bg-slate-900/50 border-purple-800/50' : 'bg-white/50'}`}>
            <CardContent className="p-4">
              <div className="text-sm text-gray-400 mb-2">Study Hours</div>
              <div className="text-3xl font-bold text-purple-400">{userStats.studyHours}h</div>
            </CardContent>
          </Card>
          <Card className={`${darkMode ? 'bg-slate-900/50 border-purple-800/50' : 'bg-white/50'}`}>
            <CardContent className="p-4">
              <div className="text-sm text-gray-400 mb-2">Total XP</div>
              <div className="text-3xl font-bold text-pink-400">{userStats.totalXP}</div>
            </CardContent>
          </Card>
          <Card className={`${darkMode ? 'bg-slate-900/50 border-purple-800/50' : 'bg-white/50'}`}>
            <CardContent className="p-4">
              <div className="text-sm text-gray-400 mb-2">Current Level</div>
              <div className="text-3xl font-bold text-blue-400">{userStats.level}</div>
            </CardContent>
          </Card>
          <Card className={`${darkMode ? 'bg-slate-900/50 border-purple-800/50' : 'bg-white/50'}`}>
            <CardContent className="p-4">
              <div className="text-sm text-gray-400 mb-2">Days Left</div>
              <div className="text-3xl font-bold text-green-400">92</div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Progress */}
        <Card className={`mb-8 ${darkMode ? 'bg-slate-900/50 border-purple-800/50' : 'bg-white/50'}`}>
          <CardHeader>
            <CardTitle>Subject-wise Progress</CardTitle>
            <CardDescription>Your mastery in each skill</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectsData.map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${subject.color}`}>
                        {subject.icon}
                      </div>
                      <span className="font-semibold">{subject.name}</span>
                      <Badge variant={subject.status === 'strong' ? 'default' : subject.status === 'moderate' ? 'secondary' : 'destructive'} className="text-xs">
                        {subject.status === 'strong' ? '✓' : subject.status === 'moderate' ? '→' : '!'}
                      </Badge>
                    </div>
                    <span className="text-sm font-bold">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Modules */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Core Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Mission Tracker', desc: '120-Day Learning Plan', icon: Target, color: 'from-blue-500 to-blue-600' },
              { name: 'Skill Arena', desc: 'Master Core Concepts', icon: Brain, color: 'from-purple-500 to-purple-600' },
              { name: 'Coding Lab', desc: 'Write & Execute Code', icon: Code, color: 'from-pink-500 to-pink-600' },
              { name: 'Game Vault', desc: 'Gamified Learning', icon: Zap, color: 'from-orange-500 to-orange-600' },
              { name: 'Interview Master', desc: 'Ace Your Interview', icon: Award, color: 'from-green-500 to-green-600' },
              { name: 'Formula Vault', desc: 'Quick Reference Guide', icon: BookOpen, color: 'from-yellow-500 to-yellow-600' },
            ].map((module, idx) => (
              <Card key={idx} className={`cursor-pointer hover:scale-105 transition-transform ${darkMode ? 'bg-slate-900/50 border-purple-800/50 hover:border-purple-600' : 'bg-white/50 hover:border-purple-400'}`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-4`}>
                    <module.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{module.name}</h3>
                  <p className="text-sm text-gray-400">{module.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Topics */}
        <Card className={`${darkMode ? 'bg-slate-900/50 border-purple-800/50' : 'bg-white/50'}`}>
          <CardHeader>
            <CardTitle>Recommended Topics (Weak Areas)</CardTitle>
            <CardDescription>Focus on these topics to level up</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { topic: 'Divisibility Rules', progress: 35, icon: '🔢' },
                { topic: 'Geometric Formulas', progress: 42, icon: '📐' },
                { topic: 'SQL Joins', progress: 58, icon: '🗄️' },
                { topic: 'Web Dev Basics', progress: 45, icon: '🌐' },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-lg border ${darkMode ? 'border-purple-700/50 bg-purple-900/20' : 'border-blue-200 bg-blue-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg">{item.icon} {item.topic}</span>
                    <Button size="sm" variant="outline">Learn</Button>
                  </div>
                  <Progress value={item.progress} className="h-1.5" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className={`border-t mt-16 ${darkMode ? 'border-purple-900/50 bg-slate-900/50' : 'border-blue-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-400">
          <p>SkillVerse 120 • Learn. Track. Compete. Conquer. • Made with 💜 for learners</p>
        </div>
      </footer>
    </div>
  )
}

// Database icon import
function Database(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
      <path d="M3 12a9 3 0 0 0 18 0"></path>
    </svg>
  )
}
