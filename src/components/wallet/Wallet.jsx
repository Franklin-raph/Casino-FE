import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";


const Wallet = ({setCurrentModal}) => {

    const userProfile = JSON.parse(localStorage.getItem('user_details'))

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[600px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Wallet</p>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div className='mb-5 border border-dashed border-color rounded-[6px] p-4'>
                    <p className='text-[20px]'>Cash</p>
                    <div className='font-[700] text-[22px] flex items-center justify-center text-center mt-2 text-green-500'>
                        <TbCurrencyNaira />
                        <p className='font-[700]'>{userProfile && userProfile?.balance}</p>
                    </div>
                    <p className='text-center bg-primary-color rounded-full py-1 mt-2 cursor-pointer'>Deposit Now</p>
                </div>
                <div className='border border-dashed border-color rounded-[6px] p-4'>
                    <p className='text-[20px]'>Bonus</p>
                    <div className='font-[700] text-[22px] flex items-center justify-center text-center mt-2 text-green-500'>
                        <TbCurrencyNaira />
                        <p className='font-[700]'>{userProfile && userProfile?.bonus}</p>
                        {/* <p>1,000</p> */}
                    </div>
                    <p className='text-center bg-primary-color rounded-full py-1 mt-2 cursor-pointer'>Get Bonus</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet