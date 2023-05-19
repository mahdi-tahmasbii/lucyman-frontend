import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  return (
    <>
      <div className="md:mr-44">
        <div className=" lg:block ">
          <div className="flex items-center">
            <div>
              <ul>
                <div className="flex md:order-2 ">
                  <div className="flex sm:gap-8   gap-5  ">
                    <Link href="/navbars">
                      <div className=" md:flex hover:text-orange-600 cursor-pointer duration-500 gap-1">
                        <div className="relative">
                          <AiOutlineShoppingCart className="w-7 h-7" />
                          <span className="absolute -top-1 left-0 bg-yellow-500 rounded-full text-white px-1 text-xs">
                            2
                          </span>
                        </div>
                        <span className="sm:text-[12px] md:flex hidden">
                          164,000
                        </span>
                      </div>
                    </Link>
                    <Link href="/navbars">
                      <div className=" md:flex hover:text-orange-600 cursor-pointer duration-500 gap-1 ">
                        <div className="relative">
                          <AiOutlineHeart className="  w-7 h-7" />
                          <span className="absolute -top-1 left-0 bg-yellow-500 rounded-full text-white px-1 text-xs">
                            3
                          </span>
                        </div>
                        <span className="sm:text-[12px]  md:flex hidden">
                          علاقه مندی
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
