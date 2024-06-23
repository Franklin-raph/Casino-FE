import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";


const Transaction = ({setCurrentModal}) => {

    const [dropDown, setDropDown] = useState(false)

    const txnHistoryArray = [
        {
            id:'1',
            date:["Today", "Last 7 days", "Last 60 days"]
        },
        {
            id:'2',
            txnType:["Withdraw", "Deposit"]
        },
        {
            id:'3',
            status:["All", "Pending", "Successful", "Failed"]
        },

    ]
  
    const [selectedDate, setSelectedDate] = useState(txnHistoryArray[0].date[0])

    const [selectedTxnType, setSelectedSelectedTxnType] = useState(txnHistoryArray[1].txnType[0])

    // const dateArray = ["Today", "Yesterday", "Last 3 days", "Last 7 days", "Last 15 days", "Last 30 days"]
    // const [selectedDate, setSelectedDate] = useState(dateArray[0])

    // const withdrawArray = ["Withdraw", "Deposit"]
    // const [selectedWithdrawal, setSelectedSelectedWithdrawal] = useState(withdrawArray[0])

    // const statusArray = ["All", "Pending", "Successful", "Failed"]
    const [selectedStatus, setSelectedSelectedStatus] = useState(txnHistoryArray[2].status[0])

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[700px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Transaction</p>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='cursor-pointer relative flex items-center justify-between w-full bg-[#2A2F39] p-2 rounded-[6px]' onClick={() => setDropDown( dropDown === 'date' ? false : 'date' )}>
                        <p className='text-[14px]'>{selectedDate}</p>
                        <IoChevronDown />
                        {
                            dropDown === 'date' &&
                            <div className='absolute bg-[#2A2F39] top-[45px] rounded-[6px] w-full left-0'>
                                {
                                    txnHistoryArray[0].date.map((item, index) => {
                                        return (
                                            <p key={index} onClick={() => {
                                                setDropDown(false)
                                                setSelectedDate(item)
                                            }} className='text-[14px] cursor-pointer px-4 py-2 hover:bg-[#23262F]'>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='cursor-pointer relative flex items-center justify-between w-full bg-[#2A2F39] p-2 rounded-[6px]' onClick={() => setDropDown( dropDown === 'withdraw' ? false : 'withdraw' )}>
                        <p className='text-[14px]'>{selectedTxnType}</p>
                        <IoChevronDown />
                        {
                            dropDown === 'withdraw' &&
                            <div className='absolute bg-[#2A2F39] top-[45px] rounded-[6px] w-full left-0'>
                                {
                                    txnHistoryArray[1].txnType.map((item, index) => {
                                        return (
                                            <p key={index} onClick={() => {
                                                setDropDown(false)
                                                setSelectedSelectedTxnType(item)
                                            }} className='text-[14px] cursor-pointer px-4 py-2 hover:bg-[#23262F]'>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='cursor-pointer relative flex items-center justify-between w-full bg-[#2A2F39] p-2 rounded-[6px]' onClick={() => setDropDown( dropDown === 'status' ? false : 'status' )}>
                        <p className='text-[14px]'>{selectedStatus}</p>
                        <IoChevronDown />
                        {
                            dropDown === 'status' &&
                            <div className='absolute bg-[#2A2F39] top-[45px] rounded-[6px] w-full left-0'>
                                {
                                    txnHistoryArray[2].status.map((item, index) => {
                                        return (
                                            <p key={index} onClick={() => {
                                                setDropDown(false)
                                                setSelectedSelectedStatus(item)
                                            }} className='text-[14px] cursor-pointer px-4 py-2 hover:bg-[#23262F]'>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className='my-3 h-[400px] bg-[#191B21] rounded-[6px] p-4 flex items-center' onClick={() => setDropDown(false)}>
                    <div className='flex items-center justify-center flex-col'>
                        <img src="./images/empty.avif" className='w-[40%]' alt="" />
                        <p className='text-color'>Oops! No data yet!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Transaction