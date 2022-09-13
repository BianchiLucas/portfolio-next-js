import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { data } from './data'


const Slider = () => {


  return (
    <div className='carousel-container'>
      <div className="carousel-title" >
        <h3>Proyectos</h3>
        <p>Una serie de proyectos Frontend en React y Next.js, tanto en JS como en TS, utilizando CSS y librerías como Tailwindcss y Styled components.
          Además una API en Node.js y Express, con JSON web token y database en MongoDB con modelos mongoose. 
        </p>
      </div>

      <div className="slide-container">

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={45}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
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