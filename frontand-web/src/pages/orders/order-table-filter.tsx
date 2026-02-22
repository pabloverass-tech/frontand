import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Search,
  X,
  Layers,
  Clock3,
  Package,
  Truck,
  CheckCircle2,
  XCircle,
} from "lucide-react"

export function OrderTableFilter() {
  return (
    <form className="flex flex-wrap items-end gap-4 bg-muted/40 p-4 rounded-2xl border shadow-sm">

      {/* ID do Pedido */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="ID do Pedido"
          className="pl-9 w-[220px] h-9 bg-background"
        />
      </div>

      {/* Nome do Cliente */}
      <Input
        placeholder="Nome do Cliente"
        className="w-[260px] h-9 bg-background"
      />

      {/* Status com Ícones */}
      <Select defaultValue="all">
        <SelectTrigger className="w-[220px] h-9 bg-background">
          <SelectValue placeholder="Status do Pedido" />
        </SelectTrigger>

        <SelectContent>

          {/* TODOS */}
          <SelectItem value="all">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-slate-600" />
              <span>Todos</span>
            </div>
          </SelectItem>

          {/* PENDENTE */}
          <SelectItem value="pending">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-amber-600" />
              <span>Pendente</span>
            </div>
          </SelectItem>

          {/* EM PREPARO */}
          <SelectItem value="processing">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-blue-600" />
              <span>Em preparo</span>
            </div>
          </SelectItem>

          {/* EM ENTREGA */}
          <SelectItem value="delivering">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-violet-600" />
              <span>Em entrega</span>
            </div>
          </SelectItem>

          {/* ENTREGUE */}
          <SelectItem value="delivered">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Entregue</span>
            </div>
          </SelectItem>

          {/* CANCELADO */}
          <SelectItem value="canceled">
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <span>Cancelado</span>
            </div>
          </SelectItem>

        </SelectContent>
      </Select>

      {/* Botões */}
      <div className="flex gap-2">
        <Button
          type="submit"
          size="sm"
          className="h-9 px-4 bg-indigo-600 hover:bg-indigo-700 text-white shadow"
        >
          <Search className="mr-2 h-4 w-4" />
          Filtrar
        </Button>

        <Button
          type="button"
          size="sm"
          variant="outline"
          className="h-9 px-4"
        >
          <X className="mr-2 h-4 w-4" />
          Limpar
        </Button>
      </div>

    </form>
  )
}