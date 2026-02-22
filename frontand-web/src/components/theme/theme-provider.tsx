// Importa funções necessárias do React
import { createContext, useContext, useEffect, useState } from "react"

// Define os tipos possíveis de tema
// "dark"  → tema escuro
// "light" → tema claro
// "system" → usa o tema do sistema operacional
type Theme = "dark" | "light" | "system"

// Define as propriedades aceitas pelo ThemeProvider
type ThemeProviderProps = {
  children: React.ReactNode // Componentes filhos que terão acesso ao tema
  defaultTheme?: Theme      // Tema padrão caso não exista no localStorage
  storageKey?: string       // Chave usada para salvar no localStorage
}

// Define o formato do contexto
type ThemeProviderState = {
  theme: Theme                 // Tema atual
  setTheme: (theme: Theme) => void // Função para alterar o tema
}

// Estado inicial do contexto
// Evita erro caso o hook seja usado fora do provider
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

// Criação do contexto
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

// Componente Provider responsável por gerenciar o tema
export function ThemeProvider({
  children,
  defaultTheme = "system", // Se não passar nada, usa "system"
  storageKey = "vite-ui-theme", // Chave padrão no localStorage
  ...props
}: ThemeProviderProps) {

  // Estado que guarda o tema atual
  // Primeiro tenta pegar do localStorage
  // Se não existir, usa o defaultTheme
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  // useEffect roda sempre que o tema mudar
  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove classes anteriores
    root.classList.remove("light", "dark")

    // Se for "system", detecta o tema do sistema operacional
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    // Se for "light" ou "dark", aplica diretamente
    root.classList.add(theme)

  }, [theme]) // Executa sempre que "theme" mudar

  // Valor que será fornecido pelo contexto
  const value = {
    theme,

    // Função personalizada para trocar o tema
    setTheme: (theme: Theme) => {
      // Salva no localStorage
      localStorage.setItem(storageKey, theme)

      // Atualiza estado
      setTheme(theme)
    },
  }

  // Provider que disponibiliza o tema para toda a aplicação
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// Hook customizado para acessar o contexto
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  // Segurança: impede uso fora do Provider
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}