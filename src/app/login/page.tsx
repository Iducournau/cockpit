'use client'

import { useRouter } from 'next/navigation'
import { Gauge, Mail } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // MVP: Redirection directe sans auth réelle
    router.push('/projects')
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4">
            <Gauge className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">COCKPIT</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Outil de pilotage de projets YouSchool
          </p>
        </div>

        {/* Login form */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="prenom@youschool.fr"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              Recevoir le lien de connexion
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 dark:text-slate-500 mt-4">
            Un lien magique sera envoy&eacute; &agrave; votre adresse email
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-6">
          COCKPIT &bull; YouSchool &bull; Acc&egrave;s r&eacute;serv&eacute;
        </p>
      </div>
    </div>
  )
}
