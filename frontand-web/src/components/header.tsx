import { Home, Pizza, UtensilsCrossed, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">

        {/* LOGO + MENU */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-semibold">
            <Pizza className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">pizza.shop</span>
          </div>

          <Separator orientation="vertical" className="h-6" />

          <nav className="flex items-center gap-2">

            {/* Início */}
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              Início
            </Link>

            {/* Pedidos com submenu */}
            <div className="relative group">
              <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground">
                <UtensilsCrossed className="h-4 w-4" />
                Pedidos
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Área invisível de segurança */}
              <div className="absolute left-0 top-full h-3 w-full"></div>

              {/* Dropdown */}
              <div
                className="
                  absolute left-0 top-[calc(100%+0.5rem)]
                  w-52 rounded-md border bg-popover p-1 shadow-lg
                  opacity-0 translate-y-2 scale-95
                  transition-all duration-200 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                "
              >
                <Link
                  to="/orders"
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                >
                  Todos os pedidos
                </Link>

                <Link
                  to="/orders/pending"
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                >
                  Pendentes
                </Link>

                <Link
                  to="/orders/completed"
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                >
                  Concluídos
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Avatar */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          P
        </div>
      </div>
    </header>
  )
}
