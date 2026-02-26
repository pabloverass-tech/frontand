import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import colors from "tailwindcss/colors"

// =============================
// Dados mockados
// =============================
const data = [
  { product: "Pizza Calabresa", amount: 120 },
  { product: "Hambúrguer Artesanal", amount: 98 },
  { product: "Lasanha", amount: 86 },
  { product: "Açaí 500ml", amount: 72 },
  { product: "Refrigerante 2L", amount: 65 },
]

// =============================
// Cores
// =============================
const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

// =============================
// Componente
// =============================
export function PopularProductsChart() {
  // Soma total para calcular porcentagem
  const total = data.reduce((acc, item) => acc + item.amount, 0)

  return (
    <Card className="col-span-3 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base font-medium">
          Produtos populares
        </CardTitle>
        <CardDescription>
          Distribuição de vendas por produto
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-6 items-center">

          {/* ================= Gráfico ================= */}
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="amount"
                  nameKey="product"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={60}
                  paddingAngle={4}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                      className="stroke-background"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* ================= Legenda ================= */}
          <div className="flex flex-col gap-4">
            {data.map((item, index) => {
              const percentage = ((item.amount / total) * 100).toFixed(1)

              return (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index % COLORS.length],
                      }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {item.product}
                    </span>
                  </div>

                  <div className="text-sm font-medium">
                    {item.amount} ({percentage}%)
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </CardContent>
    </Card>
  )
}