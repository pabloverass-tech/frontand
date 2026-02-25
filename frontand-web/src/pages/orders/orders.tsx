import { useState } from "react";
import { usePageTitle } from "@/hooks/use-page-title";

import {
  Table,
  TableBody, TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CheckCircle2,
  Clock3,
  XCircle,
  ChevronDown
} from "lucide-react";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilter } from "./order-table-filter";
// import { Pagination } from "@/components/pagination";

/* ================= TIPOS ================= */

type Status = "approved" | "pending" | "canceled";

type Order = {
  id: string;
  customer: string;
  status: Status;
  total: number;
  createdAt: string;
};

/* ================= COMPONENTE PRINCIPAL ================= */

export function Orders() {
  usePageTitle("Pedidos");

  /* ====== Estado com 10 pedidos simulados ====== */
  const [orders, setOrders] = useState<Order[]>(
    Array.from({ length: 10 }).map((_, index) => ({
      id: `54505556506111${index}`,
      customer: `Cliente ${index + 1}`,
      status:
        index % 3 === 0 ? "approved" : index % 3 === 1 ? "pending" : "canceled",
      total: Math.floor(Math.random() * 500) + 50,
      createdAt: `Há ${index + 1} minutos`,
    })),
  );

  /* ====== Formata valor para Real ====== */
  function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  /* ====== Atualiza status do pedido ====== */
  function updateStatus(id: string, newStatus: Status) {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order,
      ),
    );
  }

  /* ====== Badge de Status com Dropdown ====== */
  function StatusBadge({ order }: { order: Order }) {
    const base =
      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all";

    const styles = {
      approved: "bg-emerald-500/10 text-emerald-600",
      pending: "bg-amber-500/10 text-amber-600",
      canceled: "bg-red-500/10 text-red-600",
    };

    const icons = {
      approved: <CheckCircle2 className="h-3.5 w-3.5" />,
      pending: <Clock3 className="h-3.5 w-3.5" />,
      canceled: <XCircle className="h-3.5 w-3.5" />,
    };

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={`${base} ${styles[order.status]}`}>
            {icons[order.status]}
            {order.status === "approved" && "Aprovado"}
            {order.status === "pending" && "Pendente"}
            {order.status === "canceled" && "Cancelado"}

            {order.status === "pending" && (
              <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            )}

            <ChevronDown className="h-3 w-3 opacity-60" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => updateStatus(order.id, "approved")}>
            <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-600" />
            Aprovar
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => updateStatus(order.id, "pending")}>
            <Clock3 className="mr-2 h-4 w-4 text-amber-600" />
            Marcar como Pendente
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => updateStatus(order.id, "canceled")}>
            <XCircle className="mr-2 h-4 w-4 text-red-600" />
            Cancelar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <p className="text-muted-foreground text-sm">
          Gerencie e acompanhe seus pedidos
        </p>
      </div>

      {/* ================= FILTRO ================= */}
      <div className="bg-card rounded-xl border p-4 shadow-sm">
        <OrderTableFilter />
      </div>

      {/* ================= TABELA ================= */}
      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Realizado</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="text-right">Total + Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <OrderTableRow
                key={order.id}
                order={order}
                formatCurrency={formatCurrency}
                updateStatus={updateStatus}
                StatusBadge={StatusBadge}
              />
            ))}
          </TableBody>
        </Table>
      </div>
          {/* <Pagination /> */}
    </div>
  );
}
