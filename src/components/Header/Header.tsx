import React from "react";
import headerLogo from "../../assets/instagram.png";

const Header = () => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="bg-neutral-800 w-full min-h-14 flex justify-around sm:justify-around sm:grid sm:grid-cols-3">
      
      /
        <div className="w-full flex">
          <button
            className="flex items-center justify-center px-4  bg-neutral-800 text-white rounded-md mx-9 sm:mx-0"
            onClick={reload}
          >
            <img src={headerLogo} alt="Logo" className="h-8 w-8 mr-2" />
          </button>
          <p className="text-white font-bold mt-4 cursor-pointer transition-colors duration-300 hover:text-green-500">
            AMIGO
          </p>
        </div>


        <div className="w-full flex justify-around hidden sm:flex justify-around flex-1">
          <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            Home
          </p>
          <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            About us
          </p>
          <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            Contact
          </p>
        </div>
        <div className="hidden sm:flex justify-around">
          <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            Profile
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
