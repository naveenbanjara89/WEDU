import React from 'react'
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'> 
        <div className='conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
            <div className="flex items-center gap-3">
                <img src={logo} alt="WeDu Logo" className="w-15 h-15 object-contain" />
                <div className="leading-tight">
                <h1 className="text-2xl font-semibold text-gray-900">
                    WeDu
                </h1>
                <p className="text-xs text-black">
                    Communicate. Collaborate. Create.
                </p>
                </div>
        </div>
        <div className='flex items-center gap-6 text-sm'>
            <a href='#home' className='cursor-pointer hover:scale-105 hover:text-gray-400  '>Home</a>
            <a href='#product' className='cursor-pointer hover:scale-105 hover:text-gray-400  '>Product</a>
            <a href='#pricing-plans' className='cursor-pointer hover:scale-105 hover:text-gray-400  '>Pricing Plans</a>
            <a href='#contact' className='cursor-pointer hover:scale-105 hover:text-gray-400  '>Contact</a>
            <a href='/profile' className="flex items-center gap-2 text-gray-700 hover:text-gray-400 font-medium hover:scale-105 "><CgProfile size={22}/><span>Log In</span></a>
            <button className='bg-yellow-500 border cursor-pointer hover:bg-black hover:text-yellow-400 hover:scale-105 border-black text-black rounded font-bold px-4 py-2 '>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default NavBar
