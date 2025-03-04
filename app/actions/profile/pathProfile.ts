import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";


export async function patchProfile(formData: FormData): Promise<any> {    
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    if (!user?.data?.user) {
      return { error: "Usuário não autenticado" };
    }
  
    const { data, error } = await supabase
      .from("users")
      .update({
        name: formData.get("name")?.toString(),
        zip: formData.get("zip")?.toString(),
        whatsapp: formData.get("whatsapp")?.toString(),
      })
      .eq("user_id", user.data.user.id) 
      .select();
      if(data){
        return redirect('/profile');
      } else {
        console.log('teste');
      }
    if (error) {
      console.error("Erro ao atualizar perfil:", error.message);
      return { error: error.message };
    }
  
    return { data };
  }
  