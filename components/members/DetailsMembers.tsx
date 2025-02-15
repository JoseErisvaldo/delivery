"use client";
import { UserIcon, MailIcon, CalendarIcon, ClockIcon, UploadCloudIcon, BriefcaseBusiness, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getProfile } from "@/app/api/users/view/profile";
import RoleBadge from "../ui/RoleBadge";

export default function DetailsMembers({ user }: { user: any }) {
    
   async function editProfileAction(e: React.FormEvent) {
     e.preventDefault();
   } 

  return (
    <div className="flex flex-col items-centergap-4">
      <div className="w-full m-auto flex flex-ro  justify-center  gap-3 flex-wrap">
        <div className=" max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <div className="flex items-center gap-4">
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {user.name || "Nenhuma empresa"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">ID: {user.id}</p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MailIcon className="w-5 h-5" />
                <span>{user.auth_email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CalendarIcon className="w-5 h-5" />
                <span>Conta criada em: {new Date(user.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <BriefcaseBusiness className="w-5 h-5" />
                <span>Empresa: {user.name_branch || "Nenhuma empresa"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Shield className="w-5 h-5" />
                <span>Cargo: <RoleBadge role={user.name_role || "Nenhuma empresa"} /> </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="flex justify-end relative left-10 ">
            <div className="h-16 w-96 text-2xl text-white bg-blue-600 rounded-3xl mb-5 flex items-center justify-center"> 
              Editar perfil 
            </div>
          </div>

          <form onSubmit={editProfileAction}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name">Nome</label>
                <input value={user.name || "Nenhuma empresa"} className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700" type="text" name="name" />
              </div>
              <div>
                <label htmlFor="zip">CEP</label>
                <input value={user.zip || "Nenhum CEP"} className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700" type="text" name="zip" />
              </div>
              <div>
                <label htmlFor="whatsapp">Whatsapp</label>
                <input value={user.whatsapp || "Nenhum whatsapp"} className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700" type="text" name="whatsapp" />
              </div>
            </div>
            <Button className="mt-4 w-full bg-green-500 hover:bg-green-600" type="submit">
              Editar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
