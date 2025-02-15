import ProfileCard from "@/components/profileCard/profileCard";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center gap-8">
      <ProfileCard user={user} />
    </div>
  );
}
