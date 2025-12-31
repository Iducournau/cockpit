'use client'

import { Building2, Database, Globe, Server, type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface StackLayer {
  layer: string
  icon: LucideIcon
  color: 'indigo' | 'emerald' | 'amber' | 'purple'
  items: { name: string; desc: string }[]
}

// Données de la stack - à personnaliser par projet
const stack: StackLayer[] = [
  {
    layer: 'Frontend',
    icon: Globe,
    color: 'indigo',
    items: [
      { name: 'Next.js 14', desc: 'Framework React' },
      { name: 'Tailwind CSS', desc: 'Styling' },
      { name: 'shadcn/ui', desc: 'Composants UI' },
      { name: 'Lucide', desc: 'Icônes' },
    ],
  },
  {
    layer: 'Backend',
    icon: Server,
    color: 'emerald',
    items: [
      { name: 'Next.js API Routes', desc: 'Endpoints REST' },
      { name: 'Supabase Auth', desc: 'Authentification' },
      { name: 'Claude API', desc: 'Agents IA' },
    ],
  },
  {
    layer: 'Base de données',
    icon: Database,
    color: 'amber',
    items: [
      { name: 'Supabase (PostgreSQL)', desc: 'BDD principale' },
      { name: 'Row Level Security', desc: 'Sécurité' },
      { name: 'Realtime', desc: 'Sync temps réel' },
    ],
  },
  {
    layer: 'Infrastructure',
    icon: Building2,
    color: 'purple',
    items: [
      { name: 'Vercel', desc: 'Hébergement (0€)' },
      { name: 'GitHub', desc: 'Versioning' },
      { name: 'n8n (V2)', desc: 'Automatisation' },
    ],
  },
]

const headerColors: Record<string, string> = {
  indigo: 'bg-indigo-600',
  emerald: 'bg-emerald-600',
  amber: 'bg-amber-600',
  purple: 'bg-purple-600',
}

export function ArchitectureTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-indigo-500" />
          Stack Technique
        </h2>
        <p className="text-slate-500 dark:text-slate-400">Architecture et choix technologiques</p>
      </div>

      {/* Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stack.map((layer) => {
          const Icon = layer.icon
          return (
            <Card key={layer.layer} className="overflow-hidden">
              <CardHeader className={`${headerColors[layer.color]} p-4`}>
                <CardTitle className="text-white font-bold flex items-center gap-3 text-base">
                  <Icon className="w-5 h-5" />
                  {layer.layer}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {layer.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-slate-900 dark:text-white font-medium">{item.name}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Coût */}
      <Card className="bg-gradient-to-r from-emerald-50 dark:from-emerald-950/50 to-slate-50 dark:to-slate-900 border-emerald-200 dark:border-emerald-500/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Coût Infrastructure</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Free tiers uniquement</p>
            </div>
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">0€</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
