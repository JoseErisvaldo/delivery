"use client";

import { UploadCloudIcon, Edit, Trash } from "lucide-react";
import Table from "../ui/table";
import { useEffect, useState } from "react";
import { getMembers } from "@/app/api/company/view/members";
import Link from "next/link";

export default function ListMembers() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "created_at", label: "Data criado" },
    { key: "name", label: "Nome" },
    { key: "email", label: "Email" },
    { key: "id_role", label: "Cargo" },
  ];

  const [members, setMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);
      try {
        const members = await getMembers();
        const data = members?.map((member: any) => ({
          id: member.id,
          created_at: member.created_at,
          name: member.name,
          email: member.auth_email,
          id_role: member.name_role,
          your_profile: member.your_profile,
        }));
        setMembers(data || []); 
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar membros:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMembers();
  }, []);

  const permission = members.find((member) => member.id_role === 'admin' && member.your_profile === 'yes');
  console.log(permission);

  return (
    <Table
      columns={columns}
      data={members}
      isLoading={isLoading}
      actions={(row) => (
        <div className="flex gap-2">
          {/*<label className="cursor-pointer flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
            <UploadCloudIcon className="w-4 h-4" />
            <input type="file" className="hidden" />
          </label>
            
          <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            <Trash size={14} />
          </button>
          */}
          
          {row.your_profile === 'no' ? (
            permission && (
              <Link href={`/members/${row.id}`} className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                <Edit size={14} />
              </Link> 
            )
          ) : (
            <Link href="/profile" className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              <Edit size={14} />
            </Link>
          )}
        </div>
      )}
    />
  );
}
