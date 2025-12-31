'use client'

import { useState } from 'react'
import {
  Crown, Wrench, Users, Target, DollarSign, CheckCircle2,
  BarChart3, Mail, TrendingUp, Lightbulb, GitBranch, Database, Code,
  Brain, Rocket, Settings, MessageSquare, Upload, Search, AlertTriangle,
  FileText, Zap, Sparkles, LineChart, Globe, RefreshCw, Calendar,
  type LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

// ============================================
// TYPES
// ============================================
interface Phase {
  id: string
  name: string
  color: string
  icon: LucideIcon
}

interface Task {
  id: number
  phase: string
  text: string
  icon: LucideIcon
  tool?: string
  agent?: string
  version?: string
}

interface Lane {
  id: string
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  headerColor: string
  isYou?: boolean
  tasks: Task[]
}

// ============================================
// DATA
// ============================================
const phases: Phase[] = [
  { id: 'strategie', name: 'Stratégie', color: 'indigo', icon: Target },
  { id: 'build', name: 'Build', color: 'cyan', icon: Wrench },
  { id: 'exploitation', name: 'Exploitation', color: 'amber', icon: Settings },
  { id: 'analyse', name: 'Analyse', color: 'green', icon: BarChart3 },
  { id: 'reporting', name: 'Reporting', color: 'red', icon: FileText }
]

const lanes: Lane[] = [
  {
    id: 'cmo',
    title: 'CMO / CPO',
    subtitle: 'Décideur stratégique',
    icon: Crown,
    color: 'bg-indigo-950/50 border-indigo-500/30',
    headerColor: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
    tasks: [
      { id: 1, phase: 'strategie', text: 'Définir objectifs SEO annuels', icon: Target },
      { id: 2, phase: 'strategie', text: 'Allouer budget & ressources', icon: DollarSign },
      { id: 3, phase: 'strategie', text: 'Valider mots-clés P0/P1', icon: CheckCircle2 },
      { id: 4, phase: 'analyse', text: 'Consulter dashboard exécutif', icon: BarChart3 },
      { id: 5, phase: 'analyse', text: 'Suivre prédictions de positions', icon: LineChart, agent: 'Trend Predictor', version: 'V4' },
      { id: 6, phase: 'analyse', text: 'Évaluer visibilité GEO/IA', icon: Globe, agent: 'GEO Auditor', version: 'V3' },
      { id: 7, phase: 'reporting', text: 'Recevoir rapport mensuel', icon: Mail, agent: 'Rapports', version: 'V1' },
      { id: 8, phase: 'reporting', text: 'Arbitrer ajustements stratégiques', icon: TrendingUp }
    ]
  },
  {
    id: 'builder',
    title: 'Product Builder',
    subtitle: 'Toi • Conception & développement',
    icon: Wrench,
    color: 'bg-cyan-950/50 border-cyan-500/30',
    headerColor: 'bg-gradient-to-r from-cyan-600 to-cyan-500',
    isYou: true,
    tasks: [
      { id: 10, phase: 'strategie', text: 'Traduire besoins → user stories', icon: Lightbulb },
      { id: 11, phase: 'strategie', text: 'Prioriser backlog produit', icon: GitBranch },
      { id: 12, phase: 'build', text: 'Concevoir modèle de données', icon: Database, tool: 'Supabase' },
      { id: 13, phase: 'build', text: 'Développer interface utilisateur', icon: Code, tool: 'Next.js' },
      { id: 14, phase: 'build', text: 'Créer agents IA (prompts)', icon: Brain, tool: 'Claude API' },
      { id: 15, phase: 'build', text: 'Déployer & monitorer', icon: Rocket, tool: 'Vercel' },
      { id: 40, phase: 'build', text: 'Configurer workflows automatisation', icon: RefreshCw, tool: 'n8n / Make', version: 'V2' },
      { id: 16, phase: 'exploitation', text: 'Améliorer UX selon feedback', icon: Settings },
      { id: 17, phase: 'analyse', text: 'Optimiser dashboards & KPIs', icon: BarChart3 },
      { id: 18, phase: 'reporting', text: 'Collecter feedback utilisateurs', icon: MessageSquare },
      { id: 19, phase: 'reporting', text: 'Planifier itérations', icon: GitBranch }
    ]
  },
  {
    id: 'seo',
    title: 'Équipe SEO',
    subtitle: 'Utilisateurs quotidiens',
    icon: Users,
    color: 'bg-amber-950/50 border-amber-500/30',
    headerColor: 'bg-gradient-to-r from-amber-500 to-amber-400',
    tasks: [
      { id: 20, phase: 'strategie', text: 'Proposer mots-clés stratégiques', icon: Target },
      { id: 21, phase: 'strategie', text: 'Identifier opportunités marché', icon: Search },
      { id: 22, phase: 'exploitation', text: 'Importer données sources (manuel)', icon: Upload, tool: 'CSV → OGS' },
      { id: 41, phase: 'exploitation', text: 'Bénéficier imports automatiques', icon: RefreshCw, tool: 'n8n / Make', version: 'V2' },
      { id: 23, phase: 'exploitation', text: 'Assigner priorités (P0→P3)', icon: Target },
      { id: 24, phase: 'exploitation', text: 'Lier mots-clés aux pages', icon: CheckCircle2 },
      { id: 25, phase: 'analyse', text: 'Consulter dashboard opérationnel', icon: BarChart3 },
      { id: 26, phase: 'analyse', text: 'Traiter alertes & Quick Wins', icon: AlertTriangle, agent: 'Analyste', version: 'V1' },
      { id: 27, phase: 'analyse', text: 'Vérifier alignement intent/page', icon: Zap, agent: 'Intent Matcher', version: 'V2' },
      { id: 28, phase: 'analyse', text: 'Auditer pages pour GEO', icon: Globe, agent: 'GEO Auditor', version: 'V3' },
      { id: 29, phase: 'analyse', text: 'Optimiser pages prioritaires', icon: FileText, agent: 'Stratège', version: 'V2' },
      { id: 30, phase: 'analyse', text: 'Documenter actions réalisées', icon: CheckCircle2 },
      { id: 31, phase: 'reporting', text: 'Demander analyses IA', icon: Brain, agent: 'Analyste', version: 'V1' },
      { id: 32, phase: 'reporting', text: 'Consulter prédictions évolution', icon: LineChart, agent: 'Trend Predictor', version: 'V4' },
      { id: 33, phase: 'reporting', text: 'Partager résultats au CMO', icon: TrendingUp }
    ]
  }
]

// ============================================
// HELPERS
// ============================================
const getPhaseColor = (phase: string) => {
  const colors: Record<string, string> = {
    strategie: 'bg-indigo-100 dark:bg-indigo-500/20 border-indigo-300 dark:border-indigo-500/50 text-indigo-700 dark:text-indigo-400',
    build: 'bg-cyan-100 dark:bg-cyan-500/20 border-cyan-300 dark:border-cyan-500/50 text-cyan-700 dark:text-cyan-400',
    exploitation: 'bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/50 text-amber-700 dark:text-amber-400',
    analyse: 'bg-green-100 dark:bg-green-500/20 border-green-300 dark:border-green-500/50 text-green-700 dark:text-green-400',
    reporting: 'bg-red-100 dark:bg-red-500/20 border-red-300 dark:border-red-500/50 text-red-700 dark:text-red-400'
  }
  return colors[phase] || 'bg-gray-100 dark:bg-gray-500/20 border-gray-300 dark:border-gray-500/50'
}

const getPhaseHeaderColor = (color: string) => {
  const colors: Record<string, string> = {
    indigo: 'bg-indigo-600',
    cyan: 'bg-cyan-600',
    amber: 'bg-amber-600',
    green: 'bg-green-600',
    red: 'bg-red-600'
  }
  return colors[color] || 'bg-gray-600'
}

const getAgentStyle = (version: string) => {
  const styles: Record<string, string> = {
    'V1': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-500/30',
    'V2': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/30',
    'V3': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-500/30',
    'V4': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-500/30'
  }
  return styles[version] || 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400'
}

const getLaneColor = (laneId: string) => {
  const colors: Record<string, string> = {
    cmo: 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-500/30',
    builder: 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-500/30',
    seo: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-500/30'
  }
  return colors[laneId] || 'bg-slate-50 dark:bg-slate-900/50'
}

// ============================================
// COMPONENT
// ============================================
export function RolesTab() {
  const [activePhase, setActivePhase] = useState<string | null>(null)
  const [showFutureAgents, setShowFutureAgents] = useState(true)

  const shouldShowTask = (task: Task) => {
    if (!task.version) return true
    if (showFutureAgents) return true
    return task.version === 'V1'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Users className="w-6 h-6 text-indigo-500" />
          Swimlane des responsabilités
        </h2>
        <p className="text-slate-500 dark:text-slate-400">Qui fait quoi, à quelle étape ? • Cliquez sur une phase pour filtrer</p>
      </div>

      {/* Phase Legend + Toggle agents */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <ToggleGroup
          type="single"
          value={activePhase || ''}
          onValueChange={(value) => setActivePhase(value || null)}
          className="flex flex-wrap justify-center gap-2"
        >
          {phases.map((phase) => {
            const PhaseIcon = phase.icon
            const isActive = activePhase === phase.id
            const phaseStyles: Record<string, string> = {
              'strategie': 'bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-500/50 hover:bg-indigo-200/70 hover:text-indigo-700 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-400 data-[state=on]:bg-indigo-200 dark:data-[state=on]:bg-indigo-500/30 data-[state=on]:text-indigo-700 dark:data-[state=on]:text-indigo-400 data-[state=on]:border-indigo-400 dark:data-[state=on]:border-indigo-500/50',
              'build': 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/50 hover:bg-cyan-200/70 hover:text-cyan-700 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400 data-[state=on]:bg-cyan-200 dark:data-[state=on]:bg-cyan-500/30 data-[state=on]:text-cyan-700 dark:data-[state=on]:text-cyan-400 data-[state=on]:border-cyan-400 dark:data-[state=on]:border-cyan-500/50',
              'exploitation': 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-500/50 hover:bg-amber-200/70 hover:text-amber-700 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 data-[state=on]:bg-amber-200 dark:data-[state=on]:bg-amber-500/30 data-[state=on]:text-amber-700 dark:data-[state=on]:text-amber-400 data-[state=on]:border-amber-400 dark:data-[state=on]:border-amber-500/50',
              'analyse': 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-300 dark:border-green-500/50 hover:bg-green-200/70 hover:text-green-700 dark:hover:bg-green-500/20 dark:hover:text-green-400 data-[state=on]:bg-green-200 dark:data-[state=on]:bg-green-500/30 data-[state=on]:text-green-700 dark:data-[state=on]:text-green-400 data-[state=on]:border-green-400 dark:data-[state=on]:border-green-500/50',
              'reporting': 'bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-300 dark:border-red-500/50 hover:bg-red-200/70 hover:text-red-700 dark:hover:bg-red-500/20 dark:hover:text-red-400 data-[state=on]:bg-red-200 dark:data-[state=on]:bg-red-500/30 data-[state=on]:text-red-700 dark:data-[state=on]:text-red-400 data-[state=on]:border-red-400 dark:data-[state=on]:border-red-500/50',
            }
            return (
              <ToggleGroupItem
                key={phase.id}
                value={phase.id}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium border transition-all flex items-center gap-2',
                  phaseStyles[phase.id],
                  !isActive && 'opacity-80 hover:opacity-100'
                )}
              >
                <PhaseIcon className="w-4 h-4" />
                <span>{phase.name}</span>
              </ToggleGroupItem>
            )
          })}
        </ToggleGroup>

        {/* Séparateur */}
        <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-2" />

        {/* Toggle future agents - secondary style */}
        <button
          onClick={() => setShowFutureAgents(!showFutureAgents)}
          className={cn(
            'px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2',
            showFutureAgents
              ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'
          )}
        >
          <Sparkles className="w-3 h-3" />
          {showFutureAgents ? 'Masquer futurs agents' : 'Afficher futurs agents'}
        </button>
      </div>

      {/* Swimlane Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Phase Headers */}
          <div className="grid grid-cols-6 gap-2 mb-3">
            <div className="col-span-1" />
            {phases.map((phase) => {
              const PhaseIcon = phase.icon
              return (
                <div
                  key={phase.id}
                  className={cn(
                    getPhaseHeaderColor(phase.color),
                    'text-white text-center py-2 px-3 rounded-lg font-semibold text-sm transition-opacity flex items-center justify-center gap-1.5',
                    activePhase && activePhase !== phase.id ? 'opacity-30' : ''
                  )}
                >
                  <PhaseIcon className="w-4 h-4" />
                  {phase.name}
                </div>
              )
            })}
          </div>

          {/* Lanes */}
          {lanes.map((lane) => {
            const LaneIcon = lane.icon
            return (
              <div key={lane.id} className="grid grid-cols-6 gap-2 mb-3">
                {/* Lane Header */}
                <div className={cn(getLaneColor(lane.id), 'border rounded-lg p-3 flex items-center gap-2', lane.isYou && 'border-cyan-400 dark:border-cyan-400/50')}>
                  <div className={cn(lane.headerColor, 'p-2 rounded-lg')}>
                    <LaneIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-900 dark:text-white">{lane.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{lane.subtitle}</div>
                  </div>
                </div>

                {/* Tasks per phase */}
                {phases.map((phase) => {
                  const phaseTasks = lane.tasks.filter(t =>
                    t.phase === phase.id && shouldShowTask(t)
                  )
                  const isActivePhase = !activePhase || activePhase === phase.id

                  return (
                    <div
                      key={`${lane.id}-${phase.id}`}
                      className={cn(
                        'bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg p-2 space-y-1.5 transition-opacity min-h-[80px]',
                        !isActivePhase && 'opacity-20'
                      )}
                    >
                      {phaseTasks.length === 0 ? (
                        <div className="text-slate-400 dark:text-slate-600 text-xs text-center py-2">—</div>
                      ) : (
                        phaseTasks.map((task) => {
                          const TaskIcon = task.icon
                          return (
                            <div
                              key={task.id}
                              className={cn(
                                'text-[11px] p-1.5 rounded border flex items-start gap-1.5',
                                task.version
                                  ? 'border-dashed border-slate-300 dark:border-slate-600'
                                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50'
                              )}
                            >
                              <TaskIcon className="w-3 h-3 text-slate-500 dark:text-slate-400 mt-0.5 shrink-0" />
                              <div className="flex-1">
                                <span className="text-slate-700 dark:text-slate-300">{task.text}</span>
                                {task.tool && (
                                  <span className="ml-1 text-[9px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-1 py-0.5 rounded">
                                    {task.tool}
                                  </span>
                                )}
                                {task.agent && (
                                  <span className={cn('ml-1 text-[9px] px-1 py-0.5 rounded border', getAgentStyle(task.version || 'V1'))}>
                                    {task.agent}
                                  </span>
                                )}
                              </div>
                            </div>
                          )
                        })
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      {/* Cycle de vie */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-4 border-t border-slate-200 dark:border-slate-800">
        <span className="font-medium text-slate-600 dark:text-slate-400">Cycle de vie du projet</span>
        {phases.map((phase, i) => (
          <span key={phase.id} className="flex items-center gap-2">
            <span className={cn('px-2 py-1 rounded text-xs', getPhaseColor(phase.id))}>
              {phase.name}
            </span>
            {i < phases.length - 1 && <span className="text-slate-400 dark:text-slate-600">→</span>}
          </span>
        ))}
        <span className="text-slate-400 dark:text-slate-600">↻</span>
        <span className="text-slate-500 text-xs">Itération</span>
      </div>
    </div>
  )
}
