"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";
import { MdLogout, MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";

import { useModalOpen } from "@/utils/ContextProvider";
import { cn } from "@/lib/utils";
import IconDisplay from "@/common/IconDisplay";

const Sidebar = ({ handleLogOut, logOutLoader }) => {
  const { modalOpen, handleClose } = useModalOpen();
  const [expandedLink, setExpandedLink] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const sidebarData = useSelector((state) => state.sidebar.sideBarData);

  // console.log();

  const handleExpandedLink = (title) => {
    if (expandedLink !== title) setExpandedLink(title);
    // else setExpandedLink("");
  };
  return (
    <div
      className={cn(
        " w-[280px] h-screen p-2 flex-col justify-between absolute md:relative bg-white -translate-x-[280px] md:translate-x-0 flex transition-all ease-in duration-200 delay-75 z-[10]",
        { "translate-x-0": modalOpen }
      )}
    >
      <div className="py-5 h-[calc(100vh-70px)]  overflow-y-scroll">
        <div className="flex">
          <h1 className="text-3xl font-[600] sticky top-0">
            Priority Solution
          </h1>
          <MdOutlineClose
            className="text-3xl font-bold md:hidden"
            onClick={handleClose}
          />
        </div>
        <ul className="py-5 pb-20 space-y-4">
          {sidebarData.map((link) => (
            <li
              key={link.title}
              className="cursor-pointer"
              onClick={() => {
                link.childLinks
                  ? handleExpandedLink(link.title)
                  : handleExpandedLink("");
                link.childLinks.length === 0 && router.push(link.path);
              }}
            >
              <p
                className={`flex items-center justify-between p-2 px-3 font-[400] ${
                  (pathname === link.path ||
                    (
                      link.childLinks.length > 0 &&
                      link.childLinks.filter(
                        (item) =>
                          item.Page_Alies && pathname === item.Page_Alies
                      )
                    ).length > 0) &&
                  `bg-gradient-to-r from-[#032870]/60 to-[#032870] text-white rounded-md`
                }`}
              >
                <span className="flex items-end justify-center gap-2 ">
                  <IconDisplay
                    iconName={link.Icon && link.Icon}
                    iconSet={link.Icon && link.Icon.slice(0, 2).toLowerCase()}
                    className="text-2xl  "
                  />
                  <span className="">{link.title}</span>
                </span>
                {link.childLinks.length > 0 &&
                  (link.title === expandedLink ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  ))}
              </p>
              <ul
                className={cn({
                  "bg-[#F0F3F9] rounded-md space-y-1":
                    link.childLinks.length > 0,
                })}
              >
                {link.childLinks.length > 0 &&
                  link.title === expandedLink &&
                  link.childLinks.map((item) => (
                    <li
                      key={item.Id}
                      onClick={() =>
                        item.Page_Alies && router.push(item.Page_Alies)
                      }
                    >
                      <p
                        className={cn(
                          "flex items-center justify-start gap-2 hover:bg-[#CFDFFC] px-5 py-2 rounded-md",
                          { "bg-[#CFDFFC]": pathname === item.Page_Alies }
                        )}
                      >
                        <FiChevronRight />
                        {item.Menue_name}
                      </p>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 border-t border-[#E2E4E8] p-5 absolute bottom-0 left-0 w-full z-[5] mb-10 bg-white h-[70px]">
        <div
          className="flex items-center gap-2 w-full font-[500] cursor-pointer"
          onClick={handleLogOut}
        >
          <MdLogout className="text-xl" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
