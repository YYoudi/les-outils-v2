import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Tool } from "@/lib/tools-data"
import { cn } from "@/components/shared/lib/utils"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group block p-6 rounded-lg border bg-card hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {tool.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {tool.description}
      </p>
      <div className="flex items-center text-sm font-medium">
        Essayer <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}
