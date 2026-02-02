"use client"

import { useState } from "react"
import { Copy, RefreshCw, Shield, Check } from "lucide-react"

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
  const [copied, setCopied] = useState(false)
  const [options, setOptions] = useState<PasswordOptions>({
    length: 20,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true
  })
  const [strength, setStrength] = useState(0)

  const handleCheckboxChange = (key: keyof PasswordOptions, checked: boolean) => {
    setOptions({ ...options, [key]: checked })
  }

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

    // Calculate strength
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
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getStrengthColor = () => {
    if (strength <= 1) return "from-red-500 to-red-600"
    if (strength === 2) return "from-orange-500 to-orange-600"
    if (strength === 3) return "from-yellow-500 to-yellow-600"
    return "from-emerald-400 to-emerald-600"
  }

  const getStrengthLabel = () => {
    if (strength <= 1) return "Faible"
    if (strength === 2) return "Moyen"
    if (strength === 3) return "Fort"
    return "Excellent"
  }

  return (
    <div className="space-y-6">
      {/* Password Display Card */}
      <div className="relative animate-in slide-in-up">
        {/* Border Beam Effect */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-xl opacity-20 blur-sm" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-emerald-400/50 rounded-xl opacity-30" />

        <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg blur-sm" />
              <input
                type="text"
                value={password}
                readOnly
                placeholder="Votre mot de passe sécurisé"
                className="relative w-full bg-slate-950/50 border border-slate-600/50 rounded-lg px-4 py-4 font-mono text-xl tracking-wider text-center"
                style={{ fontFamily: '"Space Mono", monospace', letterSpacing: '0.05em' }}
              />
            </div>

            <button
              onClick={copyToClipboard}
              disabled={!password}
              className={`relative px-6 py-4 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed border ${
                copied
                  ? 'bg-emerald-600 border-emerald-500 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-cyan-400/30 text-white hover:scale-105 active:scale-95'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Copié !
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copier
                </>
              )}
            </button>

            <button
              onClick={generatePassword}
              className="relative px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 rounded-lg font-medium transition-all border border-emerald-400/30 text-white hover:scale-105 active:scale-95"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Générer
            </button>
          </div>

          {/* Strength Indicator */}
          {password && (
            <div className="mt-6 animate-in slide-in-up">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">Force du mot de passe :</span>
                </div>
                <span className={`text-sm font-bold bg-gradient-to-r ${getStrengthColor()} bg-clip-text text-transparent transition-all`}>
                  {getStrengthLabel()}
                </span>
              </div>

              <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div
                  className={`h-full bg-gradient-to-r ${getStrengthColor()} relative transition-all duration-500 ease-out`}
                  style={{ width: `${(strength / 4) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Options Card */}
      <div className="relative animate-in slide-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl blur-sm" />
        <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Options de sécurité
          </h3>

          {/* Length Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">Longueur du mot de passe</label>
              <span className="text-2xl font-bold text-cyan-400">
                {options.length}
              </span>
            </div>
            <input
              type="range"
              min="8"
              max="128"
              value={options.length}
              onChange={(e) => setOptions({ ...options, length: parseInt(e.target.value) })}
              className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-cyan-400 [&::-webkit-slider-thumb]:to-emerald-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-slate-900"
            />
          </div>

          {/* Checkboxes Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { key: 'includeLowercase', label: 'Minuscules (a-z)', icon: 'a' },
              { key: 'includeUppercase', label: 'Majuscules (A-Z)', icon: 'A' },
              { key: 'includeNumbers', label: 'Chiffres (0-9)', icon: '0' },
              { key: 'includeSymbols', label: 'Symboles (!@#$)', icon: '#' }
            ].map((item, index) => (
              <label
                key={item.key}
                className={`relative p-4 rounded-lg border cursor-pointer transition-all animate-in slide-in-up ${
                  options[item.key as keyof PasswordOptions]
                    ? 'bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/50'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={options[item.key as keyof PasswordOptions] as boolean}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(item.key as keyof PasswordOptions, e.target.checked)}
                      className="w-5 h-5 rounded border-slate-600 text-cyan-500 focus:ring-cyan-500/50"
                    />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded bg-slate-900/50 font-mono text-cyan-400 font-bold">
                    {item.icon}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
