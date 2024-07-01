import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { RxChevronLeft } from "react-icons/rx";
import Alert from '../alert/Alert';


const ProfilePic = ({setCurrentModal, baseUrl}) => {

    const images = [{'id': '4a4fe758-7a30-40ab-b56c-8bdec60b365f', 'url': '/static/profile_img/user1.avif'}, {'id': 'c3259a38-586e-497e-89ec-18756cc95c01', 'url': '/static/profile_img/user2.avif'}, {'id': 'a3a01374-bd84-4e9c-919e-43b99f604c51', 'url': '/static/profile_img/user3.avif'}, {'id': '4d637cff-00ab-48f2-a301-37fca188bbdf', 'url': '/static/profile_img/user4.avif'}, {'id': '6f834cf8-29f5-493a-8857-c6b0a0448a89', 'url': '/static/profile_img/user5.avif'}, {'id': '8729d940-8181-4f0c-af28-5ca41d1e6b18', 'url': '/static/profile_img/user6.avif'}, {'id': 'ed8cad1d-a03e-45c1-b042-8681a118b333', 'url': '/static/profile_img/user7.avif'}, {'id': '429cc5a0-c0f1-49dd-ae2f-7c8791c8708b', 'url': '/static/profile_img/user8.avif'}, {'id': '2630129c-5302-404a-8cd6-d24f270cd32c', 'url': '/static/profile_img/user9.avif'}, {'id': '99625f89-1c3a-494d-aa30-d327ba9588d4', 'url': '/static/profile_img/user10.avif'}, {'id': '2e6d4233-39e4-4caa-8866-fc51a86de771', 'url': '/static/profile_img/user11.avif'}, {'id': '797d6d99-6dc8-4e8a-ab32-b1aee88e4bc0', 'url': '/static/profile_img/user12.avif'}, {'id': '60825a60-6a99-4c17-aa23-3380dec9f53c', 'url': '/static/profile_img/user13.avif'}, {'id': 'dcdce579-468b-4ccf-8f27-c2eb6dacafab', 'url': '/static/profile_img/user14.avif'}, {'id': 'b3a75a7d-4514-4a56-828b-589604b8ae22', 'url': '/static/profile_img/user15.avif'}]

    const [selectedImage, setelectedImage] = useState(`${baseUrl}${images[0].url}`)
    const userProfile = JSON.parse(localStorage.getItem('user_details'))
    const [msg, setMsg] = useState()
    const [alertType, setAlertType] = useState()
    const [loading, setLoading] = useState(false)
    const [img_id, setImgId] = useState('')
    const user = Cookies.get('token')

    async function updateProfilePic(){
        setLoading(true)
        const res = await fetch(`${baseUrl}/auth/update_profile_img`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${user}`
            },
            body: JSON.stringify({
                img_id
            })
        })
        const data = await res.json()
        console.log(res, data);
        if(res) setLoading(false)
        if(!res.ok){
            setAlertType('error')
            setMsg(data.error_message)
            return
        }
        if(res.ok){
            localStorage.setItem('user_details', JSON.stringify(data.user_details.user_details));
            setAlertType('success')
            setMsg('Profile picture updated successfully')
            return
        }
    }

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[100]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => setCurrentModal('')}></div>
        <div className="bg-profile-nav-bg text-white shadow-lg md:max-w-[600px] mx-auto w-[90%] z-[101] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px]">
            <div className='flex items-center justify-between text-2xl px-6 pb-6 modal-header rounded-t-[10px]'>
                <div className='flex items-center gap-1 mt-6'>
                    <RxChevronLeft className='cursor-pointer' onClick={() => setCurrentModal('profile')}/>
                    <p className='font-bold'>Change Profile Picture</p>
                </div>
                <p className='cursor-pointer' onClick={() => setCurrentModal('')}>&times;</p>
            </div>
            <div className='p-6'>
                <div>
                    <div className='rounded-full border-[3px] border-color w-[120px] mx-auto'>
                        <img src={selectedImage} className='w-full mx-auto rounded-full' alt="" />
                    </div>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    {
                        loading? (
                            <div className='flex items-center  bg-primary-color py-2 px-3 rounded-[6px] justify-center'>
                                <img src="./images/loader.gif" className='w-[20px]' alt="" />
                            </div>
                        ) : 
                        <p onClick={updateProfilePic} className='text-center inline-flex justify-center items-center text-color bg-primary-color py-2 px-3 cursor-pointer rounded-[6px] text-[12px]'>Use Image</p>
                    }
                    
                    {/* <img src="./images/loader.gif" className='w-[20px]' alt="" /> */}
                </div>
                <div className='grid grid-cols-5 mt-5 bg-side-nav-bg p-3 gap-3 rounded-[6px] place-items-center'>
                    {
                        images.map((item, index) => {
                            return (
                                <div className='rounded-full w-[70px] cursor-pointer'>
                                    <img src={`${baseUrl}${item.url}`} className={selectedImage === item.url ? 'w-full border-[3px] border-green-500 mx-auto rounded-full' : 'w-full mx-auto rounded-full'} onClick={() => {
                                        setelectedImage(`${baseUrl}${item.url}`)
                                        localStorage.setItem('casino-img', selectedImage)
                                        setImgId(item.id)
                                    }} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        {
            msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default ProfilePic