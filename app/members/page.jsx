import ListMembers from "@/components/members/ListMembers";
import Title from "@/components/ui/title";

export default function Members() {
  return (
    <div>
      <div> 
        <Title title="Lista de Membros" />
      </div>
      <ListMembers />
    </div>
  );
}