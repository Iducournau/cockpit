'use client'

import { useState } from 'react'
import { Bot, Sparkles, TrendingUp, Globe, FileText, Search, Zap, PenTool, BarChart3, Clock, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

interface Agent {
  icon: LucideIcon
  name: string
  shortDesc: string
  description: string
  version: 'V1' | 'V2' | 'V3' | 'V4'
  inputs: string[]
  outputs: string[]
  trigger: string
}

// Données des agents
const agents: Agent[] = [
  {
    icon: Search,
    name: 'Agent Analyste',
    shortDesc: 'Détection des problèmes SEO',
    description: 'Analyse automatique des données pour identifier les mots-clés orphelins, les cannibalisations entre pages, les baisses de position significatives et les opportunités Quick Wins.',
    version: 'V1',
    inputs: ['Keywords', 'Pages', 'Positions', 'Historique'],
    outputs: ['Liste d\'alertes', 'Quick Wins identifiés', 'Rapport problèmes'],
    trigger: 'Hebdomadaire (après import)',
  },
  {
    icon: FileText,
    name: 'Agent Rapports',
    shortDesc: 'Génération de rapports automatisés',
    description: 'Produit des rapports synthétiques pour le CMO et l\'équipe SEO. Résume les KPIs, les évolutions et les actions recommandées en format lisible.',
    version: 'V1',
    inputs: ['KPIs dashboard', 'Alertes', 'Historique positions'],
    outputs: ['Rapport MD/PDF', 'Email récapitulatif'],
    trigger: 'Hebdo / Mensuel',
  },
  {
    icon: Zap,
    name: 'Agent Stratège',
    shortDesc: 'Recommandations par keyword/page',
    description: 'Génère des plans d\'action personnalisés pour chaque mot-clé ou page prioritaire. Propose des optimisations concrètes basées sur l\'analyse des données.',
    version: 'V2',
    inputs: ['Keyword/Page sélectionné', 'Métriques associées', 'Historique'],
    outputs: ['Plan d\'action', 'Checklist optimisations'],
    trigger: 'À la demande',
  },
  {
    icon: BarChart3,
    name: 'Intent Matcher',
    shortDesc: 'Alignement intention vs contenu',
    description: 'Vérifie que le contenu de chaque page répond bien à l\'intention de recherche du mot-clé assigné. Détecte les désalignements et propose des corrections.',
    version: 'V2',
    inputs: ['Keyword + intention', 'Contenu page assignée'],
    outputs: ['Score alignement', 'Suggestions corrections'],
    trigger: 'À la demande / Import',
  },
  {
    icon: Globe,
    name: 'GEO Auditor',
    shortDesc: 'Score GEO, E-E-A-T, données structurées',
    description: 'Évalue la compatibilité des pages avec les moteurs génératifs (ChatGPT, Perplexity, Claude). Analyse les critères E-E-A-T et la présence de données structurées.',
    version: 'V3',
    inputs: ['URL page', 'Contenu', 'Metadata'],
    outputs: ['Score GEO', 'Rapport E-E-A-T', 'Recommandations'],
    trigger: 'À la demande',
  },
  {
    icon: PenTool,
    name: 'Meta Writer',
    shortDesc: 'Génération title + meta description',
    description: 'Génère des balises title et meta description optimisées pour le SEO et le CTR. Respecte les contraintes de longueur et intègre le mot-clé cible.',
    version: 'V3',
    inputs: ['Keyword cible', 'Contenu page', 'Intent'],
    outputs: ['Title optimisé', 'Meta description', 'Variantes'],
    trigger: 'À la demande',
  },
  {
    icon: TrendingUp,
    name: 'Trend Predictor',
    shortDesc: 'Prédiction évolution positions',
    description: 'Analyse les tendances historiques et les facteurs externes pour prédire l\'évolution des positions. Identifie les risques de baisse et les opportunités de progression.',
    version: 'V4',
    inputs: ['Historique positions', 'Tendances SERP', 'Saisonnalité'],
    outputs: ['Prédictions à 30/90j', 'Alertes tendances'],
    trigger: 'Hebdomadaire',
  },
  {
    icon: Sparkles,
    name: 'Content Optimizer',
    shortDesc: 'Analyse vs top 3 SERP',
    description: 'Compare le contenu d\'une page avec les 3 premiers résultats Google pour le mot-clé cible. Identifie les gaps de contenu et les éléments manquants.',
    version: 'V4',
    inputs: ['Page à analyser', 'Keyword cible', 'Top 3 SERP'],
    outputs: ['Gaps identifiés', 'Sections à ajouter', 'Score compétitif'],
    trigger: 'À la demande',
  },
]

const versions = [
  { id: 'V1', label: 'V1 — MVP', color: 'green' },
  { id: 'V2', label: 'V2 — Post-MVP', color: 'blue' },
  { id: 'V3', label: 'V3 — GEO', color: 'purple' },
  { id: 'V4', label: 'V4 — Prédictif', color: 'orange' },
]

const getVersionStyle = (version: string, active?: boolean) => {
  const styles: Record<string, string> = {
    'V1': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-500/50',
    'V2': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/50',
    'V3': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-500/50',
    'V4': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-500/50'
  }
  return styles[version] || 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
}

export function AgentsTab() {
  const [activeVersion, setActiveVersion] = useState<string | null>(null)

  const filteredAgents = activeVersion
    ? agents.filter(a => a.version === activeVersion)
    : agents

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Bot className="w-6 h-6 text-indigo-500" />
          Description des agents
        </h2>
        <p className="text-slate-500 dark:text-slate-400">Assistants IA pour l&apos;analyse et l&apos;optimisation SEO</p>
      </div>

      {/* Version Filters */}
      <ToggleGroup
        type="single"
        value={activeVersion || ''}
        onValueChange={(value) => setActiveVersion(value || null)}
        className="flex flex-wrap justify-center gap-2"
      >
        {versions.map((version) => {
          const isActive = activeVersion === version.id
          const versionStyles: Record<string, string> = {
            'V1': 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-300 dark:border-green-500/50 hover:bg-green-200/70 hover:text-green-700 dark:hover:bg-green-500/20 dark:hover:text-green-400 data-[state=on]:bg-green-200 dark:data-[state=on]:bg-green-500/30 data-[state=on]:text-green-700 dark:data-[state=on]:text-green-400 data-[state=on]:border-green-400 dark:data-[state=on]:border-green-500/50',
            'V2': 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/50 hover:bg-blue-200/70 hover:text-blue-700 dark:hover:bg-blue-500/20 dark:hover:text-blue-400 data-[state=on]:bg-blue-200 dark:data-[state=on]:bg-blue-500/30 data-[state=on]:text-blue-700 dark:data-[state=on]:text-blue-400 data-[state=on]:border-blue-400 dark:data-[state=on]:border-blue-500/50',
            'V3': 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-500/50 hover:bg-purple-200/70 hover:text-purple-700 dark:hover:bg-purple-500/20 dark:hover:text-purple-400 data-[state=on]:bg-purple-200 dark:data-[state=on]:bg-purple-500/30 data-[state=on]:text-purple-700 dark:data-[state=on]:text-purple-400 data-[state=on]:border-purple-400 dark:data-[state=on]:border-purple-500/50',
            'V4': 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-500/50 hover:bg-orange-200/70 hover:text-orange-700 dark:hover:bg-orange-500/20 dark:hover:text-orange-400 data-[state=on]:bg-orange-200 dark:data-[state=on]:bg-orange-500/30 data-[state=on]:text-orange-700 dark:data-[state=on]:text-orange-400 data-[state=on]:border-orange-400 dark:data-[state=on]:border-orange-500/50',
          }
          return (
            <ToggleGroupItem
              key={version.id}
              value={version.id}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium border transition-all',
                versionStyles[version.id],
                !isActive && 'opacity-80 hover:opacity-100'
              )}
            >
              {version.label}
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredAgents.map((agent) => {
          const Icon = agent.icon
          return (
            <div
              key={agent.name}
              className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-600/20 p-2.5 rounded-lg">
                    <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{agent.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{agent.shortDesc}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getVersionStyle(agent.version)}`}>
                  {agent.version}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {agent.description}
              </p>

              {/* Inputs & Outputs */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2 block">Inputs</span>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.inputs.map((input) => (
                      <span key={input} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {input}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2 block">Outputs</span>
                  <div className="flex flex-wrap gap-1.5">
                    {agent.outputs.map((output) => (
                      <span key={output} className="text-xs px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trigger */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Déclencheur :</span> {agent.trigger}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer info */}
      <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-500/20 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-semibold text-slate-900 dark:text-white">Powered by Claude API</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Tous les agents utilisent l&apos;API Claude d&apos;Anthropic pour fournir des analyses
          intelligentes et des recommandations personnalisées.
        </p>
      </div>
    </div>
  )
}
