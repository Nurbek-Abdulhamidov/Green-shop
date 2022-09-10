import React from "react";
import { MainContainer } from "../GlobalStyle/style";
import {
  Ellipse,
  FooterContainer,
  FooterFlower,
  FooterRow,
  FooterRow2,
  FooterRowCol,
  FooterRowCol2,
  FooterRowWrap,
  ItemIcon,
  ItemText,
  Logo,
  SocialIcon,
  SocialIcons,
  SubFooter,
} from "./style";
import footerImg1 from "../assets/images/footercard1.svg";
import footerImg2 from "../assets/images/footercard2.svg";
import LogoImg from "../assets/images/Logo.svg";
import PlasticCard from "../assets/images/footerCard.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbMail, TbPhoneCall } from "react-icons/tb";
import Input from "../components/Input/InputEmail";
import { InputDiv } from "../components/Input/InputStyle";

const Footer = () => {
  const firstRowData = [
    {
      img: footerImg1,
      title: "Garden Care",
      paragraph:
        "We are an online plant shop offering a wide range of cheap andtrendy plants.",
    },
    {
      img: footerImg2,
      title: "Garden Care",
      paragraph:
        "We are an online plant shop offering a wide range of cheap andtrendy plants.",
    },
    {
      img: footerImg1,
      title: "Garden Care",
      paragraph:
        "We are an online plant shop offering a wide range of cheap andtrendy plants.",
    },
  ];

  return (
    <MainContainer>
      <footer>
        <FooterContainer>
          <FooterRow>
            {firstRowData.map((value, key) => (
              <FooterRowCol key={key}>
                <FooterFlower>
                  <img src={value.img} alt="" />
                  <Ellipse></Ellipse>
                </FooterFlower>
                <h5>{value.title}</h5>
                <p>{value.paragraph}</p>
              </FooterRowCol>
            ))}
            <FooterRowCol2>
              <h5>Would you like to join newsletters?</h5>
              <InputDiv>
                <Input title="join" placeholder="enter your email address..." />
              </InputDiv>
              <p>
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!{" "}
              </p>
            </FooterRowCol2>
          </FooterRow>

          <FooterRow2>
            <ul>
              <Logo>
                <img src={LogoImg} alt="" />
              </Logo>
              <li>
                <ItemIcon>
                  <HiOutlineLocationMarker />
                </ItemIcon>
                <ItemText>
                  70 West Buckingham Ave. Farmingdale, NY 11735
                </ItemText>
              </li>
              <li>
                <ItemIcon>
                  <TbMail />
                </ItemIcon>
                <ItemText>contact@greenshop.com</ItemText>
              </li>
              <li>
                <ItemIcon>
                  <a href="tel:94 044 70 64">
                    <TbPhoneCall />
                  </a>
                </ItemIcon>
                <ItemText>
                  <a href="tel:94 044 70 64">+88 01911 717 490</a>
                </ItemText>
              </li>
            </ul>
          </FooterRow2>

          <FooterRow>
            <FooterRowWrap>
              <h4>My Account</h4>
              <ul>
                <li>My Account </li>
                <li>Our stores</li>
                <li>Contact us</li>
                <li>Career</li>
                <li>Specials</li>
              </ul>
            </FooterRowWrap>
            <FooterRowWrap>
              <h4>Help & Guide</h4>
              <ul>
                <li>Help Center </li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </FooterRowWrap>
            <FooterRowWrap>
              <h4>Categories</h4>
              <ul>
                <li>House Plants </li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </FooterRowWrap>
            <FooterRowWrap>
              <h4>Social Media</h4>
              <SocialIcons>
                <SocialIcon href="https://www.facebook.com/webbrainacademy">
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/webbrain_academy/">
                  <AiFillInstagram />
                </SocialIcon>
                <SocialIcon href="">
                  <AiOutlineTwitter />
                </SocialIcon>
                <SocialIcon>
                  <FaLinkedinIn />
                </SocialIcon>
                <SocialIcon href="https://www.youtube.com/results?search_query=webbrain+academy">
                  <AiFillYoutube />
                </SocialIcon>
              </SocialIcons>
              <h4>We accept</h4>
              <img src={PlasticCard} alt="" />
            </FooterRowWrap>
          </FooterRow>
          <SubFooter>
            <p>© 2021 GreenShop. All Rights Reserved.</p>
          </SubFooter>
        </FooterContainer>
      </footer>
    </MainContainer>
  );
};

export default Footer;
