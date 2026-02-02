import { Metadata } from "next"
import { PasswordGenerator } from "@/components/tools/generateur-de-mots-de-passe-securises/password-generator"

export const metadata: Metadata = {
  title: "Générateur de Mots de Passe Sécurisés",
  description: "Générez des mots de passe forts et sécurisés avec des options personnalisables (longueur, symboles, chiffres, majuscules)",
}

export default function GenerateurDeMotsDePasseSecurisesPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Générateur de Mots de Passe Sécurisés</h1>
        <p className="text-muted-foreground">
          Générez des mots de passe forts et sécurisés avec des options personnalisables (longueur, symboles, chiffres, majuscules)
        </p>
      </div>

      <PasswordGenerator />

      {/* FAQ Optionnelle */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">Qu'est-ce qu'un mot de passe fort ?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Un mot de passe fort est long (au moins 12 caractères), unique, et contient un mélange de lettres majuscules, minuscules, chiffres et symboles.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">Est-ce que mes mots de passe sont stockés ?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Non, tous les mots de passe sont générés localement dans votre navigateur. Nous ne stockons aucune information.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">Comment puis-je mémoriser mes mots de passe ?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Utilisez un gestionnaire de mots de passe sécurisé comme Bitwarden, 1Password, ou le gestionnaire de votre navigateur.
            </p>
          </details>
        </div>
      </section>
    </div>
  )
}
