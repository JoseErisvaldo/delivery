"use client"; // Apenas para o App Router

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; 

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="px-4 py-2  rounded-lg transition"
    >
      <ArrowLeft />
    </button>
  );
}
