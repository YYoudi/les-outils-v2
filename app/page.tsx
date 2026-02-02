import { tools } from "@/lib/tools-data"
import { ToolCard } from "@/components/shared/sections/tool-card"

export default function HomePage() {
  return (
    <div className="container py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          les-outils.fr
        </h1>
        <p className="text-xl text-muted-foreground">
          Des outils gratuits pour votre quotidien
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </section>
    </div>
  )
}
