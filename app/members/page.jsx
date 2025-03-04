"use client";

import ListMembers from "@/components/members/ListMembers";
import NewMembers from "@/components/members/NewMembers";
import SideBarEnd from "@/components/ui/sideBarEnd";
import Title from "@/components/ui/title";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

export default function Members() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div>
      <div> 
        <Title title="Lista de Membros" />
      </div>
      <div className="flex justify-end mb-5">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-blue-600 text-white flex items-center gap-2 justify-end p-3 cursor-pointer hover:opacity-80 border border-foreground/10 rounded"
      >
        <CirclePlus /> Novo membro
      </button>

        {isOpen && (
          <SideBarEnd title="Novo membro" onClick={() => setIsOpen(!isOpen)}>
            <NewMembers />
          </SideBarEnd>
        )}
      </div>
      <ListMembers />
    </div>
  );
}