"use client";

import {
  MdCall,
  MdNotifications,
  MdOutlineArrowForwardIos,
  MdMenu,
} from "react-icons/md";
import { usePathname } from "next/navigation";

import { links } from "@/lib/sidebarLinks";
import { useModalOpen } from "@/utils/ContextProvider";

const Navbar = () => {
  const pathname = usePathname();
  const { handleOpen } = useModalOpen();

  return (
    <div className="w-full py-5 px-4 flex items-center justify-between bg-white h-[80px]">
      <div className=" gap-2 items-center justify-center hidden sm:flex">
        <span className="text-2xl text-green">
          {/* {links.filter((item) => pathname.includes(item.path))[0].logo} */}
        </span>
        <div>
          <span className="capitalize">
            {links.filter(
              (link) => pathname.includes(link.title.toLowerCase()).title
            )}
            {/* {
              links.filter(
                (link) => link.path === "/" + pathname.split("/").at(1)
              )[0].title
            } */}
            {/* <pre>{JSON.stringify({ links }, null, 4)}</pre> */}
          </span>
          {/* {links.filter(
            (link) => link.path === "/" + pathname.split("/").at(1)
          )[0].childLinks && (
            <span className="capitalize text-green font-[500]">
              /
              {
                links
                  .filter(
                    (link) => link.path === "/" + pathname.split("/").at(1)
                  )[0]
                  .childLinks.filter((cl) => cl.path === pathname)[0].title
              }
            </span>
          )} */}
        </div>
      </div>
      <div className="block sm:hidden cursor-pointer" onClick={handleOpen}>
        <MdMenu className="text-2xl" />
      </div>
      <div className="flex items-center justify-center gap-10 text-2xl text-[#171832]">
        <div className="relative">
          <MdNotifications />
          <div className="p-[3px] rounded-full bg-red-500 absolute right-0 top-0 border-[2px] border-white" />
        </div>
        <div>
          <MdCall />
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-5 text-base cursor-pointer">
          <div className="bg-green h-[40px] w-[40px] rounded-full"></div>
          <span>John Doe</span>
          <MdOutlineArrowForwardIos className="rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
