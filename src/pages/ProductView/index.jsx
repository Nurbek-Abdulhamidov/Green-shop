import React from "react";
import {
  Container,
  CustomerReview,
  Image,
  LeftSide,
  MainImage,
  MainImg,
  MultipleImages,
  ProductInfo,
  ProductSize,
  RightSide,
  SearchIconDiv,
  Sizes,
} from "./style";
import multiImg from "../../assets/images/multiple.png";
import mainImg from "../../assets/images/mainImg.png";
import { FiSearch } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ProductView = () => {
  return (
    <Container>
      <LeftSide>
        <MultipleImages>
          <Image src={multiImg} alt="product image" />
          <Image src={multiImg} alt="product image" />
          <Image src={multiImg} alt="product image" />
          <Image src={multiImg} alt="product image" />
        </MultipleImages>
        <MainImage>
          <SearchIconDiv>
            <span></span>
            <i>
              <FiSearch />
            </i>
          </SearchIconDiv>
          <MainImg src={mainImg} alt="product image" />
        </MainImage>
      </LeftSide>
      <RightSide>
        <h2>Barberton Daisy</h2>
        <CustomerReview>
          <p>$119.00</p>
          <div>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <i>
              <AiFillStar />
            </i>
            <span>19 Customer Review</span>
          </div>
        </CustomerReview>
        <ProductInfo>
          <h6>Short Description:</h6>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <ProductSize>
            <h6>Size:</h6>
            <Sizes>
              <div>
                <span> S</span>
              </div>
              <div>
                <span> M</span>
              </div>
              <div>
                <span> L</span>
              </div>
              <div>
                <span> XL</span>
              </div>
              ddd
            </Sizes>
          </ProductSize>
        </ProductInfo>
      </RightSide>
    </Container>
  );
};

export default ProductView;
