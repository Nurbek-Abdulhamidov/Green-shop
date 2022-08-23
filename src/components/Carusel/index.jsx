import React from "react";
import { Card, CardTextDiv, CaruselWrapper, Img } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardImg from "../../assets/images/product3.png";
import CardImg1 from "../../assets/images/product1.png";
import CardImg4 from "../../assets/images/product4.png";

const Carusel = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const caruselItems = [
    { id: 1, image: CardImg, title: "Beach Spider Lily", price: 129.0 },
    { id: 2, image: CardImg1, title: "Blushing Bromeliad", price: 129.0 },
    { id: 3, image: CardImg, title: "Aluminum Plant", price: 129.0 },
    { id: 4, image: CardImg4, title: "Bird's Nest Fern", price: 129.0 },
    { id: 5, image: CardImg, title: "Beach Spider Lily", price: 129.0 },
    { id: 6, image: CardImg1, title: "Chinese Evergreen", price: 129.0 },
  ];

  return (
    <CaruselWrapper>
      <Slider {...settings}>
        {caruselItems.map((item) => (
          <Card>
            <Img src={item.image} />
            <CardTextDiv>
              <h6>{item.title}</h6>
              <span>${item.price}</span>
            </CardTextDiv>
          </Card>
        ))}
      </Slider>
    </CaruselWrapper>
  );
};

export default Carusel;
