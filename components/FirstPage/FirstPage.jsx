import React from "react";
import Link from "next/link";
import Image from "next/image";

const FirstPage = () => {
  return (
    <>
      <div className="md:text-6xl sm:text-3xl text-3xl flex justify-center -mb-10 mt-2 font-extrabold">
        LucyMan
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  mt-10">
        <div className="">
          <div className="relative hover:translate-x-5 hover:-translate-y-3  duration-500 cursor-pointer">
            <Link href={"/HomePage"}>
              <Image
                width={1000}
                height={1000}
                src={
                  "https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?w=996&t=st=1683491863~exp=1683492463~hmac=1e92c02311f4cece9027578625c680bc72cf6df902b0a6974ca235a3b6a5ae77"
                }
                className="sm:h-[650px] p-5  hover:bg-black hover:p-3 duration-500 "
              />
              <div className="absolute inset-0 flex items-stretch mt-64 justify-center">
                <div className="flex-col text-center">
                  <button className=" hover:bg-black hover:text-white text-black  md:text-5xl sm:text-3xl text-xl bg-white sm:mt-52 -mt-6 font-bold py-2 px-8 duration-500">
                    Woman
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="relative hover:translate-x-5 hover:-translate-y-3  duration-500 cursor-pointer">
            <Link href={"/HomePage"}>
              <Image
                width={1000}
                height={1000}
                src={
                  "https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1683491778~exp=1683492378~hmac=3472b2286163379f6b0886b2738189f4289483bf35fbff672b1b561d6d07260c"
                }
                className="sm:h-[650px] p-5  hover:bg-black hover:p-3 duration-500 "
              />
              <div className="absolute inset-0 flex items-stretch mt-64 justify-center">
                <div className="flex-col text-center">
                  <button className=" hover:bg-black hover:text-white text-black  md:text-5xl sm:text-3xl text-xl bg-white sm:mt-52 mt-0  font-bold py-2 px-8 duration-500">
                    Man
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
