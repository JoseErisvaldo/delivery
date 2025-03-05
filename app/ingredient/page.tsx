"use client";
import ListIngredient from "@/components/ingredient/ListIngredient";
import NewIngredient from "@/components/ingredient/NewIngredient";
import SideBarEnd from "@/components/ui/sideBarEnd";
import Title from "@/components/ui/title";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

export default function Ingredient() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div>
             <Title title="Ingredientes" />
            </div>
            <div className="flex justify-end mb-5">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="bg-blue-600 text-white flex items-center gap-2 justify-end p-3 cursor-pointer hover:opacity-80 border border-foreground/10 rounded"
                >
                <CirclePlus /> Novo ingrediente
            </button>
            </div>
            <div>
                {isOpen && (
                <SideBarEnd title="Novo ingrediente" onClick={() => setIsOpen(!isOpen)}>
                    <NewIngredient />
                </SideBarEnd>
                )}
            </div>
            <ListIngredient />
        </div>
    );  
}