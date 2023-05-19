import React from "react";
import TopProductSwiper from "./TopProductSwiper";
import ProductCard from "../../ProductCard/ProductCard";

const TopProduct = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <h1 className="text-2xl "> محصولات برتر</h1>
      </div>
      <div className="mt-10 flex justify-center">
        <TopProductSwiper />
      </div>
    </>
  );
};

export default TopProduct;
