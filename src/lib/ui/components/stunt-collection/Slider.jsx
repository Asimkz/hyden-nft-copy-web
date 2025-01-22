import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import stuntJSON from "../../../json/stunt-collection/stunt-collection.json";

function NFTSlider() {
  const [activeSlide, setActiveSlide] = useState(stuntJSON.slider[0]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setActiveSlide(stuntJSON.slider[activeIndex]);
  };

  return (
    <div className="slider-wrapper">
      <Swiper
        spaceBetween={0}
        slidesPerView={3.8}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination]}
        grabCursor={true}
        onSlideChange={handleSlideChange}
        breakpoints={{
          1024: {
            slidesPerView: 3.8,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {stuntJSON.slider.map((stunt, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={stunt.img}
                alt={`Slide ${index + 1}`}
                className="center-slide-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-[640px] mx-auto flex mt-8 border-b border-[var(--primary-light)] pb-[49px] flex-col items-center">
        <i className="text-[16px] text-[var(--text-primary)] font-robotoSlab">
          {activeSlide.nftName}
        </i>
        <p className="text-center w-[100%] mt-4 text-[var(--text-primary)] font-robotoSlab">
          {activeSlide.nftDescription}
        </p>
      </div>
    </div>
  );
}

export default NFTSlider;
