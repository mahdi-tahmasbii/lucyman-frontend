"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import NewsAnimation from "../NewsAnimation/NewsAnimation";

export default function Slider() {
  const fake = [
    {
      id: 1,
      img: "https://rare-gallery.com/uploads/posts/343957-Kendall-Jenner-American-Fashion-Model-Celebrity-Girls-Women-Smile.jpg",
    },
    {
      id: 2,
      img: "https://wallpaperaccess.com/full/2921436.jpg",
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {fake.map(({ id, img }) => {
          return (
            <SwiperSlide key={id} className=" overflow-hidden ">
              <div className="relative flex justify-center mt-5">
                <img
                  src={img}
                  className="lg:h-[40rem] lg:w-[77rem] sm:h-[30rem] sm:w-[60rem] h-[22rem] w-[30rem] rounded-md  -mb-16 "
                />
                <div className="absolute flex text-center justify-center flex-col top-2/4 ">
                  <span className="text-white  md:text-xl  text-sm">
                    عالی به نظر برسید
                  </span>
                  <span className=" top-16 text-white font-bold md:text-5xl text-lg">
                    محصولات جدید
                  </span>
                  <Link
                    href={""}
                    className=" top-48 text-white border-2 border-white p-2 hover:bg-white hover:text-black duration-500 "
                  >
                    <span> محصولات جدید</span>
                  </Link>
                </div>
              </div>
              <div className=" flex justify-center">
                <div className="bottom-0 items-center  p-2 w-full  absolute bg-transparent ">
                  <div className="text-black text-center ">
                    <NewsAnimation />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
