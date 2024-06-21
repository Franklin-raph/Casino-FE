import React from 'react'
import { IoCopyOutline } from "react-icons/io5";

const Deposit = ({setCurrentModal}) => {
  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[600px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Deposit</p>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div className='flex gap-4 flex-col text-lg'>
                    <p>Bank: <span className='font-[700]'>Access Bank</span> </p>
                    <p>Account Name: <span className='font-[700]'>Igboekwulusi Franklin Chinedu</span> </p>
                    <div className='flex items-center gap-4'>
                        <p>Account Number: <span className='font-[700]'>1451065060</span> </p>
                        <IoCopyOutline  className='text-color cursor-pointer'/>
                    </div>
                </div>
                {/* <div className='grid grid-cols-3 mt-5 gap-3'>
                    <div className='text-center bg-side-nav-bg py-3 rounded-[6px]'>
                        <p className='text-color mb-2'>Joined</p>
                        <p className='font-[700]'>2024-06-21</p>
                    </div>
                    <div className='text-center bg-side-nav-bg py-3 rounded-[6px]'>
                        <p className='text-color mb-2'>Total Bet</p>
                        <p className='font-[700]'>$6</p>
                    </div>
                    <div className='text-center bg-side-nav-bg py-3 rounded-[6px]'>
                        <p className='text-color mb-2'>Total Bonus</p>
                        <p className='font-[700]'>$2,024</p>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Deposit