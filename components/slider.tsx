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
          slidesPerView={"auto"}
          spaceBetween={45}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          navigation={true}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            data.map((slide, index) => (
              <SwiperSlide key={index} className='swiper-slide-container'>
                <img src={slide.src} alt={slide.alt} />
                <div className="slide-desc" title={slide.desc}>
                  <a href={slide.url}>
                    <span>{slide.alt}</span>
                  </a>
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>

    </div>

  )
}

export default Slider