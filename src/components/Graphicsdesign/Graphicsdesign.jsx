import React from 'react'
import './Graphicsdesign.css'
import Port1 from '../../assets/Port1.jpg'
import Port2 from '../../assets/Port2.jpg'
import Port3 from '../../assets/Port3.jpg'
import Port4 from '../../assets/Port4.jpg'
import Port5 from '../../assets/Port5.jpg'
import {Pagination, Navigation, A11y } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Graphicsdesign = () => {
  const images =[
    {
        imagename: Port1,
        description: 'Business cards sample'
    },
    {
        imagename: Port2,
        description: 'Posters and Flyers sample'
    },
    {
        imagename: Port3,
        description: 'Social Media Posts sample'
    },
    {
        imagename: Port4,
        description: 'Restaurant sample one'
    },
    {
        imagename: Port5,
        description: 'Restaurant sample two'
    },
  ]
    return (
    <section id='graphicsdesign'>
        <h5>what I have Created</h5>
        <h2>Graphics Design Samples</h2>
        <Swiper className="container design__container"
        modules={[Pagination, Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
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