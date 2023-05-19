"use client";
import Image from "next/image";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

const storiesData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 2",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 2",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 2",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 2",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?w=1060&t=st=1683810660~exp=1683811260~hmac=5392b2e1fc3c68b8582f6c8e2aa1a011df495110e4b8a9e92b7772f4dd76a4d7",
    title: "Story 2",
  },
];

const StoriesSlider = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setShowPopUp(true);
  };

  const handlePopUpClose = () => {
    setSelectedStory(null);
    setShowPopUp(false);
  };

  return (
    <>
      <div className=" ">
        <div
          className="xl:ml-32 xl:mr-36 sm:mt-5 mr-5 sm:ml-5"
          dir="rtl"
          lang="fa"
        >
          <Swiper
            dir="ltr"
            slidesPerView={5}
            spaceBetween={0}
            freeMode={false}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation]}
            className="p-2  "
            breakpoints={{
              //   720: {
              //     slidesPerView: 8,
              //     spaceBetween: 15,
              //   },
              800: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 8,
                spaceBetween: 12,
              },
            }}
          >
            {storiesData.map((story) => (
              <SwiperSlide
                dir="rtl"
                onClick={() => handleStoryClick(story)}
                key={story.id}
                className="xl:mr-[-6rem] lg:mr-[-4rem] p-3"
              >
                <Image
                  width={200}
                  height={200}
                  className="w-14 h-14
                  sm:h-20 sm:w-20
                  lg:h-24 lg:w-24
                  cursor-pointer rounded-full
                  hover:translate-y-[-5px] duration-500
                  shadow-md shadow-green-800"
                  src={story.image}
                  alt={story.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {showPopUp && selectedStory && (
            <div className="flex backdrop-blur-sm	 justify-center items-center z-50 inset-0 fixed">
              <div className="rounded-lg overflow-hidden z-50">
                <div className=" text-black text-2xl justify-end flex py-1 bg-white cursor-pointer">
                  <div
                    onClick={handlePopUpClose}
                    className="bg-gray-400 px-2 rounded-md text-white hover:bg-gray-200 hover:text-black duration-500"
                  >
                    X
                  </div>
                </div>
                <div
                  className="
                  w-[30rem] h-[30rem] 
                  sm:h-[40rem] sm:w-[40rem]
                  md:h-[42rem] md:w-[42rem]
                  "
                >
                  <Image
                    width={1920}
                    height={1080}
                    src={selectedStory.image}
                    alt={selectedStory.title}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StoriesSlider;
