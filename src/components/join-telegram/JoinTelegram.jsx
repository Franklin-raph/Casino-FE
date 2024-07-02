import React from 'react'
import { FaTelegram } from 'react-icons/fa6'

const JoinTelegram = ({setCurrentModal}) => {
  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 md:max-w-md mx-auto w-[90%] z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="./images/logo.png" className='mx-auto mb-4 w-[100px]' alt="" />
        <div className='text-center'>
            <p className='font-bold text-[20px] mb-3'>EXCITING NEWS</p>
            <p>
                We are thrilled to announce that our website will be launching soon. 
                Stay tuned for updates and exclusive content. In the meantime, 
                join our Telegram channel to be the first to know about our latest 
                developments and to stay connected with our community.
            </p>
            <p className='flex items-center justify-center my-4 gap-2 font-bold'>Join us on Telegram: <a href="https://t.me/Arcaderoyalegames" target='_blank' className='font-bold text-[20px]'><FaTelegram /></a> </p>
            <p>Thank you for your support!</p>
        </div>
        </div>
        {/* {
            msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        } */}
    </div>
  )
}

export default JoinTelegram