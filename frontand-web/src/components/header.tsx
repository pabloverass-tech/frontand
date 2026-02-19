import { Home, Pizza, UtensilsCrossed, ChevronDown } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { NavLink } from "./nav-link"
import { ThemeToggle } from "./theme/theme-toogle"
import { AccountMenu } from "./account-menu"

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
            <NavLink
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              Início
            </NavLink>

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
                <NavLink
                  to="/orders"
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                >
                  Todos os pedidos
                </NavLink>

                <NavLink
                  to="/orders/pending"
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                >
                  Pendentes
                </NavLink>

                <NavLink
                  to="/orders/completed"
                  className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                >
                  Concluídos
                </NavLink>
              </div>
            </div>
          </nav>
        </div>

        {/* Avatar */}
        {/* <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          P
        </div> */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
