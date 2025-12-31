'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Gauge, Moon, Sun, User, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // Ne pas afficher le header sur la page login
  if (pathname === '/login') return null

  const isProjectPage = pathname.startsWith('/projects/') && pathname !== '/projects'

  return (
    <header className="sticky top-0 z-50 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-3">
          {isProjectPage ? (
            <Link
              href="/projects"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Projets</span>
            </Link>
          ) : (
            <Link href="/projects" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Gauge className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">COCKPIT</span>
            </Link>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </button>

          {/* User avatar placeholder */}
          <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  )
}
