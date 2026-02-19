import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import {
  Building,
  ChevronDown,
  LogOut,
  User,
  Settings,
  CheckCircle2,
} from "lucide-react"

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="
            group flex items-center gap-3 rounded-full px-2 py-1.5
    hover:bg-muted
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-primary/40
    focus-visible:ring-offset-2
          "
        >
          {/* Avatar + status */}
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              P
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-emerald-500" />
          </div>

          {/* Identidade */}
          <div className="hidden flex-col items-start text-left leading-tight sm:flex">
            <span className="text-sm font-medium">Pizza Shop</span>
            <span className="text-xs text-muted-foreground">
              Administrador
            </span>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground transition group-hover:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-64 rounded-xl p-1 shadow-xl animate-in fade-in zoom-in-95"
      >
        {/* Header */}
        <DropdownMenuLabel className="flex items-center gap-3 px-3 py-2">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              P
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-emerald-500" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold">Pablo Veras</span>
            <span className="text-xs text-muted-foreground">
              pablo@email.com
            </span>

            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" />
              Conta ativa
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Navegação */}
        <DropdownMenuItem className="gap-2">
          <User className="h-4 w-4" />
          Meu perfil
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2">
          <Building className="h-4 w-4" />
          Empresa
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2">
          <Settings className="h-4 w-4" />
          Configurações
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem
          className="
            gap-2 text-destructive focus:text-destructive focus:bg-destructive/10"         >
          <LogOut className="h-4 w-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
