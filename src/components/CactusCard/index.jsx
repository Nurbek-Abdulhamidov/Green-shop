import React from "react";
import firstCardImg from "../../assets/images/headerCard2.png";
import firstCardImg2 from "../../assets/images/headerCard.png";
import Button from "../Button/Button";
import { BsArrowRight } from "react-icons/bs";
import {
  CardButton,
  CardImage,
  CardText,
  HeaderCardContainer,
  HeaderCardWrapper,
} from "./style";

const HeaderCard = () => {
  return (
    <HeaderCardWrapper>
      <HeaderCardContainer>
        <CardImage>
          <img src={firstCardImg2} alt="" />
        </CardImage>
        <CardText>
          <h4>SUMMER CACTUS & SUCCULENTS</h4>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <CardButton>
            <Button>
              Find More <BsArrowRight />
            </Button>
          </CardButton>
        </CardText>
      </HeaderCardContainer>
      <HeaderCardContainer>
        <CardImage>
          <img src={firstCardImg} alt="" />
        </CardImage>
        <CardText>
          <h4>SUMMER CACTUS & SUCCULENTS</h4>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <CardButton>
            <Button>
              Find More <BsArrowRight />
            </Button>
          </CardButton>
        </CardText>
      </HeaderCardContainer>
    </HeaderCardWrapper>
  );
};

export default HeaderCard;
