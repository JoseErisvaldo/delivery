"use client";

import { UploadCloudIcon, Edit, Trash, ChevronRight, ChevronLeft } from "lucide-react";
import Table from "../ui/table";
import { useEffect, useState } from "react";
import { getMembers } from "@/app/api/company/view/members";
import Link from "next/link";

interface Member {
  id: number;
  created_at: string;
  name: string;
  email: string;
  id_role: string;
  your_profile: string;
}

export default function ListMembers() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "created_at", label: "Data criado" },
    { key: "name", label: "Nome" },
    { key: "email", label: "Email" },
    { key: "id_role", label: "Cargo" },
  ];

  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8); 
  console.log(members)
  useEffect(() => {
    async function fetchMembers() {
      setIsLoading(true);
      try {
        const membersData = await getMembers({ range: { start: (page - 1) * perPage, end: page * perPage } });
        const data = membersData?.map((member: any) => ({
          id: member.id,
          created_at: member.created_at,
          name: member.name,
          email: member.auth_email,
          id_role: member.name_role,
          your_profile: member.your_profile,
        }));
        setMembers(data || []);
      } catch (error) {
        console.error("Erro ao buscar membros:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMembers();
  }, [page, perPage]); 

  const hasPermission = members.some((member) => member.id_role === "admin" && member.your_profile === "yes");

  return (
    <div>
      <div className="flex items-center justify-end gap-4 mb-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          <ChevronLeft />
        </button>
        <span className="text-2xl">{page}</span>
        {members.length > 0 && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          <ChevronRight />
        </button>
        )}
      </div>

      <Table
        columns={columns}
        data={members}
        isLoading={isLoading}
        actions={(row) => (
          <div className="flex gap-2">
            {row.your_profile === "no" ? (
              hasPermission && (
                <Link
                  href={`/members/${row.id}`}
                  className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  <Edit size={14} />
                </Link>
              )
            ) : (
              <Link
                href="/profile"
                className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                <Edit size={14} />
              </Link>
            )}
          </div>
        )}
      />
    </div>
  );
}
