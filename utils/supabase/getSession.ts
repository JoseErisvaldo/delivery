import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function getSession() {
  const cookiesInstance = await cookies(); // Aguarda a resolução da Promise

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (name) => cookiesInstance.get(name)?.value } } // Agora 'cookiesInstance' é resolvido
  );

  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
