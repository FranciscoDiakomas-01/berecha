"use client";
import start from "@/assets/AI.png";
import Image from "next/image";

export default function Banner({ label }: { label: string }) {
  return (
    <span className="text-sm dark:bg-white/10 dark:text-white h-10 flex items-center bg-white text-black font-normal border rounded-full p-3 shadow-2xl gap-2">
     
      <p>{label}</p>
    </span>
  );
}
