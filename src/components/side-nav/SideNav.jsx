import React from 'react'
import { RiFootballLine } from "react-icons/ri";
import { MdLiveTv } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineShare, HiOutlineUser } from "react-icons/hi";
import { useLocation, useNavigate } from 'react-router-dom';
import { TbSmartHome } from "react-icons/tb";



const SideNav = ({desktopSidenav, setCurrentModal}) => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      {
        desktopSidenav &&
          <div className='bg-side-nav-bg text-white pt-[5rem] flex flex-col justify-start items-start w-[18%] gap-2 h-full px-2 fixed'>
            <button onClick={() => navigate('/')} className={ location.pathname === '/' ? 'flex items-center gap-[15px] py-3 pl-[1.5rem] rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <TbSmartHome className='text-[20px]' />
              <p>Home</p>
            </button>
            <button onClick={() => navigate('/bonus-games')} className={ location.pathname.includes('bonus') ? 'flex items-center gap-[15px] py-3 pl-[1.5rem] rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <RiFootballLine className='text-[20px]' />
              <p>Bonus Games</p>
            </button>
            <button onClick={() => navigate('/live')} className={ location.pathname.includes('live') ? 'flex items-center gap-[15px] py-3 pl-[1.5rem] rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <RiFootballLine className='text-[20px]' />
              <p>Live</p>
            </button>
            <button onClick={() => navigate('/casual')} className={ location.pathname.includes('casual') ? 'flex items-center gap-[15px] py-3 pl-[1.5rem] rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <TbTargetArrow className='text-[20px]' />
              <p>Casual</p>
            </button>
            <button onClick={() => navigate('/shows')} className={ location.pathname.includes('shows') ? 'flex items-center gap-[15px] py-3 pl-[1.5rem] rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center gap-[15px] text-color bg-profile-nav-bg py-3 pl-[1.5rem] rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <MdLiveTv className='text-[20px]' />
              <p>Shows</p>
            </button>

            {
              localStorage.getItem('casino-email') &&
              <div onClick={() => setCurrentModal('profile')} className='cursor-pointer absolute left-0 bottom-0 flex items-center gap-[15px] text-color pl-[1.5em] bg-profile-nav-bg py-2 rounded-[4px] w-full hover:text-white hover:border-color border border-transparent'>
                <HiOutlineUser />
                <p>{ localStorage.getItem('casino-email') }</p>
              </div>
            }
          </div>
      }

      {
        !desktopSidenav &&
          <div className='bg-side-nav-bg text-white pt-[5rem] flex flex-col justify-start items-start w-[5%] gap-2 h-full px-2 fixed'>
            <button onClick={() => navigate('/')} className={ location.pathname.includes('bonus') ? 'flex items-center justify-center py-3 rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center justify-center text-color bg-profile-nav-bg py-3 rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <TbSmartHome className='text-[20px]' />
              {/* <p>Bonus Games</p> */}
            </button>
            <button onClick={() => navigate('/bonus-games')} className={ location.pathname.includes('bonus') ? 'flex items-center justify-center py-3 rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center justify-center text-color bg-profile-nav-bg py-3 rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <RiFootballLine className='text-[20px]' />
              {/* <p>Bonus Games</p> */}
            </button>
            <button onClick={() => navigate('/live')} className={ location.pathname.includes('live') ? 'flex items-center justify-center py-3 rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center justify-center text-color bg-profile-nav-bg py-3 rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <RiFootballLine className='text-[20px]' />
              {/* <p>Live</p> */}
            </button>
            <button onClick={() => navigate('/casual')} className={ location.pathname.includes('casual') ? 'flex items-center justify-center py-3 rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center justify-center text-color bg-profile-nav-bg py-3 rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <TbTargetArrow className='text-[20px]' />
              {/* <p>Casual</p> */}
            </button>
            <button onClick={() => navigate('/shows')} className={ location.pathname.includes('shows') ? 'flex items-center justify-center py-3 rounded-[4px] w-full bg-side-nav-bg text-white border-color border' : 'flex items-center justify-center text-color bg-profile-nav-bg py-3 rounded-[4px] w-full hover:bg-side-nav-bg hover:text-white hover:border-color border border-transparent' }>
              <MdLiveTv className='text-[20px]' />
              {/* <p>Shows</p> */}
            </button>

            {
              localStorage.getItem('casino-email') &&
              <div onClick={() => setCurrentModal('profile')} className='absolute cursor-pointer left-0 bottom-0 flex items-center gap-[15px] text-color justify-center bg-profile-nav-bg py-2 rounded-[4px] w-full hover:text-white hover:border-color border border-transparent'>
                <HiOutlineUser />
                {/* <p>{ localStorage.getItem('casino-email') }</p> */}
              </div>
            }
          </div>
      }
      
    </>
  )
}

export default SideNav