import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { TbTargetArrow } from 'react-icons/tb'

const Casual = () => {
  return (
    <div className='md:px-[1.5rem] px-[10px] py-[1rem]'>
        <div className='flex items-center justify-between flex-col gap-[1rem] sm:flex-row'>
            <div className='flex items-center gap-2'>
                <TbTargetArrow className='md:text-[32px] text-[26px] text-color' />
                <p className='md:text-[30px] text-[20px] font-bold text-white'>Casual</p>
            </div>
            <div className='border border-top-nav-bg-right flex items-center rounded-[6px] text-color'>
                <BiSearch className='text-[32px] border-r border-top-nav-bg-right p-2 '/>
                <input type="text" className='bg-transparent outline-none px-4' placeholder='Search Games'/>
            </div>
        </div>
        <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/games.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/games1.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/games2.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/games3.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/games4.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/games5.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/games6.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/game01.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/game02.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/game0.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/game03.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/game7.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
          <div className='rounded-[6px] relative card-parent cursor-pointer'>
            <div className='hover-bg flex items-center justify-center'>
              <button className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
            </div>
            <img src="./images/game8.avif" className='rounded-[6px] h-full object-contain' alt="" />
          </div>
        </div>
    </div>
  )
}

export default Casual