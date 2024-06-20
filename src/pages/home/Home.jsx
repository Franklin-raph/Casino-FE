import React from 'react'
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





const Home = () => {

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
  };




  return (
    <div className='mt-8 px-[1.5rem]'>
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

      <div className='mt-[3rem]'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-color text-[22px]'>
            <MdOutlineRecommend className='text-[30px]'/>
            <p className='text-white font-[700]'>Recomended</p>
          </div>
          <p className='mr-[6rem] text-color cursor-pointer bg-[#1f29374d] py-[6px] px-[10px] rounded-[5px] font-[600]'>More 22</p>
        </div>

        <div >
          <Slider {...gamesCarouselSettings}>
            <div className='rounded-[6px]'>
              <img src="./images/games.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games1.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games4.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games2.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games5.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game7.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games6.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game0.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game01.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game02.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game03.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
          </Slider>
        </div>
      </div>

      <div className='mt-[3rem]'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-color text-[22px]'>
            <MdOutlineStarRate className='text-[30px]'/>
            <p className='text-white font-[700]'>Top Rated</p>
          </div>
          <p className='mr-[6rem] text-color cursor-pointer bg-[#1f29374d] py-[6px] px-[10px] rounded-[5px] font-[600]'>More 22</p>
        </div>

        <div >
          <Slider {...gamesCarouselSettings}>
            <div className='rounded-[6px]'>
              <img src="./images/games.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games4.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games2.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games5.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games1.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games6.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game0.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game02.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game03.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game01.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game7.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
          </Slider>
        </div>
      </div>

      <div className='mt-[3rem]'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2 text-color text-[22px]'>
            <PiClockClockwise className='text-[30px]'/>
            <p className='text-white font-[700]'>Recent</p>
          </div>
          <p className='mr-[6rem] text-color cursor-pointer bg-[#1f29374d] py-[6px] px-[10px] rounded-[5px] font-[600]'>More 22</p>
        </div>

        <div >
          <Slider {...gamesCarouselSettings}>
            <div className='rounded-[6px]'>
              <img src="./images/games1.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games4.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games2.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games5.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games6.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game0.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game01.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/games.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game7.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game02.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
            <div className='rounded-[6px]'>
              <img src="./images/game03.avif" className='rounded-[6px] h-full object-contain' alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Home