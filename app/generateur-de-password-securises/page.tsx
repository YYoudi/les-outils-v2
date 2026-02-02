import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Générateur de Mots de Passe Sécurisés",
  description: "Générez des mots de passe forts et sécurisés avec des options personnalisables",
}

export default function GenerateurDePasswordSecurisesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-4">Générateur de Mots de Passe Sécurisés</h1>
      <p className="text-muted-foreground mb-8">
        Générez des mots de passe forts et sécurisés avec des options personnalisables
      </p>

      {/* Les composants métier seront ajoutés par tech-lead-v2 */}
      <div className="max-w-2xl mx-auto">
        <p className="text-sm text-muted-foreground">
          🔨 En développement...
        </p>
      </div>
    </div>
  )
}
