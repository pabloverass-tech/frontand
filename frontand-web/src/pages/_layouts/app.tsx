// Importa o componente de cabeçalho da aplicação
import { Header } from "@/components/header"

// Hook personalizado para alterar o título da página
import { usePageTitle } from "@/hooks/use-page-title"

// Componente do React Router que renderiza as rotas filhas
import { Outlet } from "react-router-dom"

// Layout principal da aplicação
export function AppLayout() {

  // Define o título da aba do navegador como "Dashboard"
  usePageTitle("Dashboard")

  return (

    // Container principal da aplicação
    // flex + flex-col → layout vertical
    // min-h-screen → ocupa no mínimo 100% da altura da tela
    // bg-background → cor de fundo padrão do tema
    // antialiased → melhora renderização de fontes
    <div className="flex min-h-screen flex-col bg-background antialiased">
      
      {/* Header fixo no topo da aplicação */}
      <Header />

      {/* 
        Área principal do conteúdo
        flex-1 → ocupa todo espaço restante abaixo do header
        gap-6 → espaçamento entre elementos internos
        p-8 → padding geral
        pt-6 → padding-top ajustado
      */}
      <main className="flex flex-1 flex-col gap-6 p-8 pt-6">
        
        {/* 
          Outlet renderiza as rotas filhas definidas no router
          Exemplo: Dashboard, Orders, Settings, etc.
        */}
        <Outlet />

      </main>

    </div>
  )
}