import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//Import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My certificates</h2>
      <span className="section__subtitle">Technology</span>
      <Swiper
        className="testimonial__container "
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title }) => {
          //, title, description  testimonial__img
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <h3 className="testimonial__name">{title}</h3>

              <img src={image} alt="" className="" />

              {/* <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
