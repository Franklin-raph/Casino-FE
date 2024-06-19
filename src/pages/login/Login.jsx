import React, { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [passwordType, setPasswordType] = useState('password')

  return (
    <div>
      <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => navigate('/')}></div>
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 max-w-md mx-auto w-full mt-[6rem] z-[101] relative">
        <img src="./images/vite.svg" className='mx-auto mb-5' alt="" />
        <div className=''>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Sign In</h2>
            <button className="text-gray-400 hover:text-white text-[30px] absolute top-2 right-6" onClick={() => navigate('/')}>&times;</button>
          </div>
          <div>
            <label>Email</label>
            <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded mb-4'>
              <input
                type="text" 
                placeholder="Account / Email / Phone Number" 
                className="w-full text-white bg-transparent outline-none"
              />
            </div>
          </div>

          <div className='mt-8'>
            <label>Password</label>
            <div className='flex items-center py-2 px-4 rounded mb-4 w-full border border-transparent bg-gray-800 hover:border-[#5A78FF]'>
              <input 
                type={passwordType} 
                placeholder="Password" 
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
          <button className="w-full bg-blue-500 text-white py-2 rounded my-4">
            Sign In
          </button>
          <div className="text-center mb-4">
            <Link to="/" className="text-gray-400 hover:text-white">Forgot Password?</Link>
          </div>
          <div className="text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login