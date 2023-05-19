import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsTruck } from "react-icons/bs";
import { IoIosRefresh } from "react-icons/io";
import { BsShieldLock } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
const fakeNews = [
  {
    title:
      " پرداخت امن: پرداخت امن 100%                         /  مرجوع کردن سفارشات: گارانتی بازگرداندن وجه به صورت کامل                                         /   پشتیبانی حرفه ای: پشتبانی آنلاین به صورت 7روز هفته/24ساعته                              /   پرداخت و ارسال : ارسال رایگان برای سفارشات بالای 50 هزار تومان",
    description: "",
  },
];

const NewsTickerContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 30px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 10px 0;
  padding: 0 20px;
  border-radius: 15px;
`;

const NewsItem = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 20px;
  animation: news-slide 50s linear infinite;
  @keyframes news-slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const NewsTitle = styled.h3`
  margin-right: 10px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: clip;
`;

const NewsDescription = styled.p`
  overflow: hidden;
  text-overflow: clip;
`;

const NewsAnimation = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem((currentItem + 1) % fakeNews.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentItem]);

  return (
    <NewsTickerContainer dir="ltr">
      {fakeNews.map((item, index) => (
        <NewsItem
          className=" p-20"
          key={index}
          style={{
            marginLeft: `${
              ((index - currentItem + fakeNews.length * 1000) %
                fakeNews.length) *
              -100
            }%`,
          }}
        >
          <NewsTitle>
            <p className="text-white">{item.title}</p>
          </NewsTitle>
          <NewsDescription>{item.description}</NewsDescription>
        </NewsItem>
      ))}
    </NewsTickerContainer>
  );
};

export default NewsAnimation;
