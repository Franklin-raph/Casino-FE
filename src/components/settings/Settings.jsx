import React, { useState } from 'react'
import { HiEyeOff } from 'react-icons/hi'
import { HiEye } from 'react-icons/hi2'

const Settings = ({setCurrentModal}) => {

  const settingsTypeArray = ["Phone", "Password"]
  const [selectedTab, setSelectedTab] = useState(settingsTypeArray[0])
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const [passwordType, setPasswordType] = useState('password')

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[600px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Settings</p>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
              <div className='flex items-center border-b border-side-nav-bg'>
                {
                  settingsTypeArray.map((item, index) => {
                    return (
                      <p className={`px-[.8rem] pb-[10px] font-[500] text-[#667085] cursor-pointer ${selectedTabIndex === index ? 'text-color border-b border-color' : ''}`} onClick={() => { 
                        setSelectedTab(item)
                        setSelectedTabIndex(index)
                      }} >{item}</p>
                    )
                  })
                }
              </div>
              {
                selectedTab === "Phone" &&
                <div className='w-full mt-10'>
                  <label className='text-color text-[14px] pb-2 block'>Phone Number</label>
                  <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded mb-4'>
                    <input
                      type="text" 
                      placeholder="+123-456-789" 
                      className="w-full text-white bg-transparent outline-none"
                    />
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded">Update Contact</button>
                </div>
              }

              {
                selectedTab === "Password" &&
                <>
                  <div className='mt-4 w-full'>
                    <label className='text-color text-[14px]'>Old Password</label>
                    <div className='flex items-center py-2 px-4 rounded mb-4 w-full border border-transparent bg-gray-800 hover:border-[#5A78FF]'>
                      <input 
                        type={passwordType} 
                        placeholder="********" 
                        className="w-full text-white bg-transparent outline-none"
                      />
                      {
                        passwordType === "password" ?
                        <HiEye className='cursor-pointer' onClick={() => setPasswordType('text')}/>
                        :
                        <HiEyeOff className='cursor-pointer' onClick={() => setPasswordType('password')}/>
                      }
                    </div>
                  </div>
                  <div className='mt-4 w-full'>
                    <label className='text-color text-[14px]'>New Password</label>
                    <div className='flex items-center py-2 px-4 rounded mb-4 w-full border border-transparent bg-gray-800 hover:border-[#5A78FF]'>
                      <input 
                        type={passwordType} 
                        placeholder="********" 
                        className="w-full text-white bg-transparent outline-none"
                      />
                      {
                        passwordType === "password" ?
                        <HiEye className='cursor-pointer' onClick={() => setPasswordType('text')}/>
                        :
                        <HiEyeOff className='cursor-pointer' onClick={() => setPasswordType('password')}/>
                      }
                    </div>
                  </div>
                  <div className='mt-4 w-full'>
                    <label className='text-color text-[14px]'>Confirm New Password</label>
                    <div className='flex items-center py-2 px-4 rounded mb-4 w-full border border-transparent bg-gray-800 hover:border-[#5A78FF]'>
                      <input 
                        type={passwordType} 
                        placeholder="********" 
                        className="w-full text-white bg-transparent outline-none"
                      />
                      {
                        passwordType === "password" ?
                        <HiEye className='cursor-pointer' onClick={() => setPasswordType('text')}/>
                        :
                        <HiEyeOff className='cursor-pointer' onClick={() => setPasswordType('password')}/>
                      }
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded">Update Password</button>
                </>
              }
            </div>
        </div>
    </div>
  )
}

export default Settings