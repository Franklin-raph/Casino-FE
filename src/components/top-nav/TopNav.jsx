import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { ImSpades } from "react-icons/im";


const TopNav = () => {

  const navigate = useNavigate()

  return (
    <div className='flex items-center top-bg justify-between px-[1.5rem] py-[0.8rem] fixed w-full z-[99]'>
      <div className='flex items-center gap-[3rem]'>
        <MdMenuOpen className='text-color text-[30px] cursor-pointer'/>
        <Link to="/"> <img src="./images/vite.svg" alt="" /> </Link>
        <div className='flex items-center text-white text-[18px] gap-2 py-2 px-4 rounded-[5px] gradient-btn'>
          <ImSpades />
          <p>Casino</p>
        </div>
      </div>
      <div className='flex items-center gap-[1rem]'>
        <p className='text-color cursor-pointer' onClick={() => navigate('/login') }>SIGN IN</p>
        <p className='py-[10px] px-7 ml-5 rounded-[5px] gradient-btn text-white cursor-pointer'  onClick={() => navigate('/register') }>SIGN UP</p>
      </div>
    </div>
  )
}

export default TopNav
