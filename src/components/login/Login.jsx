import React, { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../alert/Alert'
import BtnLoader from '../btn-loader/BtnLoader'

const Login = ({setCurrentModal, baseUrl}) => {

  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState()
  const [alertType, setAlertType] = useState()
  const [loading, setLoading] = useState(false)

  const [passwordType, setPasswordType] = useState('password')

  async function handleLogin(){
    if(!value || !password){
      setMsg('Please fill all the fields')
      setAlertType('error')
      return
    }else{
      setLoading(true)
      const res = await fetch(`${baseUrl}/auth/login`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: value,
          password: password
        })
      })
      const data = await res.json()
      if(res) setLoading(false)
      console.log(data);
      if(!res.ok){
        setAlertType('error')
        setMsg(data.error_message)
        return
      }else{
        localStorage.setItem('casino-email', email)
        window.location.assign('/')
      }
    }
  }

  return (
    <div>
      <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 max-w-md mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="./images/vite.svg" className='mx-auto mb-5' alt="" />
        <div className=''>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Sign In</h2>
            <button className="text-gray-400 hover:text-white text-[30px] absolute top-2 right-6" onClick={() => setCurrentModal('')}>&times;</button>
          </div>
          <div>
            <label className='text-color text-[14px]'>Email</label>
            <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded mb-4'>
              <input
                type="text" 
                placeholder="Email / Phone Number" 
                className="w-full text-white bg-transparent outline-none"
                onChange={e => setValue(e.target.value)}
              />
            </div>
          </div>

          <div className='mt-8'>
            <label className='text-color text-[14px]'>Password</label>
            <div className='flex items-center py-2 px-4 rounded mb-4 w-full border border-transparent bg-gray-800 hover:border-[#5A78FF]'>
              <input 
                type={passwordType} 
                placeholder="Password" 
                className="w-full text-white bg-transparent outline-none"
                onChange={e => setPassword(e.target.value)}
              />
              {
                passwordType === "password" ?
                <HiEye className='cursor-pointer' onClick={() => setPasswordType('text')}/>
                :
                <HiEyeOff className='cursor-pointer' onClick={() => setPasswordType('password')}/>
              }
            </div>
          </div>
          {
            loading?
            <BtnLoader />
            :
            <button className="w-full bg-blue-500 text-white py-2 rounded my-4" onClick={handleLogin}>
              Sign In
            </button>
          }

          <div className="text-center mb-4">
            <Link to="/" className="text-gray-400 hover:text-white">Forgot Password?</Link>
          </div>
          <div className="text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <Link  onClick={() => setCurrentModal('register')}  className="text-blue-500 hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
      {
        msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
      }
    </div>
  )
}

export default Login