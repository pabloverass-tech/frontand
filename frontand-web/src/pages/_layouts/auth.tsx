import { useMemo } from "react"
import { usePageTitle } from "@/hooks/use-page-title"
import { CarFront, Route, ShieldCheck } from "lucide-react"
import { Outlet } from "react-router-dom"

export function AuthLayout() {
  usePageTitle("Login")

  // evita recalcular o ano a cada render
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      
      {/* LADO ESQUERDO */}
      <aside className="hidden lg:flex flex-col justify-between p-12 text-white bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
        
        {/* LOGO */}
        <div
          className="flex items-center gap-3 text-2xl font-bold"
          aria-label="Autoescola Brasil"
        >
          <CarFront className="h-7 w-7" />
          <span>Autoescola Brasil</span>
        </div>

        {/* TEXTO CENTRAL */}
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Conquiste sua CNH com segurança e confiança 🚦
          </h1>

          <p className="text-white/90">
            Gerencie aulas, acompanhe alunos e organize todo o processo da
            habilitação em um painel simples, rápido e moderno.
          </p>

          {/* BENEFÍCIOS */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Route className="h-4 w-4" />
              Controle completo de aulas práticas
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Gestão segura de alunos e documentos
            </div>
          </div>
        </div>

        {/* RODAPÉ */}
        <footer className="text-sm text-white/80">
          © {year} Autoescola Brasil — Todos os direitos reservados
        </footer>
      </aside>

      {/* LADO DIREITO (FORMULÁRIO) */}
      <main className="flex items-center justify-center p-6">
        <div className="w-full max-w-xl space-y-6 rounded-2xl border bg-card p-10 shadow-xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
