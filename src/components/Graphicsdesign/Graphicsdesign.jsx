import React from 'react'
import './Graphicsdesign.css'
import Port1 from '../../assets/Port1.jpg'
import Port2 from '../../assets/Port2.jpg'
import Port3 from '../../assets/Port3.jpg'
import Port4 from '../../assets/Port4.jpg'
import Port5 from '../../assets/Port5.jpg'
import {Pagination, Navigation, } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
const Graphicsdesign = () => {
  const images =[
    {
        imagename: Port1,
        description: 'This is my creation'
    },
    {
        imagename: Port2,
        description: 'This is my creation'
    },
    {
        imagename: Port3,
        description: 'This is my creation'
    },
    {
        imagename: Port4,
        description: 'This is my creation'
    },
    {
        imagename: Port5,
        description: 'This is my creation'
    },
  ]
    return (
    <section id='graphicsdesign'>
        <h5>what I have Created</h5>
        <h2>Graphics Design Samples</h2>
        <Swiper className="container design__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}>
           {
            images.map(({imagename, description},index)=>{
                return (
                    <SwiperSlide key={index} className='design__sample'>
                <img src={imagename} className="design__image"/>
                <h5>{description}</h5>
           </SwiperSlide>
                )
            })
           }
           
            
        </Swiper>
        
    </section>
  )
}

export default Graphicsdesign