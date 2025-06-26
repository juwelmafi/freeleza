import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="md:mb-7 mt-[67px] w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            className=" hero h-[200px] md:h-[70vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/KckCg60t/IMG-20250523-120054.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="text-white">
              <div className="w-full pl-12 md:pl-0">
                <h1 className=" md:mb-2 w-full md:w-full text-lg md:text-5xl font-bold">
                  Post Your First Task, It's Free!
                </h1>
                <p className="text-xs md:text-sm mb-2">
                  Connect with top-rated freelancers in minutes.
                </p>
                <Link to={"/add-task"}>
                  <button className="btn btn-xs md:btn-sm px-3 text-xs md:text-sm bg-[#48CCDA] text-white border-0 shadow-none">
                    Post a Task
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className=" hero h-[200px] md:md:h-[70vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/8ghVxdJH/IMG-20250523-120126.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="text-white">
              <div className="w-full pl-12 md:pl-0">
                <h1 className=" md:mb-2 w-full md:w-full text-lg md:text-5xl font-bold">
                  Secure Payments, Every Time
                </h1>
                <p className="text-xs md:text-sm mb-2">
                  Trustworthy transactions with Firebase backend.
                </p>
                <Link to={"/blogs"}>
                  <button className="btn btn-xs md:btn-sm px-3 text-xs md:text-sm bg-[#48CCDA] text-white border-0 shadow-none">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className=" hero h-[200px] md:h-[70vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/mCSL4gC5/IMG-20250523-120111.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="text-white">
              <div className="w-full pl-12 md:pl-0">
                <h1 className=" md:mb-2 w-full md:w-full text-lg md:text-5xl font-bold">
                  Earn by Helping Others
                </h1>
                <p className="text-xs md:text-sm mb-2">
                  Freelancers can browse and bid on tasks easily.
                </p>
                <Link to={"/browse-task"}>
                  <button className="btn btn-xs md:btn-sm px-3 text-xs md:text-sm bg-[#48CCDA] text-white border-0 shadow-none">
                    Find Tasks
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
