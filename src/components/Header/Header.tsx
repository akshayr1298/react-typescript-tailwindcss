import React from 'react'
import headerLogo from "../../assets/header.png"

const Header = () => {
  return (
    <>
    <div className='bg-neutral-600 w-full min-h-14 flex justify-around'>
        <div>
    <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
    <img src={headerLogo} alt="Logo" className="h-6 w-6 mr-2"/>
  </button>
        </div>
        <div>
            login   
        </div>

    </div>
    </>
  )
}

export default Header