"use client";
import { getDetailsMembers } from "@/app/api/company/view/detailsMembers";
import DetailsMembers from "@/components/members/DetailsMembers";
import BackButton from "@/components/ui/backButton";
import Title from "@/components/ui/title";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Para acessar os parâmetros dinamicamente

// app/members/[id]/page.tsx
export default function MemberDetail() {
  const [profile, setProfile] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();
  const { id } = router.query; // Aqui pegamos o 'id' da URL

  useEffect(() => {
    if (!id) return; // Evita erro de execução quando 'id' ainda não está disponível
    async function fetchProfile() {
      try {
        const data = await getDetailsMembers(Number(id));
        setProfile(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [id]);

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
