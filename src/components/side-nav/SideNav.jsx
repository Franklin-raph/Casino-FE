import React from 'react'
import { RiFootballLine } from "react-icons/ri";
import { MdLiveTv } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineShare } from "react-icons/hi";



const SideNav = () => {
  return (
    <div className='bg-side-nav-bg text-white pt-[5rem] flex flex-col justify-start items-start w-[18%] gap-2 h-full px-2 fixed'>
      <button className='flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full'>
        <RiFootballLine className='text-[20px]' />
        <p>Bonus Games</p>
      </button>
      <button className='flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full'>
        <RiFootballLine className='text-[20px]' />
        <p>Live</p>
      </button>
      <button className='flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full'>
        <TbTargetArrow className='text-[20px]' />
        <p>Casual</p>
      </button>
      <button className='flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full'>
        <MdLiveTv className='text-[20px]' />
        <p>Shows</p>
      </button>
      <button className='flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full'>
        <HiOutlineShare className='text-[20px]' />
        <p>Affiliate</p>
      </button>
    </div>
  )
}

export default SideNav