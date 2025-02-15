import { createClient } from "@/utils/supabase/client";

export async function getDetailsMembers(id: number) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("view_company_members").select("*").eq("id", id);

  if (error) {
    console.error("Erro ao buscar membros da empresa:", error.message);
    return null;
  }

  return data;
}
