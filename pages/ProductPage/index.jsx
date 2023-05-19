import TopProduct from "@/components/Home/TopProducts/TopProducts";
import ProductListSideBar from "@/components/Products/ProductListSideBar/ProductListSideBar";
import ProductsPagination from "@/components/Products/ProductsPagination/ProductsPagination";
import FooterLayout from "@/layouts/FooterLayout/FooterLayout";
import HeaderLayout from "@/layouts/HeaderLayout/HeaderLayout";
import React from "react";

const ProductsPage = () => {
  return (
    <>
      <HeaderLayout />
      <ProductListSideBar />
      <div className="md:hidden -mt-32">
        <TopProduct />
      </div>
      <ProductsPagination />
      <FooterLayout />
    </>
  );
};

export default ProductsPage;
