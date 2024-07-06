import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { MdOutlineRecommend } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import { PiDotDuotone } from "react-icons/pi";
import { MdSportsFootball } from "react-icons/md";


const Home = ({setCurrentModal, setIsOpen, setProfileNav}) => {

  const [selectedCard, setSelectecCard] = useState(false)

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return(
      <div onClick={onClick} >
        <IoChevronForward class="custom-arrow-next" style={{color:"white"}}/>
      </div>
    )
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return(
      <div onClick={onClick} >
        <IoChevronBack class="custom-arrow-prev" style={{color:"white"}}/>
      </div>
    )
  }

  const GameNextArrow = (props) => {
    const { onClick } = props;
    return(
      <div onClick={onClick} >
        <IoChevronForward class="game-arrow-next" style={{color:"white"}}/>
      </div>
    )
  }
  
  function GamePrevArrow(props) {
    const { onClick } = props;
    return(
      <div onClick={onClick} >
        <IoChevronBack class="game-arrow-prev" style={{color:"white"}}/>
      </div>
    )
  }

  let topCarouselSettings = {
    dots: false,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    loop:true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let gamesCarouselSettings = {
    dots: false,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    loop:true,
    autoplaySpeed: 3000,
    nextArrow: <GameNextArrow />,
    prevArrow: <GamePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const announcement = ["I can be a React component, multiple React components, or just some text.", "I can be a React component, multiple React components, or just some text.", "I can be a React component, multiple React components, or just some text.", "I can be a React component, multiple React components, or just some text."]

  const games = [
    {
      id: 1,
      title: 'sweet bonanza',
      image: "./images/game0.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 2,
      title: 'fortune gems 2',
      image: "./images/game01.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 3,
      title: 'golden empire',
      image: "./images/game02.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 4,
      title: 'dragon hatch 2',
      image: "./images/game03.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 5,
      title: 'roma x',
      image: "./images/game7.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 6,
      title: 'sugar rush',
      image: "./images/game8.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 7,
      title: 'dragon tiger luck',
      image: "./images/game9.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 8,
      title: 'fortune ox',
      image: "./images/games.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 9,
      title: 'fortune dragon',
      image: "./images/games1.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 10,
      title: 'fortune gems',
      image: "./images/games2.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 11,
      title: 'fortune rabbit',
      image: "./images/games3.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 12,
      title: 'dragon hatch',
      image: "./images/games4.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 13,
      title: 'fortune mouse',
      image: "./images/games5.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
    {
      id: 14,
      title: 'fortune tiger',
      image: "./images/games6.avif",
      status: 'active',
      description: 'This is a description for Game 1',
      price: 10,
      playCount: 200,
      rating: 4.5,
      recommended: true
    },
  ]

  async function playGame(){
    if(!localStorage.getItem('user_details')){
      setCurrentModal('login')
    }else{
      alert("You can play game...")
    }
  }

  async function playGameForMobile(){
    setSelectecCard(false)
    if(!localStorage.getItem('user_details')){
      setCurrentModal('login')
    }else{
      alert("You can play game...")
    }
  }

  async function selectGame(item){
    setSelectecCard(item)
    setCurrentModal('')
    setIsOpen(false)
    setProfileNav(false)
  }


  return (
    <div className='mt-8 md:px-[1.5rem] px-[10px]'>
      <Slider {...topCarouselSettings}>
        <div className='rounded-[6px]'>
          <img src="./images/quk.avif" className='rounded-[6px] h-full object-contain' alt="" />
        </div>
        <div className='rounded-[6px]'>
          <img src="./images/1.avif" className='rounded-[6px] h-full object-contain' alt="" />
        </div>
        <div className='rounded-[6px]'>
          <img src="./images/4.avif" className='rounded-[6px] h-full object-contain' alt="" />
        </div>
        <div className='rounded-[6px]'>
          <img src="./images/2.avif" className='rounded-[6px] h-full object-contain' alt="" />
        </div>
        <div className='rounded-[6px]'>
          <img src="./images/880x4010.avif" className='rounded-[6px] h-full object-contain' alt="" />
        </div>
      </Slider>

      <div className='bg-[#0D0D11] flex items-center py-1 mt-7 rounded-l-[10px]'>
        <img src="./images/notification.svg" className='p-3' alt="" />
        <Marquee>
          {
            announcement.map((item, index) => {
              return(
                <div key={index} className='flex items-center gap-1 text-color text-[14px] mx-[20px]'>
                  <PiDotDuotone className='text-[20px]'/>
                  <p className='text-white'>{item}</p>
                </div>
              )
            })
          }
        </Marquee>
      </div>

      <div className='mt-[3rem]'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-color text-[22px]'>
            <MdOutlineRecommend className='text-[30px]'/>
            <p className='text-white font-[700]'>Recomended</p>
          </div>
          <p className='text-color cursor-pointer bg-[#1f29374d] py-[6px] px-[10px] rounded-[5px] font-[600]'>More 22</p>
        </div>
          <div className='mobile-cards'>
            <Slider {...gamesCarouselSettings}>
              {
                games.map((item, index) => {
                  return(
                    <div key={index} className='rounded-[6px] relative cursor-pointer' onClick={() => selectGame(item)} >
                      <div className='hover-bg flex items-center justify-center'>
                        <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                      </div>
                      <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                    </div>
                  )
                })
              }
            </Slider>
          </div>

          <div className='desktop-cards'>
            <Slider {...gamesCarouselSettings}>
              {
                games.map((item, index) => {
                  return(
                    <div key={index} className='rounded-[6px] relative card-parent cursor-pointer'>
                      <div className='hover-bg flex items-center justify-center'>
                        <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                      </div>
                      <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>

      <div className='mt-[3rem]'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-color text-[22px]'>
            <MdOutlineStarRate className='text-[30px]'/>
            <p className='text-white font-[700]'>Top Rated</p>
          </div>
          <p className=' text-color cursor-pointer bg-[#1f29374d] py-[6px] px-[10px] rounded-[5px] font-[600]'>More 22</p>
        </div>

        <div className='mobile-cards'>
          <Slider {...gamesCarouselSettings}>
            {
              games.map((item, index) => {
                return(
                  <div key={index} className='rounded-[6px] relative cursor-pointer' onClick={() => selectGame(item)} >
                    <div className='hover-bg flex items-center justify-center'>
                      <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                    </div>
                    <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                  </div>
                )
              }).reverse()
            }
          </Slider>
        </div>

        <div className='desktop-cards'>
          <Slider {...gamesCarouselSettings}>
            {
              games.map((item, index) => {
                return(
                  <div key={index} className='rounded-[6px] relative card-parent cursor-pointer'>
                    <div className='hover-bg flex items-center justify-center'>
                      <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                    </div>
                    <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                  </div>
                )
              }).reverse()
            }
          </Slider>
        </div>
      </div>

      <div className='mt-[3rem]'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-color text-[22px]'>
            <PiClockClockwise className='text-[30px]'/>
            <p className='text-white font-[700]'>Recent</p>
          </div>
          <p className=' text-color cursor-pointer bg-[#1f29374d] py-[6px] px-[10px] rounded-[5px] font-[600]'>More 22</p>
        </div>

        <div className='mobile-cards'>
          <Slider {...gamesCarouselSettings}>
            {
              games.map((item, index) => {
                return(
                  <div key={index} className='rounded-[6px] relative cursor-pointer' onClick={() => selectGame(item)} >
                    <div className='hover-bg flex items-center justify-center'>
                      <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                    </div>
                    <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                  </div>
                )
              })
            }
          </Slider>
        </div>

        <div className='desktop-cards'>
          <Slider {...gamesCarouselSettings}>
            {
              games.map((item, index) => {
                return(
                  <div key={index} className='rounded-[6px] relative card-parent cursor-pointer'>
                    <div className='hover-bg flex items-center justify-center'>
                      <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                    </div>
                    <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                  </div>
                )
              })
            }
          </Slider>
        </div>

        <div className='mt-[3rem]'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-color text-[22px]'>
            <MdSportsFootball className='text-[30px]'/>
            <p className='text-white font-[700]'>Popular</p>
          </div>
          <p className=' text-color cursor-pointer bg-[#1f29374d] py-[6px] px-[10px] rounded-[5px] font-[600]'>More 22</p>
        </div>

        <div className='mobile-cards'>
          <Slider {...gamesCarouselSettings}>
            {
              games.map((item, index) => {
                return(
                  <div key={index} className='rounded-[6px] relative cursor-pointer' onClick={() => selectGame(item)} >
                    <div className='hover-bg flex items-center justify-center'>
                      <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                    </div>
                    <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                  </div>
                )
              }).reverse()
            }
          </Slider>
        </div>

        <div className='desktop-cards'>
          <Slider {...gamesCarouselSettings}>
            {
              games.map((item, index) => {
                return(
                  <div key={index} className='rounded-[6px] relative card-parent cursor-pointer'>
                    <div className='hover-bg flex items-center justify-center'>
                      <button onClick={playGame} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px]'>Play</button>
                    </div>
                    <img src={item.image} className='rounded-[6px] h-full object-contain' alt="" />
                  </div>
                )
              }).reverse()
            }
          </Slider>
        </div>
      </div>
        <div className='mobile-hoverw'>
          {
            selectedCard &&
              <div className='mobile-hover'>
                <div className="h-full w-full fixed top-0 left-0 bg-opacity-50 backdrop-filter backdrop-blur-sm inset-0 z-[10002]" style={{ background:"rgba(14, 14, 14, 0.5)" }} onClick={() => selectGame('')}></div>
                <div className='bg-top-nav-bg-right w-full  fixed z-[10003] bottom-0 p-4 left-0'>
                  <div className='flex items-start gap-5'>
                    <img src={selectedCard?.image} className='rounded-[6px] h-full object-contain w-[100px]' alt="" />
                    <div>
                      <h2 className='text-white font-semibold text-[16px] md:text-[20px] uppercase'>{selectedCard?.title}</h2>
                      <p className='text-white md:text-[14px] text-[12px]'>A little description for {selectedCard?.title} here</p>
                      <p className='text-white bg-side-nav-bg text-[13px] rounded-[4px] py-2 pl-3 mt-2'>Recomended Games</p>
                    </div>
                  </div>
                  <button onClick={playGameForMobile} className='cursor-pointer bg-[#5A78FF] text-white px-6 py-1 rounded-[3px] w-full mt-3'>Play</button>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Home