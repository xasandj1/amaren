"use client"
import React from 'react'
import Slider from 'react-slick'
interface Props {
  children: React.ReactNode
}
const Banner: React.FC<Props> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div className='relative w-full'>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}
export default Banner
