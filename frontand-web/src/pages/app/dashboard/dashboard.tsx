import {
  DollarSign,
  Package,
  ShoppingCart,
  XCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import { RevenueChart } from "./revenue-chart"
import { PopularProductsChart } from "./popular-products-chart"

// ==========================================
// Interface que define as propriedades do Card
// ==========================================
interface MetricCardProps {
  title: string
  description: string
  value: string | number
  trendText: string
  isPositive: boolean
  icon: React.ComponentType<{ className?: string }>
  color: string // classe de cor principal (ex: text-emerald-600)
  bgColor: string // classe de fundo do ícone
}

// ==========================================
// Componente reutilizável do Card
// ==========================================
function MetricCard({
  title,
  description,
  value,
  trendText,
  isPositive,
  icon: Icon,
  color,
  bgColor,
}: MetricCardProps) {
  return (
    <Card className="transition hover:shadow-lg hover:-translate-y-1 duration-300 rounded-2xl">
      
      {/* Cabeçalho do Card */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-sm font-medium">
            {title}
          </CardTitle>

          <CardDescription className="text-xs">
            {description}
          </CardDescription>
        </div>

        {/* Ícone com fundo colorido */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColor}`}
        >
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </CardHeader>

      {/* Conteúdo principal */}
      <CardContent>
        {/* Valor principal */}
        <div className={`text-3xl font-bold ${color}`}>
          {typeof value === "number"
            ? value.toLocaleString("pt-BR")
            : value}
        </div>

        {/* Indicador de tendência */}
        <div
          className={`mt-2 flex items-center gap-1 text-sm ${
            isPositive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          {trendText}
        </div>
      </CardContent>
    </Card>
  )
}

// ==========================================
// Componente principal do Dashboard
// ==========================================
export function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Cabeçalho da página */}
      <header>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-sm">
          Visão geral do desempenho do seu negócio
        </p>
      </header>

      {/* Grid com 4 Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Receita */}
        <MetricCard
          title="Receita Total do Mês"
          description="Faturamento acumulado"
          value="R$ 48.750,00"
          trendText="+12% em relação ao mês anterior"
          isPositive={true}
          icon={DollarSign}
          color="text-emerald-600"
          bgColor="bg-emerald-100"
        />

        {/* Pedidos no Mês */}
        <MetricCard
          title="Pedidos (Mês)"
          description="Total de pedidos realizados"
          value={1284}
          trendText="+8% crescimento mensal"
          isPositive={true}
          icon={Package}
          color="text-indigo-600"
          bgColor="bg-indigo-100"
        />

        {/* Pedidos do Dia */}
        <MetricCard
          title="Pedidos (Hoje)"
          description="Pedidos nas últimas 24h"
          value={72}
          trendText="+5% comparado a ontem"
          isPositive={true}
          icon={ShoppingCart}
          color="text-blue-600"
          bgColor="bg-blue-100"
        />

        {/* Cancelamentos */}
        <MetricCard
          title="Cancelamentos (Mês)"
          description="Pedidos cancelados no período"
          value={34}
          trendText="-3% redução"
          isPositive={false}
          icon={XCircle}
          color="text-red-600"
          bgColor="bg-red-100"
        />

      </div>

      {/* Gráfico de Receita */}
      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
         <PopularProductsChart />
      </div>
      
    </div>
  )
}