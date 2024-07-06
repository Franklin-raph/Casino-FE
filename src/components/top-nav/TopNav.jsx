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
import Cookies from 'js-cookie';
import { TbCurrencyNaira } from 'react-icons/tb';

const TopNav = ({profileNav, setProfileNav, setCurrentModal, setDesktopSideNav, desktopSidenav, baseUrl, isOpen, setIsOpen}) => {

  const navigate = useNavigate()
  // const [profileNav, setProfileNav] = useState(false)
  const user = Cookies.get('token')
  const userProfile = JSON.parse(localStorage.getItem('user_details'))
  // console.log(JSON.parse(localStorage.getItem('user_details')).profile_pic);

  console.log(user);

  function toggleNav(){
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  

  return (
    <div className='flex items-center top-bg justify-between px-[1.5rem] py-[0.4rem] fixed w-full z-[10001]'>
      <div className='flex items-center gap-[1rem]'>
        <MdMenuOpen className='text-color text-[30px] cursor-pointer nav-toggle-1' onClick={() => setDesktopSideNav(!desktopSidenav)}/>
        <MdMenuOpen className='text-color text-[30px] cursor-pointer nav-toggle-2' onClick={toggleNav}/>
        <Link to="/"> <img src="./images/logo.png" className='w-[40px]' /> </Link>
        <div className='md:flex items-center text-white text-[18px] gap-2 py-2 px-4 rounded-[5px] gradient-btn hidden'>
          <ImSpades />
          <p>Casino</p>
        </div>
      </div>
      {
        user ?
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-8'>
            <div className='hidden md:flex items-center gap-2 text-color hover:text-white cursor-pointer text-[18px] font-[600] bg-primary-color pl-1 pr-3 py-1 rounded-[50px]'>
              <GiCash className='p-2 bg-profile-nav-bg text-[35px] rounded-full' />
              <p className='flex items-center'>
                  <TbCurrencyNaira className='text-[22px] mr-[2px]'/>
                  {userProfile && userProfile?.balance}
                </p>
            </div>
            <div onClick={() => setCurrentModal('deposit')} className='hidden md:flex items-center gap-1 text-color bg-primary-color py-2 px-3 cursor-pointer rounded-full'>
              <FaPlus />
              <p>Deposit</p>
            </div>
          </div>
          {
            user ?
            <div className='rounded-full w-[35px] mb-2 mx-auto cursor-pointer bg-primary-color' onClick={() => setProfileNav(!profileNav)}>
                <img src={`${baseUrl}${JSON.parse(localStorage.getItem('user_details'))?.profile_pic}`} className='w-full mx-auto rounded-full' alt="" />
            </div>
            :
            <HiOutlineUser className='text-color text-[26px] cursor-pointer hover:text-white' onClick={() => setProfileNav(!profileNav)}/>
          }
          
        </div>
        :
        <div className='flex items-center gap-[1rem] text-[12px] md:text-[16px]'>
          <p className='text-color cursor-pointer' onClick={() => setCurrentModal('login')}>SIGN IN</p>
          {/* <p className='text-color cursor-pointer' onClick={() => setCurrentModal('join-telegram')}>SIGN IN</p> */}
          <p className='py-[10px] md:px-7 px-4 md:ml-5 rounded-[5px] gradient-btn text-white cursor-pointer'  onClick={() => setCurrentModal('register')}>SIGN UP</p>
        </div>
      }

      {
        profileNav &&
        <div className='absolute bg-profile-nav-bg right-[10px] w-[200px] top-[65px] text-color py-2 rounded-[5px]'>
          <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('wallet')
          }} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <IoWalletOutline className='text-[18px]'/>
            <p>Wallet</p>
          </div>
          <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('withdraw')
          }} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <BiMoneyWithdraw className='text-[18px]'/>
            <p>Withdraw</p>
          </div>
          {/* <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('profile')
          }} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <FaRegCircleUser className='text-[18px]'/>
            <p>Profile</p>
          </div> */}
          <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('transaction')
          }} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <MdHistoryEdu className='text-[18px]'/>
            <p>Transaction</p>
          </div>
          <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('betHistory')
          }} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <BsClockHistory className='text-[18px]'/>
            <p>Bet History</p>
          </div>
          <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('settings')
          }} className='flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <HiOutlineCog6Tooth className='text-[18px]'/>
            <p>Settings</p>
          </div>
          {/* <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('deposit')
          }}  className='md:hidden flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <FaPlus className='text-[18px]'/>
            <p>Deposit</p>
          </div> */}
          <div  className='md:hidden flex items-center gap-3 py-2 px-4 hover:bg-side-nav-bg hover:text-white cursor-pointer'>
            <GiCash className='bg-profile-nav-bg text-[22px] rounded-full' />
            <p className='flex items-center'>
                <TbCurrencyNaira className='text-[18px]'/>
                {userProfile && userProfile?.balance}
              </p>
          </div>
          <div onClick={() => {
            localStorage.clear()
            Cookies.remove('token')
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
