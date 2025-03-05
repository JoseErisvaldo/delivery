import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";


export async function createIngredient(formData: FormData): Promise<any> {    
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    if (!user?.data?.user) {
      return { error: "Usuário não autenticado" };
    }
  
    const { data, error } = await supabase
      .from("igredient")
      .insert({
        name_ingredient: formData.get("name")?.toString(),
        price: formData.get("price")?.toString(),
      })
      .select();
      if(data){
        console.log(data);
        return redirect('/ingredient');
      } else {
        console.log('teste');
      }
    if (error) {
      console.error("Erro ao criar ingrediente:", error.message);
      return { error: error.message };
    }
  
    return { data };
  }
  