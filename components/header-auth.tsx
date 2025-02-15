import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { ThemeSwitcher } from "./theme-switcher";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="w-full flex items-center justify-end gap-4">
  
      Olá, {user.email}!
      <span>
        <ThemeSwitcher />
      </span>
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sair
        </Button>
      </form>
    </div>
  ) : (
    'Usuario não localizado !!!'
  );
}
