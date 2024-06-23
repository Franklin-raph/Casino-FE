import React, { useEffect, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { FiLoader } from "react-icons/fi";

const Withdraw = ({setCurrentModal}) => {

    const [bankListDropDown, setBankListDropDown] = useState(false)
    const [accountName, setAccountName] = useState('')
    const [allBanks, setAllBanks] = useState([])
    const [selectedBank, setSelectedBank] = useState('Select bank')
    const [accNum, setAccNum] = useState('')
    const [bankCode, setBankCode] = useState('')
    const [accInfoLoading, setAccInfoLoading] = useState(false)

    useEffect(() => {
        getListOfBanks()
    },[])

    useEffect(() => {
        if (accNum.length === 10) {
            getAccountName()
        }
    }, [accNum])

    async function getListOfBanks() {
        const res = await fetch('https://api.paystack.co/bank')
        const data = await res.json()
        setAllBanks(data.data)
        console.log(data.data);
    }

    async function getAccountName(){
        if(selectedBank === 'Select bank' || selectedBank === ''){
            setAlertType('error')
            setMsg('Please select a bank')
            return
        }else{
            setAccInfoLoading(true)
            console.log(bankCode);
            const res = await fetch(`https://api.paystack.co/bank/resolve?account_number=${accNum}&bank_code=${bankCode}`,{
                headers : {
                    'Authorization': `Bearer sk_test_9a412d97576fd7676fb5d561e06b96546f9303de`
                }
            })
            const data = await res.json()
            if(res) setAccInfoLoading(false)
            setAccountName(data.data.account_name)
        if(!res.ok){
            setAlertType('error')
            setMsg(data.message)
            return
        }
            console.log(data);
        }
    }

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg max-w-[600px] mx-auto w-full z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <p className='mt-6 font-bold'>Request Withdrawal</p>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div>
                    <label className='text-color text-[14px] pb-1 block'>Bank Name</label>
                    <div className='cursor-pointer relative flex items-center justify-between w-full bg-gray-800 p-3 mb-4 rounded-[6px]' onClick={() => setBankListDropDown(!bankListDropDown)}>
                        <p className='text-[14px]'>{selectedBank}</p>
                        <IoChevronDown />
                        {
                            bankListDropDown&&
                            <div className='absolute bg-[#2A2F39] top-[55px] rounded-[6px] w-full left-0 overflow-y-scroll h-[300px]'>
                                {
                                    allBanks?.map((bank, index) => {
                                        return (
                                            <p key={index} onClick={() => {
                                                setBankListDropDown(!bankListDropDown)
                                                setSelectedBank(bank.name)
                                                setBankCode(bank.code)
                                                // setSelectedSelectedStatus(item)
                                            }} className='text-[14px] cursor-pointer px-4 py-2 hover:bg-[#23262F]'>{bank.name}</p>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className='w-full mb-4'>
                  <label className='text-color text-[14px] pb-1 block'>Account Number</label>
                  <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded flex items-center justify-between'>
                    <input
                      type="text" 
                      placeholder="1234567890" 
                      className="w-full text-white bg-transparent outline-none"
                      onChange={e => setAccNum(e.target.value)}
                    />
                    {accInfoLoading && <FiLoader className='text-color animate-spin' />}
                  </div>
                  <p className='text-color text-[12px] mt-[2px]'>ACCOUNT NAME: {accountName} </p>
                </div>
                <div className='w-full'>
                  <label className='text-color text-[14px] pb-1 block'>Amount</label>
                  <div className='border border-transparent bg-gray-800 hover:border-[#5A78FF] py-2 px-4 rounded mb-4'>
                    <input
                      type="text" 
                      placeholder="$ 90,000" 
                      className="w-full text-white bg-transparent outline-none"
                    />
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded">Place Withdrawal Request</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Withdraw