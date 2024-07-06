import React from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { FaPiggyBank, FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { MdAutoGraph } from "react-icons/md";


const BottomNav = ({setProfileNav, setCurrentModal,}) => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user_details'))

    function checkUserAANdNavigate(path){
        setProfileNav(false)
        if(!user){
            setCurrentModal('login')
        }else{
            setCurrentModal(path)
        }
    }

  return (
    <div className='flex items-center top-bg justify-between px-[1.5rem] py-[0.5rem] fixed bottom-0 w-full z-[10001] md:hidden'>
        <div onClick={() => {
            setProfileNav(false)
            setCurrentModal('')
            navigate('/')
          }}  className='flex items-center flex-col text-center cursor-pointer gap-[2px]'>
            <HiOutlineHome className='text-[22px] text-color'/>
            <p className='text-white text-[12px] font-[600]'>Home</p>
        </div>
        <div 
            onClick={() => setCurrentModal('coming-soon')}
            className='flex items-center flex-col text-center cursor-pointer gap-[2px]'>
            <MdAutoGraph className='text-[22px] text-color'/>
            <p className='text-white text-[12px] font-[600]'>Promotion</p>
        </div>
        <div onClick={() => {
            checkUserAANdNavigate('deposit')
          }} className='flex items-center flex-col text-center cursor-pointer gap-[2px]'>
            <FaPiggyBank className='text-[22px] text-color'/>
            <p className='text-white text-[12px] font-[600]'>Deposit</p>
        </div>
        <div onClick={() => {
            checkUserAANdNavigate('profile')
          }} className='flex items-center flex-col text-center cursor-pointer gap-[2px]'>
            <FaRegCircleUser className='text-[22px] text-color'/>
            <p className='text-white text-[12px] font-[600]'>Profile</p>
        </div>
    </div>
  )
}

export default BottomNav