import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
export default async function Home() {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return redirect("/sign-in");
    }
    return (
        <div>
            <h1>Welcome to delivery!</h1>
            <p>Check out the <a href="/about">about page</a>.</p>
        </div>
    );
}