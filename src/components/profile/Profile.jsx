import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoCopyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { HiPencil } from "react-icons/hi2";


const Profile = ({setCurrentModal, baseUrl}) => {

    const userProfile = JSON.parse(localStorage.getItem('user_details'))
    console.log(userProfile.profile_pic);

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[600px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Profile</p>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div className='flex items-start justify-between'>
                    <div></div>
                    <div className='flex pl-[30px] items-center justify-center flex-col'>
                        {
                            userProfile &&
                            <div>
                                {
                                    userProfile.profile_pic === "default.jpg" ?
                                    <CiUser className='text-[60px]'/> 
                                    :
                                    <div className='rounded-full border-[3px] border-color w-[100px] mb-2 mx-auto'>
                                        <img src={`${baseUrl}${userProfile.profile_pic}`} className='w-full mx-auto rounded-full' alt="" />
                                    </div>
                                }
                            </div>
                        }
                        <p className='font-bold text-[20px]'>Franklin Raphael</p>
                        <div className='flex items-center gap-4 text-color'>
                            <p>ID: <span className='font-[700]'>{userProfile && userProfile?.id}</span> </p>
                            <IoCopyOutline  className='text-color cursor-pointer'/>
                        </div>
                    </div>
                    <div className='p-[6px] text-color cursor-pointer bg-side-nav-bg rounded-[3px]'>
                        <HiPencil className='text-[20px]' onClick={() => setCurrentModal('profilePic')}/>
                    </div>
                </div>
                <div className='grid grid-cols-3 mt-5 gap-3'>
                    <div className='text-center bg-side-nav-bg py-3 rounded-[6px]'>
                        <p className='text-color mb-2'>Joined</p>
                        <p className='font-[700]'>{userProfile && new Date(userProfile?.created_at).toDateString()}</p>
                    </div>
                    <div className='text-center bg-side-nav-bg py-3 rounded-[6px]'>
                        <p className='text-color mb-2'>Total Balance</p>
                        <p className='font-[700]'>{userProfile && userProfile?.balance}</p>
                    </div>
                    <div className='text-center bg-side-nav-bg py-3 rounded-[6px]'>
                        <p className='text-color mb-2'>Total Bonus</p>
                        <p className='font-[700]'>{userProfile && userProfile?.bonus}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile