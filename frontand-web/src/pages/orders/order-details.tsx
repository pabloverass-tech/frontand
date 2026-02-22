import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Clock3, Package, Truck } from "lucide-react"

export function OrderDetails() {
  return (
    <DialogContent className="sm:max-w-[1000px] p-0 overflow-hidden rounded-2xl">

      {/* ================= HEADER ================= */}
      <DialogHeader className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">

        <div className="flex items-center justify-between">

          <div>
            <DialogTitle className="text-2xl font-semibold tracking-tight text-white">
              Pedido #0011
            </DialogTitle>
            <p className="text-sm text-indigo-100 mt-1">
              Criado em 22/02/2026 às 09:32
            </p>
          </div>

          <Badge className="bg-white/20 text-white border-0 backdrop-blur">
            Pendente
          </Badge>

        </div>
      </DialogHeader>

      {/* ================= BODY ================= */}
      <div className="max-h-[75vh] overflow-y-auto px-8 py-8 space-y-10 bg-muted/20">

        {/* ================= TIMELINE ================= */}
        <section className="space-y-5">

          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Progresso do Pedido
          </h3>

          <div className="flex items-center justify-between">

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/15 text-amber-600">
                <Clock3 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-amber-600">
                Pendente
              </span>
            </div>

            <div className="flex-1 h-1 bg-border mx-4 rounded-full" />

            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                <Package className="h-5 w-5" />
              </div>
              <span className="text-sm">Em preparo</span>
            </div>

            <div className="flex-1 h-1 bg-border mx-4 rounded-full" />

            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                <Truck className="h-5 w-5" />
              </div>
              <span className="text-sm">Em entrega</span>
            </div>

            <div className="flex-1 h-1 bg-border mx-4 rounded-full" />

            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-muted">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="text-sm">Entregue</span>
            </div>

          </div>
        </section>

        <Separator />

        {/* ================= GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-3">

          {/* ITENS */}
          <div className="lg:col-span-2 space-y-5">

            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Itens do Pedido
            </h3>

            <div className="rounded-2xl border bg-background shadow-sm overflow-hidden">

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Qtd.</TableHead>
                    <TableHead className="text-right">Preço</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow className="hover:bg-muted/40">
                    <TableCell className="font-medium">
                      Produto Premium 01
                    </TableCell>
                    <TableCell className="text-right">5</TableCell>
                    <TableCell className="text-right">
                      R$ 500,00
                    </TableCell>
                    <TableCell className="text-right font-semibold text-indigo-600">
                      R$ 2.500,00
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3} className="text-right font-semibold">
                      Total
                    </TableCell>
                    <TableCell className="text-right text-xl font-bold text-indigo-600">
                      R$ 2.500,00
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>

            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            <section className="rounded-2xl border bg-background shadow-sm p-6 space-y-4">

              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Cliente
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Nome</p>
                  <p className="font-medium">Pablo Veras</p>
                </div>

                <div>
                  <p className="text-muted-foreground">E-mail</p>
                  <p>pabloverass@gmail.com</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Telefone</p>
                  <p>Não informado</p>
                </div>
              </div>

            </section>

          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t bg-background px-8 py-5 flex justify-end gap-4">

        <Button
          variant="outline"
          className="border-red-500/40 text-red-600 hover:bg-red-50"
        >
          Cancelar Pedido
        </Button>

        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
          Aprovar Pedido
        </Button>

      </div>

    </DialogContent>
  )
}