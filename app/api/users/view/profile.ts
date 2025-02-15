import { createClient } from "@/utils/supabase/client";

export async function getProfile() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("view_auth_uid_users").select("*");

  if (error) {
    console.error("Erro ao buscar perfil:", error.message);
    return null;
  }

  return data;
}
