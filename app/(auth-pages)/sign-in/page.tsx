import { signInAction } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex flex-row gap-12 items-center justify-center">
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <img src="https://img.freepik.com/vetores-gratis/servico-de-entrega-ilustrado_23-2148505081.jpg?t=st=1739501575~exp=1739505175~hmac=1f3f2b13848b062a4a61d757ebd1e917a26056470ce815c0a2748d502a13bd80&w=826" alt="" />
      </div>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto border border-foreground/10 p-4 rounded-md">
        <h1 className="text-2xl font-medium">Entrar</h1>
        <p className="text-sm text-foreground">
          Ainda não tem uma conta?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-up">
            Cadastrar
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="exemplo@exemplo.com" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Senha</Label>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Esqueceu a senha?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Sua senha"
            required
          />
          <SubmitButton className="bg-blue-500 hover:bg-blue-600" pendingText="Entrando..." formAction={signInAction}>
            Entrar
          </SubmitButton>
        </div>
      </form>
    </div>
  );  
}
