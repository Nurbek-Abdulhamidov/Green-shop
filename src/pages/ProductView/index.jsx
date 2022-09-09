import React, { useState } from "react";
import {
  AddCart,
  Container,
  CounterButton,
  CustomerReview,
  DescriptionProduct,
  DescriptionProductContainer,
  Image,
  LeftSide,
  MainImage,
  MainImg,
  MultipleImages,
  ProductInfo,
  ProductSize,
  Releted,
  Review,
  RightSide,
  SearchIconDiv,
  Sizes,
  Tags,
  Wrapper,
} from "./style";
import multiImg from "../../assets/images/multiple.png";
import mainImg from "../../assets/images/mainImg.png";
import { FiSearch } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsEnvelope, BsTwitter } from "react-icons/bs";
import Button from "../../components/Button/Button";
import Carusel from "../../components/Carusel";

const ProductView = () => {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const data = [
    {
      id: 1,
      status: "description",
      office: "Office:",
      officeData:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      diningRoom: "Dining Room:",
      diningRoomData:
        "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.",
      livingRoom: "Living Room:",
      livingRoomData:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      data: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.   Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
      active: true,
      title: "Product description",
    },
    {
      id: 2,
      status: "review",
      data: "Product review",
      active: false,
      title: "Product review",
    },
  ];
  const [desc, setDesc] = useState([data[0]]);

  const getFilter = (status) => {
    let newData = data.filter((item) => item.status == status);
    setDesc(newData);
  };

  return (
    <Wrapper>
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
              come with a wooden stand to help elevate your plants off the
              ground.{" "}
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
              </Sizes>
              <AddCart>
                <CounterButton onClick={Minus}>-</CounterButton>
                <p>{count}</p>
                <CounterButton onClick={Plus}>+</CounterButton>
                <Button>BUY NOW</Button>
                <Button bgColor="#fff" color="#46A358">
                  ADD TO CART
                </Button>
                <Button bgColor="#fff" color="#46A358" font="25px">
                  <IoMdHeartEmpty />
                </Button>
              </AddCart>
              <Tags>
                <p>
                  <span>SKU:</span> 1995751877966
                </p>
                <p>
                  <span>Categories: </span> Potter Plants
                </p>
                <p>
                  <span>Tags:</span> Home, Garden, Plants
                </p>
                <h6>
                  Share this products:{" "}
                  <i>
                    <FaFacebookF />
                  </i>
                  <i>
                    <BsTwitter />
                  </i>
                  <i>
                    <GrLinkedinOption />
                  </i>
                  <i>
                    <BsEnvelope />
                  </i>
                </h6>
              </Tags>
            </ProductSize>
          </ProductInfo>
        </RightSide>
      </Container>
      <DescriptionProductContainer>
        <DescriptionProduct>
          <p onClick={() => getFilter("description")}>Product Description</p>
          <p onClick={() => getFilter("review")}>Review(19)</p>
        </DescriptionProduct>
        <Review>
          {desc.map((value, index) => (
            <div key={index}>
              <p>{value.data}</p>
              <b>{value.livingRoom}</b>
              <p>{value.livingRoomData}</p>
              <b>{value.diningRoom}</b>
              <p>{value.diningRoomData}</p>
              <b>{value.office}</b>
              <p>{value.officeData}</p>
            </div>
          ))}
        </Review>
      </DescriptionProductContainer>
      <Releted>
        <p>Releted Products</p>
      </Releted>
      <Carusel />
    </Wrapper>
  );
};

export default ProductView;
