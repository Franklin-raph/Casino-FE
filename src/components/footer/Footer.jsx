import React from 'react'
// import footerImage from "../../assets/Group76.png"
import { Link } from 'react-router-dom'
// import NewsLetter from '../news-letter/NewsLetter'

const Footer = () => {

  const aboutUsLinks = [
    {
      label:"About Us",
      url:"#"
    },
    {
      label:"Privacy Policy",
      url:"#"
    },
    {
      label:"Terms of use",
      url:"#"
    }
  ]

  const contactLinks = [
    {
      label:"support@casino.com",
      url:"#"
    },
    {
      label:"help@casino.com",
      url:"#"
    },
    {
      label:"finance@casino.com",
      url:"#"
    }
  ]

  const helpLinks = [
    {
      label:"Data Protection",
      url:"#"
    },
    {
      label:"Reasonable Gambling",
      url:"#"
    },
    {
      label:"Security Fraud",
      url:"#"
    },
    {
      label:"FAQ",
      url:"#"
    }
  ]


  return (
    <div>
      <div className='bg-profile-nav-bg flex items-start justify-between md:flex-row flex-col gap-[2rem] md:gap-[5rem] mt-[2rem] py-[3rem] lg:px-12 px-8'>
        <div className='w-full'>
          <Link to="/" className='mb-5 inline-block'>
            <img src="./images/vite.svg" alt=""className='w-[50px]' />
          </Link>
          <p className='text-[14px] md:text-[16px] text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus asperiores impedit consequuntur in officiis molestiae porro perspiciatis enim, excepturi reprehenderit ab, aut quaerat facilis voluptate doloribus a hic odio veniam maiores! Ratione illum illo enim quasi at voluptatum numquam. Laboriosam?
          </p>
        </div>
        <div className='grid grid-cols-3 gap-[2rem] w-full text-[14px]'>
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-gray-200 mb-2'>About Us</h1>
            <ul>
              {aboutUsLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px] text-gray-400 hover:text-color'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-gray-200 mb-2'>Contact Us</h1>
            <ul>
              {contactLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px] text-gray-400 hover:text-color'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-gray-200 mb-2'>Help</h1>
            <ul>
              {helpLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px] text-gray-400 hover:text-color'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer