"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Copy, RefreshCw } from "lucide-react"

const CHARS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
}

interface PasswordOptions {
  length: number
  includeLowercase: boolean
  includeUppercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

export function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true
  })
  const [strength, setStrength] = useState(0)

  const generatePassword = () => {
    let charset = ""
    if (options.includeLowercase) charset += CHARS.lowercase
    if (options.includeUppercase) charset += CHARS.uppercase
    if (options.includeNumbers) charset += CHARS.numbers
    if (options.includeSymbols) charset += CHARS.symbols

    if (charset === "") {
      setPassword("")
      setStrength(0)
      return
    }

    let newPassword = ""
    const array = new Uint32Array(options.length)
    crypto.getRandomValues(array)

    for (let i = 0; i < options.length; i++) {
      newPassword += charset[array[i] % charset.length]
    }

    setPassword(newPassword)

    // Calculate strength (0-4)
    let strengthScore = 0
    if (options.length >= 12) strengthScore++
    if (options.length >= 16) strengthScore++
    if (options.includeLowercase && options.includeUppercase) strengthScore++
    if (options.includeNumbers) strengthScore++
    if (options.includeSymbols) strengthScore++
    setStrength(Math.min(strengthScore, 4))
  }

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password)
    }
  }

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500"
    if (strength === 2) return "bg-orange-500"
    if (strength === 3) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getStrengthLabel = () => {
    if (strength <= 1) return "Faible"
    if (strength === 2) return "Moyen"
    if (strength === 3) return "Fort"
    return "Très fort"
  }

  return (
    <div className="space-y-6">
      {/* Password Display */}
      <Card className="p-6">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={password}
            readOnly
            placeholder="Votre mot de passe apparaîtra ici"
            className="font-mono text-lg"
          />
          <Button
            onClick={copyToClipboard}
            disabled={!password}
            size="icon"
            variant="outline"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            onClick={generatePassword}
            size="icon"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        {password && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span>Force du mot de passe :</span>
              <span className="font-medium">{getStrengthLabel()}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getStrengthColor()} transition-all`}
                style={{ width: `${(strength / 4) * 100}%` }}
              />
            </div>
          </div>
        )}
      </Card>

      {/* Options */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Options</h3>

        <div className="space-y-4">
          <div>
            <Label htmlFor="length">Longueur : {options.length}</Label>
            <Input
              id="length"
              type="range"
              min="8"
              max="128"
              value={options.length}
              onChange={(e) => setOptions({ ...options, length: parseInt(e.target.value) })}
              className="mt-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="lowercase"
                checked={options.includeLowercase}
                onChange={(e) => setOptions({ ...options, includeLowercase: e.target.checked })}
              />
              <Label htmlFor="lowercase">Minuscules (a-z)</Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="uppercase"
                checked={options.includeUppercase}
                onChange={(e) => setOptions({ ...options, includeUppercase: e.target.checked })}
              />
              <Label htmlFor="uppercase">Majuscules (A-Z)</Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="numbers"
                checked={options.includeNumbers}
                onChange={(e) => setOptions({ ...options, includeNumbers: e.target.checked })}
              />
              <Label htmlFor="numbers">Chiffres (0-9)</Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="symbols"
                checked={options.includeSymbols}
                onChange={(e) => setOptions({ ...options, includeSymbols: e.target.checked })}
              />
              <Label htmlFor="symbols">Symboles (!@#$%...)</Label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
