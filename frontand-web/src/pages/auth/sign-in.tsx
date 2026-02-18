import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Schema de validação
const signInSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
});

type SignInForm = z.infer<typeof signInSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });

  async function handleAuthenticate(data: SignInForm) {
    try {
      // simulação de requisição
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Enviamos um link de autenticação para seu email.", {
        action: {
          label: "Reenviar",
          onClick: () => handleAuthenticate(data),
        },
      });
    } catch {
      toast.error("Credenciais inválidas");
    }
  }

  return (
    <div>
      {/* BOTAO NO TOPO LADO DIREITO */}
      <div className="flex items-center justify-center p-6">
        {/* BOTÃO TOPO DIREITO */}
        <Link
          to="/sign-up"
          className="hover:bg-primary hover:text-primary-foreground absolute top-6 right-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:shadow-md"
        >
         Novo estabelecimento
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

      {/* <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/sign-up">Novo estabelecimento</Link>
      </Button> */}

      <div className="space-y-6">
        {/* Título */}
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Acessar painel da autoescola
          </h2>
          <p className="text-muted-foreground text-sm">
            Entre com seu e-mail para continuar
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit(handleAuthenticate)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Seu e-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="nome@email.com"
              autoComplete="email"
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              className="focus:ring-primary w-full rounded-md border px-3 py-2 outline-none focus:ring-2 disabled:opacity-50"
              {...register("email")}
            />

            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground w-full rounded-md py-2 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Enviando link..." : "Acessar painel"}
          </button>
        </form>
      </div>
    </div>
  );
}
