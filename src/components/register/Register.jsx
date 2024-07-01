import React, { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../alert/Alert'
import BtnLoader from '../btn-loader/BtnLoader'

const Register = ({setCurrentModal, baseUrl}) => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [password_confirm, setPasswordConfirm] = useState('')

  const [msg, setMsg] = useState()
  const [alertType, setAlertType] = useState()
  const [loading, setLoading] = useState(false)

  const [passwordType, setPasswordType] = useState('password')

  async function handleUseSignUp(){
    if(!email || !password || !first_name || !last_name || !phone_number || !password_confirm){
      setMsg('Please fill all the fields')
      setAlertType('error')
      return
    }else{
      setLoading(true)
      console.log(JSON.stringify({
        email: email,
        password:password,
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        password_confirm:  password_confirm
      }));
      const res = await fetch(`${baseUrl}/auth/signup`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password:password,
          first_name: first_name,
          last_name: last_name,
          phone_number: phone_number,
          password_confirm:  password_confirm
        })
      })
      const data = await res.json()
      console.log(data);
      if(res) setLoading(false)
      if(!res.ok){
        setAlertType('error')
        setMsg(data.error_message)
        return
      }
      if(res.ok){
        setAlertType('success')
        setMsg('Registeration was successfull')
        setTimeout(() => {
          setCurrentModal('login')
        }, 2000);
      }
    }
  }

  return (
    <div>
      <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 md:max-w-[700px] mx-auto w-[90%] z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="./images/logo.png" className='mx-auto mb-4 w-[100px]' alt="" />
        <div className=''>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Sign Up</h2>
            <button className="text-gray-400 hover:text-white text-[30px] absolute top-2 right-6" onClick={() => setCurrentModal('')}>&times;</button>
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-[10px] w-full'>
            <div className='w-full'>
              <label className='text-color text-[14px]'>First Name</label>
              <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded mb-4'>
                <input
                  onChange={e => setFirstName(e.target.value)}
                  type="text" 
                  placeholder="John" 
                  className="w-full text-white bg-transparent outline-none"
                />
              </div>
            </div>

            <div className='w-full'>
              <label className='text-color text-[14px]'>Last Name</label>
              <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded mb-4'>
                <input
                  onChange={e => setLastName(e.target.value)}
                  type="text" 
                  placeholder="Doe" 
                  className="w-full text-white bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-[10px] w-full my-4'>
            <div className='w-full'>
              <label className='text-color text-[14px]'>Email</label>
              <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded'>
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="text" 
                  placeholder="johndoe@gmail.com" 
                  className="w-full text-white bg-transparent outline-none"
                />
              </div>
            </div>

            <div className='w-full my-4'>
              <label className='text-color text-[14px]'>Phone Number</label>
              <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded'>
                <input
                  onChange={e => setPhoneNumber(e.target.value)}
                  type="text" 
                  placeholder="+123-456-789" 
                  className="w-full text-white bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-[10px] w-full'>
            <div className='w-full'>
              <label className='text-color text-[14px]'>Password</label>
              <div className='flex items-center py-2 px-4 rounded mb-4 w-full border border-transparent bg-gray-800 hover:border-[#5A78FF]'>
                <input
                  onChange={e => setPassword(e.target.value)}
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
              <label className='text-color text-[14px]'>Confirm Password</label>
              <div className='flex items-center py-2 px-4 rounded mb-4 w-full border border-transparent bg-gray-800 hover:border-[#5A78FF]'>
                <input
                  onChange={e => setPasswordConfirm(e.target.value)}
                  type={passwordType} 
                  placeholder="*********" 
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
          </div>

          <div className='flex items-center gap-2'>
            <input type="checkbox" />
            <p className='text-color text-[14px]'>I agree to the user agreement & confirm I am at least 18 years old</p>
          </div>

          {
            loading?
            <BtnLoader/>
            :
            <button onClick={handleUseSignUp} className="w-full bg-blue-500 text-white py-2 rounded my-4">
              Sign Up
            </button>
          }

          {/* <button onClick={handleUseSignUp} className="w-full bg-blue-500 text-white py-2 rounded my-4">
            Sign Up
          </button> */}
          <div className="text-center">
            <span className="text-gray-400">Already have an account? </span>
            <Link onClick={() => setCurrentModal('login')} className="text-blue-500 hover:underline">Sign In.</Link>
          </div>
        </div>
      </div>
      {
        msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
      }
    </div>
  )
}

export default Register