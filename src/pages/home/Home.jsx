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

  let settings = {
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


  return (
    <div className='mt-8'>
      <Slider {...settings}>
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
    </div>
  )
}

export default Home