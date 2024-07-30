import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/6.jpeg";
import Avatar from "../../assets/images/4.jpeg";
import avatar from "../../assets/images/1.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]  py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="review p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4">
              <img
                src={patientAvatar}
                alt="Patient Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">
                  Aayush Arora
                </h2>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-gray-700">
              "The doctors and staff were incredibly attentive and caring. I
              felt supported every step of the way during my treatment."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4">
              <img
                src={Avatar}
                alt="Patient Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">
                  Swasti Jain
                </h2>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-gray-700">
              "The medical team was professional and compassionate. I received
              excellent care and am grateful for the positive experience."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4">
              <img
                src={avatar}
                alt="Patient Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">
                  Praveen Bhat
                </h2>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-gray-700">
              "I had a great experience at the hospital. The facilities were
              top-notch and the staff was friendly and efficient."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4">
              <img
                src={patientAvatar}
                alt="Patient Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">Karan Jain</h2>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-gray-700">
              "The hospital staff made me feel comfortable and well-cared for
              during my stay. I highly recommend their services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center gap-4">
              <img
                src={avatar}
                alt="Patient Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">
                  Varun Singh
                </h2>
                <div className="flex items-center gap-1">
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                  <HiStar className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-gray-700">
              "From admission to discharge, every aspect of my treatment was
              handled with care and professionalism. Thank you!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
