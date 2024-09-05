import Image from "next/image";

import prioritySolutionLogo from "@/public/prioritySolutionLogo.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-between bg-[#FFFFFF] w-full items-center">
      <div className="flex-[1] h-full w-full bg-green/20 flex flex-col justify-between py-5 px-10">
        <div className="flex items-center justify-center h-full">
          <Image
            src={prioritySolutionLogo}
            width={300}
            height={300}
            alt="prioritySolutionLogo"
            className=""
          />
        </div>
        <div className="flex gap-10 text-sm">
          <p>Designed and Developed by Priority Solution</p>
        </div>
      </div>
      <main className="h-full w-full flex flex-col items-center justify-center flex-[1] px-12 ">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default AuthLayout;
