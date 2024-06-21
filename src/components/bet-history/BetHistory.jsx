import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";

const BetHistory = ({setCurrentModal}) => {

  
    const [dateDropDown, setDateDropDown] = useState(false)
    const dateArray = ["Today", "Last 7 days", "Last 60 days"]
    const [selectedDate, setSelectedDate] = useState(dateArray[0])

    const [gamesDropDown, setGamesDropDown] = useState(false)
    const gamesArray = ["All games", "Original", "Slots", "Live", "Casual", "Shows", "Sport"]
    const [selectedGame, setSelectedSelectedGame] = useState(gamesArray[0])

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[700px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Bet History</p>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='cursor-pointer relative flex items-center justify-between w-full bg-[#2A2F39] p-2 rounded-[6px]' onClick={() => setDateDropDown(!dateDropDown)}>
                        <p className='text-[14px]'>{selectedDate}</p>
                        <IoChevronDown />
                        {
                            dateDropDown&&
                            <div className='absolute bg-[#2A2F39] top-[45px] rounded-[6px] w-full left-0'>
                                {
                                    dateArray.map((item, index) => {
                                        return (
                                            <p key={index} onClick={() => {
                                                setDateDropDown(!dateDropDown)
                                                setSelectedDate(item)
                                            }} className='text-[14px] cursor-pointer px-4 py-2 hover:bg-[#23262F]'>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='cursor-pointer relative flex items-center justify-between w-full bg-[#2A2F39] p-2 rounded-[6px]' onClick={() => setGamesDropDown(!gamesDropDown)}>
                        <p className='text-[14px]'>{selectedGame}</p>
                        <IoChevronDown />
                        {
                            gamesDropDown&&
                            <div className='absolute bg-[#2A2F39] top-[45px] rounded-[6px] w-full left-0'>
                                {
                                    gamesArray.map((item, index) => {
                                        return (
                                            <p key={index} onClick={() => {
                                                setGamesDropDown(!gamesDropDown)
                                                setSelectedSelectedGame(item)
                                            }} className='text-[14px] cursor-pointer px-4 py-2 hover:bg-[#23262F]'>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className='my-3 h-[400px] bg-[#191B21] rounded-[6px] p-4'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default BetHistory