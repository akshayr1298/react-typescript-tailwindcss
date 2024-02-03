import React from "react";
import headerLogo from "../../assets/instagram.png";

const Header = () => {

  const reload = ()=>{
    window.location.reload();
  }

  return (
    <>
      <div className="bg-neutral-800 w-full min-h-14 flex justify-around">
        <div className="w-full flex justify-around">
          <button className="flex items-center justify-center px-4  bg-neutral-800 text-white rounded-md" onClick={reload}>
            <img src={headerLogo} alt="Logo" className="h-8 w-8 mr-2" />
          </button>
        </div>
        <div  className="w-full flex justify-around">
          <p className="text-white font-semibold mt-3 cursor-pointer">Home</p>
          <p className="text-white font-semibold mt-3 cursor-pointer">About us</p>
          <p className="text-white font-semibold mt-3 cursor-pointer">Contact</p>
        </div>
        <div className="w-full flex justify-around ">
        <p className="text-white font-semibold mt-3 cursor-pointer">right</p>
        </div>
      </div>
    </>
  );
};

export default Header;
