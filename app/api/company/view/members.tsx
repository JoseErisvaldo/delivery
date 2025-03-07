import { createClient } from "@/utils/supabase/client";

export async function getMembers({ range }: { range: { start: number; end: number } }) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("view_company_members").select("*").range(range.start, range.end);

  if (error) {
    console.error("Erro ao buscar membros da empresa:", error.message);
    return null;
  }

  return data;
}
