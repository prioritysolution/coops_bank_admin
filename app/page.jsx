"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, "1000");
  }, [router]);

  return <main className="min-h-screen">Hello world</main>;
}
