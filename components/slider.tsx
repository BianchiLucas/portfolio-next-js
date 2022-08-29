import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { data } from './data'


const Slider = () => {


  return (
    <div className='carousel-container'>
      <div className="carousel-title" >
        <h2>Proyectos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, est impedit quidem accusamus facilis totam quam aut delectus iste mollitia.</p>
      </div>

      <div className="slide-container">

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            data.map((slide, index) => (
              <SwiperSlide key={index} className='swiper-slide-container'>
                <img src={slide.src} alt={slide.alt} className='slide-image' />
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>

    </div>

  )
}

export default Slider