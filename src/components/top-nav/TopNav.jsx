import React, { useState } from 'react'
import { MdMenuOpen } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { ImSpades } from "react-icons/im";
import { GiCash } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdHistoryEdu } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


const TopNav = ({setCurrentModal, setDesktopSideNav, desktopSidenav}) => {

  const navigate = useNavigate()
  const [profileNav, setProfileNav] = useState(false)
  

  return (
    <div className='flex items-center top-bg justify-between px-[1.5rem] py-[0.8rem] fixed w-full z-[99]'>
      <div className='flex items-center gap-[3rem]' onClick={() => setDesktopSideNav(!desktopSidenav)}>
        <MdMenuOpen className='text-color text-[30px] cursor-pointer'/>
        <Link to="/"> <img src="./images/vite.svg" alt="" /> </Link>
        <div className='flex items-center text-white text-[18px] gap-2 py-2 px-4 rounded-[5px] gradient-btn'>
          <ImSpades />
          <p>Casino</p>
        </div>
      </div>
      {
        localStorage.getItem('casino-email') ?
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-8'>
            <div className='flex items-center gap-2 text-color hover:text-white cursor-pointer text-[18px] font-[600] bg-primary-color pl-1 pr-3 py-1 rounded-[50px]'>
              <GiCash className='p-2 bg-profile-nav-bg text-[35px] rounded-full' />
              <p>$5,000</p>
            </div>
            <div onClick={() => setCurrentModal('deposit')} className='flex items-center gap-1 text-color bg-primary-color py-2 px-3 cursor-pointer rounded-full'>
              <FaPlus />
              <p>Deposit</p>
            </div>
          </div>
          <HiOutlineUser className='text-color text-[26px] cursor-pointer hover:text-white' onClick={() => setProfileNav(!profileNav)}/>
        </div>
        :
        <div className='flex items-center gap-[1rem]'>
          <p className='text-color cursor-pointer' onClick={() => setCurrentModal('login')}>SIGN IN</p>
          <p className='py-[10px] px-7 ml-5 rounded-[5px] gradient-btn text-white cursor-pointer'  onClick={() => setCurrentModal('register')}>SIGN UP</p>
        </div>
      }
      {
        profileNav &&
        <div className='absolute bg-profile-nav-bg right-[10px] w-[200px] top-[75px] text-color py-2 rounded-[5px]'>
          <div onClick={() => setCurrentModal('wallet')} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <IoWalletOutline className='text-[18px]'/>
            <p>Wallet</p>
          </div>
          <div className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <BiMoneyWithdraw className='text-[18px]'/>
            <p>Withdraw</p>
          </div>
          <div onClick={() => setCurrentModal('profile')} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <FaRegCircleUser className='text-[18px]'/>
            <p>Profile</p>
          </div>
          <div onClick={() => setCurrentModal('transaction')} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <MdHistoryEdu className='text-[18px]'/>
            <p>Transaction</p>
          </div>
          <div onClick={() => setCurrentModal('betHistory')} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <BsClockHistory className='text-[18px]'/>
            <p>Bet History</p>
          </div>
          <div onClick={() => setCurrentModal('settings')} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <HiOutlineCog6Tooth className='text-[18px]'/>
            <p>Settings</p>
          </div>
          <div onClick={() => {
            localStorage.clear()
            window.location.assign('/')
          }} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer border-t border-gray-800'>
            <IoWalletOutline className='text-[18px]'/>
            <p>Sign Out</p>
          </div>
        </div>
      }
    </div>
  )
}

export default TopNav
