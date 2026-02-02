export interface Tool {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  category: string
  tags: string[]
  status: "published" | "draft"
}

export const tools: Tool[] = [
  {
    id: "markdown-editor",
    slug: "markdown-editor",
    title: "Éditeur Markdown",
    description: "Éditez et prévisualisez vos fichiers Markdown en temps réel",
    icon: "FileText",
    category: "productivity",
    tags: ["markdown", "editor", "preview"],
    status: "published"
  },
  {
    id: "hash-generator",
    slug: "hash-generator",
    title: "Générateur de Hash",
    description: "Générez des hash MD5, SHA-1, SHA-256 pour vos textes",
    icon: "Hash",
    category: "security",
    tags: ["hash", "security", "encryption"],
    status: "published"
  }
]
