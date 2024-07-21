'use client'

import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import router, { useRouter } from "next/navigation";

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Success!</h1>
      <ButtonIcon  />
    </main>
  );
}
export function ButtonIcon() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/test")} className="..."> {/* Add your button styles here */}
      <ChevronRight className="h-4 w-4 text-black  top-0" />
    </button>
  );
}
