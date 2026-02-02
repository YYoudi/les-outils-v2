import { Metadata } from "next"
import { Shield } from "lucide-react"
import { PasswordGenerator } from "@/components/tools/generateur-de-password-securises/password-generator"

export const metadata: Metadata = {
  title: "Générateur de Mots de Passe Sécurisés | Outils Gratuits",
  description: "Générez des mots de passe forts et sécurisés avec des options personnalisables. Protection maximale pour vos comptes en ligne.",
}

export default function GenerateurDePasswordSecurisesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle grid background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container py-16 px-4 relative">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in slide-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 mb-6 inline-flex">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Sécurité Maximale</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Générateur de Mots<br className="hidden md:inline" />
            de Passe Sécurisés
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Créez des mots de passe <span className="text-cyan-400 font-semibold">ultra-sécurisés</span> et <span className="text-emerald-400 font-semibold">uniques</span> en un clic.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Génération cryptographique</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Stockage local</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '1s' }} />
              <span>Zéro tracking</span>
            </div>
          </div>
        </div>

        {/* Main Component */}
        <div className="animate-in slide-in-up" style={{ animationDelay: '0.2s' }}>
          <PasswordGenerator />
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto animate-in slide-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Questions Fréquentes
            </h2>
            <p className="text-slate-400">
              Tout ce que vous devez savoir sur la sécurité des mots de passe
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                question: "Qu'est-ce qu'un mot de passe fort ?",
                answer: "Un mot de passe fort est long (minimum 12 caractères), unique pour chaque compte, et contient un mélange varié de lettres majuscules, minuscules, chiffres et symboles. Notre générateur utilise des méthodes cryptographiques pour garantir une entropie maximale.",
                icon: "🛡️"
              },
              {
                question: "Est-ce que mes mots de passe sont stockés ?",
                answer: "Absolument pas. Tous les mots de passe sont générés directement dans votre navigateur en utilisant l'API cryptographique de votre appareil. Nous ne stockons, ne transmettons et ne sauvegardons aucune information. Vos mots de passe ne quittent jamais votre appareil.",
                icon: "🔒"
              },
              {
                question: "Pourquoi utiliser un générateur de mots de passe ?",
                answer: "Les humains sont mauvais pour créer des mots de passe aléatoires. Nous utilisons des patterns prévisibles. Ce générateur utilise le hasard cryptographique pur, éliminant tout biais humain et créant des mots de passe mathématiquement impossibles à deviner.",
                icon: "🎲"
              },
              {
                question: "Quelle longueur de mot de passe choisir ?",
                answer: "Pour une sécurité optimale, nous recommandons 20+ caractères. Nos mots de passe de 20 caractères avec symboles ont une entropie de 136 bits, ce qui les rend immunisés contre les attaques par force brute, même avec la puissance de calcul actuelle.",
                icon: "📏"
              },
              {
                question: "Comment mémoriser ces mots de passe complexes ?",
                answer: "Ne les mémorisez pas ! Utilisez un gestionnaire de mots de passe sécurisé comme Bitwarden, 1Password, ou le gestionnaire intégré de votre navigateur. Stockez un seul mot de passe maître fort et laissez le gestionnaire faire le reste.",
                icon: "🗝️"
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="animate-in slide-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <details className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden hover:border-cyan-500/30 transition-all">
                  <summary className="flex items-center gap-4 p-6 cursor-pointer hover:bg-slate-800/30 transition-colors">
                    <span className="text-3xl">{faq.icon}</span>
                    <span className="flex-1 font-semibold text-lg">{faq.question}</span>
                    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-400 leading-relaxed pl-12">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 text-center animate-in fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-slate-900/50 border border-slate-700/50">
            <div className="flex items-center gap-2 text-emerald-400">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Sécurisé localement</span>
            </div>
            <div className="w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-cyan-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium">Zéro stockage</span>
            </div>
            <div className="w-px h-6 bg-slate-700" />
            <div className="flex items-center gap-2 text-blue-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Cryptographique</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
