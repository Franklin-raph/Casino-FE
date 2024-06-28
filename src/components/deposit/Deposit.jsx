import React, { useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import BtnLoader from '../btn-loader/BtnLoader';

const Deposit = ({setCurrentModal}) => {

    const accDetails = JSON.parse(localStorage.getItem('admin_account_details'))
    const [loading, setLoading] = useState(false)
    const [amount, setAmount] = useState('')

    async function requestDeposit(){
        // setLoading(true)
        // // API call to request deposit
        // console.log('Requesting deposit...');
        // setLoading(false)
        // setCurrentModal('')
    }

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
                    <p>Bank: <span className='font-[700]'>{accDetails?.bank_name}</span> </p>
                    <p>Account Name: <span className='font-[700]'>{accDetails?.account_name}</span> </p>
                    <div className='flex items-center gap-4'>
                        <p>Account Number: <span className='font-[700]'>{accDetails?.account_number}</span> </p>
                        <IoCopyOutline  className='text-color cursor-pointer'/>
                    </div>
                </div>
                <div className='w-full mt-10'>
                  <label className='text-color text-[14px] pb-2 block'>Amount</label>
                  <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded mb-4'>
                    <input
                      type="number" 
                      placeholder="20000" 
                      className="w-full text-white bg-transparent outline-none"
                      onChange={e => setAmount(e.target.value)}
                    />
                  </div>
                  {
                    loading ?
                    <BtnLoader/>
                    :
                    <button onClick={requestDeposit} className="w-full bg-blue-500 text-white py-2 rounded">Place Deposit Request</button>
                  }
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