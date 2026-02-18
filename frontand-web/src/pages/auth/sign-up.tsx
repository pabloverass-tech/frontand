import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";

// Schema de validação
const signUpSchema = z.object({
  establishment: z.string().trim().min(2, "Informe o nome do estabelecimento").max(255),
  name: z.string().trim().min(2, "Informe seu nome").max(255),
  email: z.string().trim().email("Digite um e-mail válido").max(255),
  phone: z.string().trim().min(10, "Digite um celular válido").max(20),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").max(128),
});

type SignUpForm = z.infer<typeof signUpSchema>;

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  async function handleSignUp(_data: SignUpForm) {
    try {
      // simulação de requisição
      await new Promise((resolve) => setTimeout(resolve, 1200));

      toast.success("Autoescola cadastrada com sucesso.", {
        action: {
          label: "Login",
          onClick: () => navigate('/sign-in'),
        },
      });
      
    } catch {
      toast.error("Erro ao criar conta. Tente novamente.");
    }
  }

  return (
    <div>
      {/* BOTAO NO TOPO LADO DIREITO */}
      <div className="flex items-center justify-center p-2">
        {/* BOTÃO TOPO DIREITO */}
        <Link
          to="/sign-in"
          className="hover:bg-primary hover:text-primary-foreground absolute top-6 right-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:shadow-md"
        >
          Fazer Login
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/sign-up">Novo estabelecimento</Link>
      </Button> */}

      <div className="space-y-6">
        {/* Título */}
        {/* <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Criar conta da autoescola
          </h2>
          <p className="text-muted-foreground text-sm">
            Preencha os dados abaixo para começar
          </p>
        </div> */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Building2 className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Criar conta da autoescola
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Preencha os dados abaixo para começar
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          {/* Estabelecimento */}
          <div className="space-y-2">
            <label htmlFor="establishment" className="text-sm font-medium">
              Estabelecimento
            </label>
            <input
              id="establishment"
              placeholder="Nome da autoescola"
              disabled={isSubmitting}
              aria-invalid={!!errors.establishment}
              className="focus:ring-primary w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              {...register("establishment")}
            />
            {errors.establishment && (
              <p className="text-sm text-red-500">
                {errors.establishment.message}
              </p>
            )}
          </div>

          {/* Nome */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Seu nome
            </label>
            <input
              id="name"
              placeholder="Nome completo"
              disabled={isSubmitting}
              aria-invalid={!!errors.name}
              className="focus:ring-primary w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="nome@email.com"
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              className="focus:ring-primary w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Celular */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Celular
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              disabled={isSubmitting}
              aria-invalid={!!errors.phone}
              className="focus:ring-primary w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Senha */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Senha
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              disabled={isSubmitting}
              aria-invalid={!!errors.password}
              className="focus:ring-primary w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground w-full rounded-md py-2 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Criando conta..." : "Continuar"}
          </button>

          {/* Termos */}
          <p className="text-muted-foreground text-center text-xs">
            Ao continuar, você concorda com nossos{" "}
            <span className="cursor-pointer underline">Termos de uso</span> e{" "}
            <span className="cursor-pointer underline">
              Política de privacidade
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
