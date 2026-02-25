// OrderTableRow.tsx

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { OrderDetails } from "./order-details";

type Status = "approved" | "pending" | "canceled";

type Order = {
  id: string;
  customer: string;
  status: Status;
  total: number;
  createdAt: string;
};

interface OrderTableRowProps {
  order: Order;
  formatCurrency: (value: number) => string;
  updateStatus: (id: string, status: Status) => void;
  StatusBadge: React.ComponentType<{ order: Order }>;
}

export function OrderTableRow({
  order,
  formatCurrency,
  updateStatus,
  StatusBadge,
}: OrderTableRowProps) {
  return (
    <TableRow className="hover:bg-muted/40 transition-colors">
      <TableCell>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" size="xs">
              <Search className="">
                <span className="sr-only">Detalhes do pedido</span>
              </Search>
            </Button>
          </DialogTrigger>

          <OrderDetails/>
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.id}
      </TableCell>

      <TableCell className="text-muted-foreground">{order.createdAt}</TableCell>

      <TableCell>
        <StatusBadge order={order} />
      </TableCell>

      <TableCell className="font-medium">{order.customer}</TableCell>

      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-4">
          <span className="font-semibold">{formatCurrency(order.total)}</span>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              disabled={order.status !== "pending"}
              onClick={() => updateStatus(order.id, "approved")}
              className="border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10 disabled:opacity-40"
            >
              Aprovar
            </Button>

            <Button
              size="sm"
              variant="outline"
              disabled={order.status !== "pending"}
              onClick={() => updateStatus(order.id, "canceled")}
              className="border-red-500/30 text-red-600 hover:bg-red-500/10 disabled:opacity-40"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
