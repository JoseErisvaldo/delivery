import { signBranchAction } from "@/app/actions";
import { getRole } from "@/app/api/Role/view";
import { getProfile } from "@/app/api/users/view/profile";
import { useEffect, useState } from "react";

interface dataForm {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    id_branch: string;
}

export default function NewMembers() {
    const [profile, setProfile] = useState<any[] | null>(null);
    const tes = profile?.map((item: any) => item.id_branch);
    console.log(tes);
    const [role, setRole] = useState<any[] | null>(null);
    const [form, setForm] = useState<dataForm>({
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        id_branch: tes?.[0]
    });
    async function fetchProfile() {
        try {
          const data = await getProfile();
          setProfile(data);
          console.log(data);

        } catch (error) {
          console.error("Erro ao buscar perfil:");
          return null;
        }
    }
    async function fetchRole() {
        try {
          const data = await getRole();
          setRole(data);
          console.log(data);

        } catch (error) {
          console.error("Erro ao buscar as permissoes:");
          return null;
        }
    }
    useEffect(() => {
        fetchProfile();
        fetchRole();
    }, []);

    function createMemberAction(e: SubmitEvent) {
        e.preventDefault();
        console.log(form);
        
    }
    return (
        <form className="flex flex-col w-full max-w-md mx-auto  p-6 rounded-lg ">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cadastrar Novo Membro</h2>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                    Nome
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                    Senha
                </label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium">
                    Telefone
                </label>
                <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium">
                    Permissão
                </label>
                <select name="role" id="role" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option value="">Selecione</option>
                    {role?.map((item: any) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="id_branch" className="block text-sm font-medium">
                    Empresa
                </label>
                <select name="id_branch" id="id_branch" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option value="">Selecione</option>
                    {profile?.map((item: any) => (
                        <option key={item.id_branch} value={item.id_branch}>
                            {item.name_branch}
                        </option>
                    ))}
                </select>
            </div>

            <button 
                formAction={signBranchAction}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Cadastrar
            </button>
        </form>
    );
}
