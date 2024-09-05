import React from "react";

const Footer = () => {
  return (
    <div className="bg-transparent text-sm flex justify-between items-center py-3 px-7 fixed bottom-0 left-0 w-full z-10">
      <div className="flex text-xs gap-5">
        <p>Privacy Policy</p> <p>Terms of Use</p>
      </div>
      <div>
        <span>&#64; 2024 Priority Solution</span>
      </div>
    </div>
  );
};

export default Footer;
