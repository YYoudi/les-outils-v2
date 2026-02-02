import Link from "next/link"
import { ThemeToggle } from "@/components/shared/theme/theme-toggle"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          les-outils.fr
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm hover:underline">
            Outils
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
