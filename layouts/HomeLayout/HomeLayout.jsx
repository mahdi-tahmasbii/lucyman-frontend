import StoriesSlider from "@/components/Home/HomePageHeader/StoriesSlider/StoriesSlider";
import React from "react";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import LatestProducts from "@/components/Home/LatestProducts/LatestProducts";
import Slider from "@/components/Home/HomePageHeader/Slider/Slider";
import TopProduct from "@/components/Home/TopProducts/TopProducts";
import FooterLayout from "../FooterLayout/FooterLayout";
import HomeVideo from "@/components/Home/HomeVideo/HomeVideo";

const HomeLayout = () => {
  return (
    <>
      <HeaderLayout />
      <StoriesSlider />
      <Slider />
      <TopProduct />
      <HomeVideo />
      <LatestProducts />
      <HomeVideo />
      <FooterLayout />
    </>
  );
};

export default HomeLayout;
