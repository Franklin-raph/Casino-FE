import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";

const BetHistory = ({setCurrentModal}) => {

    const [dropDown, setDropDown] = useState(false)

    const betHistoryArray = [
        {
            id:'1',
            date:["Today", "Last 7 days", "Last 60 days"]
        },
        {
            id:'2',
            games:["All games", "Original", "Slots", "Live", "Casual", "Shows", "Sport"]
        },

    ]
  
    const [selectedDate, setSelectedDate] = useState(betHistoryArray[0].date[0])

    const [selectedGame, setSelectedSelectedGame] = useState(betHistoryArray[1].games[0])

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg md:max-w-[700px] mx-auto w-[90%] z-[101] fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Bet History</p>
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
                                    betHistoryArray[0].date.map((item, index) => {
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
                    <div className='cursor-pointer relative flex items-center justify-between w-full bg-[#2A2F39] p-2 rounded-[6px]' onClick={() => setDropDown( dropDown === 'games' ? false : 'games' )}>
                        <p className='text-[14px]'>{selectedGame}</p>
                        <IoChevronDown />
                        {
                            dropDown === 'games' &&
                            <div className='absolute bg-[#2A2F39] top-[45px] rounded-[6px] w-full left-0'>
                                {
                                    betHistoryArray[1].games.map((item, index) => {
                                        return (
                                            <p key={index} onClick={() => {
                                                setDropDown(false)
                                                setSelectedSelectedGame(item)
                                            }} className='text-[14px] cursor-pointer px-4 py-2 hover:bg-[#23262F]'>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className='mt-3 h-[350px] bg-[#191B21] rounded-[6px] p-4 flex items-center' onClick={() => setDropDown(false)}>
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

export default BetHistory