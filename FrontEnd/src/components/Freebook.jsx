import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
function Freebook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async ()=>{
        try {
          const response=await axios.get("http://localhost:5000/book")
          console.log(response.data)
          setBook(response.data.filter((data)=>data.category==="Free"))
        } catch (error) {
          console.log(error);
          
        }
    }
    getBook();
  },[])
    // console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
            <h1 className='font-semibold text-xl pb-2 '>Free Offered Book</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed atque quo commodi ratione architecto soluta, provident, nulla exercitationem laudantium voluptate ex dolores aspernatur impedit, rerum dicta sunt explicabo minus.</p>
        </div>
        <div className="slider-container">
      <Slider {...settings}>
        {book.map((item)=><Card item={item} key={item.id} />)}
      </Slider>
    </div>
    </div>
  )
}

export default Freebook
