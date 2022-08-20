import React from "react";
// import BigImg from "../../assets/images/header.png";
import SmallHeaderImg from "../../assets/images/MainSmalImg.svg";
import BigImg from "../../assets/images//headerMainImage.svg";
import {
  HeaderContainer,
  HeaderRightImage,
  HeaderWrapper,
  LeftHeader,
  RightHeader,
  SmallHeaderImgDiv,
} from "./HeaderStyle";
import Button from "../Button/Button.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          padding: "5px",
        }}
      >
        <ul style={{ margin: "15px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "rgba(70, 163, 88, 0.3)",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };
  return (
    <HeaderWrapper>
      <Slider {...settings}>
        <HeaderContainer>
          <LeftHeader>
            <h5>Welcome to GreenShop</h5>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button>SHOP NOW</Button>
          </LeftHeader>
          <RightHeader>
            <HeaderRightImage>
              <img src={BigImg} alt="" />
            </HeaderRightImage>
            <SmallHeaderImgDiv>
              <img src={SmallHeaderImg} alt="" />
            </SmallHeaderImgDiv>
          </RightHeader>
        </HeaderContainer>
        <HeaderContainer>
          <LeftHeader>
            <h5>Welcome to GreenShop</h5>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button>SHOP NOW</Button>
          </LeftHeader>
          <RightHeader>
            <HeaderRightImage>
              <img src={BigImg} alt="" />
            </HeaderRightImage>
            <SmallHeaderImgDiv>
              <img src={SmallHeaderImg} alt="" />
            </SmallHeaderImgDiv>
          </RightHeader>
        </HeaderContainer>
      </Slider>
    </HeaderWrapper>
  );
};

export default Header;
