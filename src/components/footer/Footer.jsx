import React from 'react'
// import footerImage from "../../assets/Group76.png"
import { Link } from 'react-router-dom'
// import NewsLetter from '../news-letter/NewsLetter'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";


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
      label:"finance@casinofe.com",
      url:"#"
    },
    {
      label:"support@casinofe.com",
      url:"#"
    },
    {
      label:"help@casinofe.com",
      url:"#"
    }
  ]

  const communityLinks = [
    {
      label:<FaFacebook />,
      url:"https://www.facebook.com/profile.php?id=61561209938663&mibextid=kFxxJD"
    },
    {
      label:<AiFillInstagram />,
      url:"https://www.instagram.com/1arcaderoyale?igsh=MTRzNnQ2YXdjcnZzNA%3D%3D&utm_source=qr"
    },
    {
      label:<IoLogoWhatsapp />,
      url:"https://whatsapp.com/channel/0029VaiwAjwGufIp8cUJZl02"
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
      <div className='bg-profile-nav-bg flex items-start justify-between flex-col gap-[2rem] md:gap-[2rem] mt-[2rem] py-[3rem] lg:px-12 px-6'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-[2rem] w-full text-[14px]'>
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
            <ul className=''>
              {contactLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px] text-gray-400 hover:text-color cursor-pointer'>
                  <a target='_blank' href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-gray-200 mb-2'>Join Our Community</h1>
            <ul className='flex items-center gap-5'>
              {communityLinks.map(link => (
                <li className='py-1 text-[20px] text-gray-400 hover:text-color cursor-pointer'>
                  <a target='_blank' href={link.url}>{link.label}</a>
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
        <div className='w-full flex items-start gap-[3rem] flex-col md:flex-row'>
          <div className='text-[14px] text-gray-400 md:w-[50%] w-full'>
            <div className='text-center md:text-start'>
              <Link to="/" className='mb-5 inline-block mx-auto'>
                <img src="./images/logo.png" alt=""className='w-[70px]' />
              </Link>
            </div>
            <p className='mb-7 text-center md:text-start'>
              The information about handicaps and sports odds contained on this site is for entertainment purposes only. Please check the betting regulations in your jurisdiction, as they vary from state to state, province to province, and country to country. It is prohibited to use this information to violate any law or statute. The site is not associated with, nor endorsed by, any professional or collegiate league, association, or team. Afun does not target individuals under the age of 18. Final winnings are not guaranteed.
            </p>
            <ul className='flex flex-col gap-3'>
              <li>
                1.This product is for use by individuals over the age of 18 and is intended for entertainment purposes only.
              </li>
              <li>
                2.This game contains in-app purchases.
              </li>
              <li>
                3.The fact that a player plays or wins a social betting game does not mean that they will win in real-money betting and related games in the future.
              </li>
            </ul>
          </div>

          <div className='text-[14px] text-gray-400 md:w-[50%] w-full text-center md:text-start'>
            <div className='flex items-center gap-5 justify-center md:justify-start'>
              <Link to="/" className='mb-5 inline-block'>
                <img src="./images/footer-icon-3.png" alt=""className='w-[70px]' />
              </Link>
              <Link to="/" className='mb-5 inline-block'>
                <img src="./images/footer-icon-2.png" alt=""className='w-[70px]' />
              </Link>
            </div>
            <p>
              In order to register for this website, the user is required to accept the General Terms and Conditions. In the event the General Terms and Conditions are updated, existing users may choose to discontinue using the products and services before the said update shall become effective, which is a minimum of two weeks after it has been announced. In addition to the English language, copies may also be available in other languages. However, the original English version shall supersede any translations.
            </p>
            <p className='my-7'>
              The games of Afun.com(including any certified aliases), are operated by Edge Five Entertainment B.V. (registered No. 164520 at Schottegatweg Oost 10 Unit 1-9, Bon Bini Business Center, Curaçao) under license 1668/JAZ of Curaçao eGaming (CEG), issued by the Governor of Curaçao to date October 1st, 1996 under the ordinance of June 8th, 1993. The Minister of Finance of Curaçao has undermandated the Gaming Control Board in Curaçao to regulate the Gaming License. To participate in the games, you must first accept to be legally bound by the contents of the Responsible Gaming Agreement (RGA), including its Gaming Terms and Conditions (GT&C). It is important to know that the RGA/GT&C contains important limitations and restrictions that are imposed for your protection and those of others. Before you decide to participate in any game, please make sure to carefully review the RGA/GT&C.
            </p>
            <p>All rights reserved {new Date().getFullYear()} &copy; </p>
            {/* <ul>
              <li>
                1.This product is for use by individuals over the age of 18 and is intended for entertainment purposes only.
              </li>
              <li>
                2.This game contains in-app purchases.
              </li>
              <li>
                3.The fact that a player plays or wins a social betting game does not mean that they will win in real-money betting and related games in the future.
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer