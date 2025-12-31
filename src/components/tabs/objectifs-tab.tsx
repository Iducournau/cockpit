'use client'

import { Database, Search, Calendar, Brain, Bell, CheckCircle2, Circle, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Données du contenu - à personnaliser
const content = {
  probleme: "Les équipes SEO jonglent entre 10+ outils sans vue consolidée. Résultat : perte de temps à croiser les données, difficulté à prioriser, définir des stratégies, opportunités manquées.",
  solution: "OGS centralise toutes les données SEO en un seul endroit, avec des priorités claires et un historique actionnable.",
  perimetre: "Module intégré à Hub, dédié au suivi SEO. Inclut : import de données, priorisation des mots-clés, dashboards, alertes. Exclut : rédaction de contenu, actions techniques on-site.",
}

// KPIs à valider par CMO/CPO
const kpis = [
  {
    objective: 'Centraliser les données',
    metric: 'Sources connectées',
    target: '5+',
    validated: false,
  },
  {
    objective: 'Gagner du temps',
    metric: 'Temps de reporting',
    target: '-80%',
    validated: false,
  },
  {
    objective: 'Améliorer la visibilité organique',
    metric: 'Score SEO moyen',
    target: '80/100',
    validated: false,
  },

  {
  objective: 'Positions dominantes',
  metric: 'Mots-clés en Top 3',
  target: '> 10',
  validated: false,
},
{
  objective: 'Présence première page',
  metric: 'Mots-clés en Top 10',
  target: '> 50',
  validated: false,
},
]

const pillars = [
  {
    icon: Database,
    title: 'Centraliser',
    description: 'Toutes les données SEO en un seul endroit',
    color: 'bg-blue-500',
  },
  {
    icon: Search,
    title: 'Identifier',
    description: 'Opportunités et problèmes détectés auto',
    color: 'bg-amber-500',
  },
  {
    icon: Calendar,
    title: 'Planifier',
    description: 'Élaborer une stratégie',
    color: 'bg-emerald-500',
  },
  {
    icon: Brain,
    title: 'Prédire',
    description: 'IA pour anticiper et recommander',
    color: 'bg-purple-500',
  },
  {
    icon: Bell,
    title: 'Automatiser',
    description: 'Rapports et alertes sans effort manuel',
    color: 'bg-rose-500',
  },
]

export function ObjectifsTab() {
  return (
    <div className="space-y-8">
      {/* Outline - Problème & Solution */}
      <div className="space-y-4">
        {/* Problème */}
        <div className="border-l-4 border-red-500 bg-red-500/5 dark:bg-red-500/10 rounded-r-lg p-5">
          <h3 className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide mb-2">
            Problème
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {content.probleme}
          </p>
        </div>

        {/* Solution */}
        <div className="border-l-4 border-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-r-lg p-5">
          <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-2">
            Solution
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {content.solution}
          </p>
        </div>

        {/* Périmètre */}
        <div className="border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-r-lg p-5">
          <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2">
            Périmètre
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {content.perimetre}
          </p>
        </div>
      </div>

      {/* Piliers - Comment on résout */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Comment on résout ce problème
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card key={pillar.title} className="bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Mesurer le succès - KPIs */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Mesurer le succès
          </h3>
          <span className="text-xs bg-amber-500/20 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full">
            À valider CMO/CPO
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Objectif</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Métrique</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Cible</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Validé</th>
              </tr>
            </thead>
            <tbody>
              {kpis.map((kpi, index) => (
                <tr key={index} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{kpi.objective}</td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{kpi.metric}</td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-medium bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded">
                      {kpi.target}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {kpi.validated ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
