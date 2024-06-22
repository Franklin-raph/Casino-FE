import React, { useState } from 'react'
import { RxChevronLeft } from "react-icons/rx";


const ProfilePic = ({setCurrentModal}) => {

    const images = [
        {
            id:1,
            img:'./images/user1.avif'
        },
        {
            id:1,
            img:'./images/user2.avif'
        },
        {
            id:1,
            img:'./images/user3.avif'
        },
        {
            id:1,
            img:'./images/user4.avif'
        },
        {
            id:1,
            img:'./images/user5.avif'
        },
        {
            id:1,
            img:'./images/user6.avif'
        },

        {
            id:1,
            img:'./images/user7.avif'
        },
        {
            id:1,
            img:'./images/user15.avif'
        },

        {
            id:1,
            img:'./images/user8.avif'
        },

        {
            id:1,
            img:'./images/user9.avif'
        },
        {
            id:1,
            img:'./images/user10.avif'
        },
        {
            id:1,
            img:'./images/user11.avif'
        },
        {
            id:1,
            img:'./images/user12.avif'
        },
        {
            id:1,
            img:'./images/user13.avif'
        },
        {
            id:1,
            img:'./images/user14.avif'
        },
    ]
    const [selectedImage, setelectedImage] = useState(images[0].img)

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[600px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <div className='flex items-center gap-1 mt-6'>
                    <RxChevronLeft className='cursor-pointer' onClick={() => setCurrentModal('profile')}/>
                    <p className='font-bold'>Change Profile Picture</p>
                </div>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div className='rounded-full border-[3px] border-color w-[120px] mx-auto'>
                    <img src={selectedImage} className='w-full mx-auto rounded-full' alt="" />
                </div>
                <div className='grid grid-cols-5 mt-10 bg-side-nav-bg p-3 gap-3 rounded-[6px] place-items-center'>
                    {
                        images.map((item, index) => {
                            return (
                                <div className='rounded-full w-[70px] cursor-pointer'>
                                    <img src={item.img} className={selectedImage === item.img ? 'w-full border-[3px] border-green-500 mx-auto rounded-full' : 'w-full mx-auto rounded-full'} onClick={() => {
                                        setelectedImage(item.img)
                                        localStorage.setItem('casino-img', selectedImage)
                                    }} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePic