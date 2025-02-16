import { createClient } from "@/utils/supabase/client";

export async function getRole() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("role").select("*");

  if (error) {
    console.error("Erro ao buscar as permissoes:", error.message);
    return null;
  }

  return data;
}
