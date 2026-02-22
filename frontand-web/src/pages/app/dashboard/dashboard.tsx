import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import {
  DollarSign,
  Package,
  ShoppingCart,
  XCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { RevenueChart } from "./revenue-chart"

export function Dashboard() {
  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-sm">
          Visão geral de desempenho do seu negócio
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* ================= RECEITA ================= */}
        <Card className="group transition hover:shadow-lg hover:-translate-y-1 duration-300">

          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium">
                Receita Total do Mês
              </CardTitle>
              <CardDescription>
                Faturamento acumulado
              </CardDescription>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 group-hover:scale-110 transition">
              <DollarSign className="h-6 w-6" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold text-emerald-600">
              R$ 48.750,00
            </div>

            <div className="mt-2 flex items-center gap-1 text-sm text-emerald-600">
              <TrendingUp className="h-4 w-4" />
              +12% em relação ao mês anterior
            </div>
          </CardContent>
        </Card>

        {/* ================= PEDIDOS MÊS ================= */}
        <Card className="group transition hover:shadow-lg hover:-translate-y-1 duration-300">

          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium">
                Pedidos (Mês)
              </CardTitle>
              <CardDescription>
                Total de pedidos realizados
              </CardDescription>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 group-hover:scale-110 transition">
              <Package className="h-6 w-6" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold text-indigo-600">
              1.284
            </div>

            <div className="mt-2 flex items-center gap-1 text-sm text-indigo-600">
              <TrendingUp className="h-4 w-4" />
              +8% crescimento mensal
            </div>
          </CardContent>
        </Card>

        {/* ================= PEDIDOS DIA ================= */}
        <Card className="group transition hover:shadow-lg hover:-translate-y-1 duration-300">

          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium">
                Pedidos (Hoje)
              </CardTitle>
              <CardDescription>
                Pedidos nas últimas 24h
              </CardDescription>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 group-hover:scale-110 transition">
              <ShoppingCart className="h-6 w-6" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold text-blue-600">
              72
            </div>

            <div className="mt-2 flex items-center gap-1 text-sm text-blue-600">
              <TrendingUp className="h-4 w-4" />
              +5% comparado a ontem
            </div>
          </CardContent>
        </Card>

        {/* ================= CANCELAMENTOS ================= */}
        <Card className="group transition hover:shadow-lg hover:-translate-y-1 duration-300">

          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium">
                Cancelamentos (Mês)
              </CardTitle>
              <CardDescription>
                Pedidos cancelados no período
              </CardDescription>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-600 group-hover:scale-110 transition">
              <XCircle className="h-6 w-6" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="text-3xl font-bold text-red-600">
              34
            </div>

            <div className="mt-2 flex items-center gap-1 text-sm text-red-600">
              <TrendingDown className="h-4 w-4" />
              -3% redução
            </div>
          </CardContent>
        </Card>

      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
      </div>

    </div>
  )
}