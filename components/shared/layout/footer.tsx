import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">les-outils.fr</h3>
            <p className="text-sm text-muted-foreground">
              Des outils gratuits pour votre quotidien
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Outils</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/markdown-editor" className="hover:underline">Éditeur Markdown</Link></li>
              <li><Link href="/hash-generator" className="hover:underline">Générateur de Hash</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="hover:underline">Confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <a
              href="https://buymeacoffee.com/yyoudi"
              className="text-sm hover:underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              ☕ Supporter le projet
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Made with ❤️ par Judikael NEDEV</p>
        </div>
      </div>
    </footer>
  )
}
