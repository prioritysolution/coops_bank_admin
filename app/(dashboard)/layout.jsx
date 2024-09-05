"use client";
import Footer from "@/components/dashboard/footer/footer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import NavbarContainer from "@/container/navbar";
import SidebarContainer from "@/container/sidebar";
import getSessionStorageData from "@/utils/getSessionStorageData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const token = getSessionStorageData("token");

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token, router]);

  return (
    <>
      <main className=" flex gap-5 min-h-screen bg-[#F0F3F9] overflow-hidden">
        <SidebarContainer />
        <div className="w-full  h-full flex flex-col gap-5">
          <NavbarContainer />
          <div className="h-full sm:h-[calc(100vh-100px)] md:pr-5 pb-10 ">
            <ScrollArea className="h-full">{children}</ScrollArea>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
