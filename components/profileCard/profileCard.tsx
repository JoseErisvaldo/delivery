"use client";
import { useEffect, useState, useRef } from "react";
import { UserIcon, MailIcon, CalendarIcon, ClockIcon, UploadCloudIcon, BriefcaseBusiness, Shield, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProfile } from "@/app/api/users/view/profile";
import RoleBadge from "../ui/RoleBadge";
import { SubmitButton } from "../submit-button";
import { patchProfile } from "@/app/actions/index";

export default function ProfileCard({ user }: { user: any }) {
  const [profile, setProfile] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) return 

  if (!profile || profile.length === 0) return <p>Nenhum perfil encontrado.</p>;

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      
      <div>
        <img
          className="h-[250px] w-screen object-cover"
          src="https://marketplace.canva.com/EAD5U30aaXU/1/0/1600w/canva-fa%C3%A7a-o-que-%C3%A9-certo-c%C3%A9u-estrelado-facebook-capa-QAuM8BpOzic.jpg"
          alt="Avatar"
        />
        <div className="flex justify-end relative top-[-40px]">
          <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <UploadCloudIcon className="w-5 h-5" />
            <span>Alterar Capa</span>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      
      <div className="w-full m-auto sm:grid sm:grid-cols-2 flex flex-col gap-10">
        <div className="sm:relative sm:left-5 top-[-100px] max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-28 h-28 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                <UserIcon className="text-gray-600 dark:text-gray-300" /> 
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {profile[0].name || "Nenhuma empresa"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">ID: {user.id}</p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MailIcon className="w-5 h-5" />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CalendarIcon className="w-5 h-5" />
                <span>Conta criada em: {new Date(user.created_at).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <BriefcaseBusiness className="w-5 h-5" />
                <span>Empresa: {profile[0].name_branch || "Nenhuma empresa"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Shield className="w-5 h-5" />
                <span>Cargo: <RoleBadge role={profile[0].name_role || "Nenhuma empresa"} /></span>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:relative sm:right-20 p-3 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">Editar Perfil</h2>

          <form ref={formRef}>
            <input type="hidden" name="user_id" value={user.id} />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name">Nome</label>
                <input defaultValue={profile[0].name} className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700" type="text" name="name" />
              </div>
              <div>
                <label htmlFor="zip">CEP</label>
                <input defaultValue={profile[0].zip} className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700" type="text" name="zip" />
              </div>
              <div>
                <label htmlFor="whatsapp">Whatsapp</label>
                <input defaultValue={profile[0].whatsapp} className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700" type="text" name="whatsapp" />
              </div>
            </div>
            <SubmitButton className="mt-4 w-full bg-green-500 hover:bg-green-600" formAction={patchProfile}>
              Editar
            </SubmitButton>
            
          </form>
        </div>
      </div>
    </div>
  );
}
