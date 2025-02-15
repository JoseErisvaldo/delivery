"use client";
import { getDetailsMembers } from "@/app/api/company/view/detailsMembers";
import DetailsMembers from "@/components/members/DetailsMembers";
import BackButton from "@/components/ui/backButton";
import Title from "@/components/ui/title";
import { useEffect, useState } from "react";

// app/members/[id]/page.tsx
export default function MemberDetail({ params }: { params: { id: any } }) {
  const [profile, setProfile] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getDetailsMembers(Number(params.id));
        setProfile(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [params.id]);

  if (loading) return <p>Carregando...</p>;
  if (!profile || profile.length === 0) return <p>Nenhum perfil encontrado.</p>;

  return (
    <div>
      <Title title="Detalhes do Membro" />
      <BackButton />
      <DetailsMembers user={profile[0]} />
    </div>
  );
}
