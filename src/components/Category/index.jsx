import React from "react";
import SaleImg from "../../assets/images/SaleBanner.svg";
import Button from "../Button/Button.jsx";
import imgOfProduct from "../../assets/images/product1.png";
import imgOfProduct1 from "../../assets/images/headerCard.png";
import imgOfProduct2 from "../../assets/images/headerCard2.png";
import imgOfProduct3 from "../../assets/images/product3.png";
import imgOfProduct4 from "../../assets/images/product4.png";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";
import {
  CategoryContent,
  CategoryDiv,
  CategoryImage,
  CategoryItem,
  CategoryItems,
  CategoryOfProduct,
  CategoryWrapper,
  ItemCount,
  ItemText,
  PriceRange,
  ProductCard,
  ProductDiscount,
  ProductIcons,
  ProductImage,
  ProductItem,
  ProductItems,
  ProductLists,
  ProductSort,
  SizeItem,
  SizeUl,
  SliderPrice,
} from "./style";

const Category = () => {
  const items = [
    { id: 1, item: "House Plants", count: 33 },
    { id: 2, item: "Potter Plants", count: 12 },
    { id: 3, item: "Seeds", count: 65 },
    { id: 4, item: "Small Plants", count: 39 },
    { id: 5, item: "Big Plants", count: 23 },
    { id: 6, item: "Succulents", count: 17 },
    { id: 7, item: "Trerrariums", count: 19 },
    { id: 8, item: "Gardening", count: 13 },
    { id: 9, item: "Accessories", count: 18 },
  ];

  const sizes = [
    { id: 1, size: "Small", amount: 119 },
    { id: 2, size: "Medium", amount: 86 },
    { id: 3, size: "Large", amount: 78 },
  ];

  const contents = [
    { id: 1, item: "All Plants" },
    { id: 2, item: "New Arrivals" },
    { id: 3, item: "Sale" },
  ];

  const products = [
    {
      id: 1,
      productImg: imgOfProduct,
      product: "Barberton Daisy",
      price: 199,
    },
    {
      id: 2,
      productImg: imgOfProduct1,
      product: "Barberton Daisy",
      price: 199,
    },
    {
      id: 3,
      productImg: imgOfProduct2,
      product: "Barberton Daisy",
      price: 199,
      discount: 229000,
    },
    {
      id: 4,
      productImg: imgOfProduct3,
      product: "Barberton Daisy",
      price: 199,
      discount: 229000,
    },
    {
      id: 5,
      productImg: imgOfProduct4,
      product: "Barberton Daisy",
      price: 199,
    },
    {
      id: 6,
      productImg: imgOfProduct,
      product: "Barberton Daisy",
      price: 199,
    },
    {
      id: 7,
      productImg: imgOfProduct,
      product: "Barberton Daisy",
      price: 199,
      discount: 229000,
    },
    {
      id: 8,
      productImg: imgOfProduct,
      product: "Barberton Daisy",
      price: 199,
    },
    {
      id: 9,
      productImg: imgOfProduct1,
      product: "Barberton Daisy",
      price: 199,
    },
  ];

  console.log(products.productImg);
  return (
    <CategoryWrapper>
      <CategoryImage>
        <CategoryDiv>
          <h6>Categories</h6>
          <CategoryItems>
            {items.map((value, key) => (
              <CategoryItem key={key}>
                <ItemText>{value.item}</ItemText>
                <ItemCount>( {value.count} )</ItemCount>
              </CategoryItem>
            ))}
          </CategoryItems>
          <PriceRange>
            <h6>Price Range</h6>
            <SliderPrice>------------</SliderPrice>
            <p>
              Price: <span>$39</span>-<span>$1230</span>
            </p>
            <Button>Filter</Button>
          </PriceRange>
          <SizeUl>
            <h6>Size</h6>
            {sizes.map((item, key) => (
              <SizeItem key={key}>
                <p>{item.size} </p>
                <p>( {item.amount} )</p>
              </SizeItem>
            ))}
          </SizeUl>
        </CategoryDiv>
        <img src={SaleImg} alt="" />
      </CategoryImage>
      <CategoryContent>
        <ProductLists>
          <ProductItems>
            {contents.map((content, key) => (
              <ProductItem key={key}>{content.item}</ProductItem>
            ))}
          </ProductItems>
          <ProductSort>
            <span>Short by:</span>
            <select id="">
              <option value="default sorting">Default sorting</option>
              <option value="default sorting">2</option>
              <option value="default sorting">3</option>
            </select>
          </ProductSort>
        </ProductLists>
        <CategoryOfProduct>
          {products.map((value, key) => (
            <ProductCard key={key}>
              <ProductImage>
                <img src={value.productImg} alt="" />
              </ProductImage>
              <ProductIcons>
                <span>
                  <RiShoppingCart2Line />
                </span>
                <span>
                  <FaRegHeart />
                </span>
                <span>
                  <FiSearch />
                </span>
              </ProductIcons>
              <p>Barberton Daisy</p>
              <ProductDiscount>
                <span>{`$` + value.price}</span>
                {value.discount > 0 ? (
                  <span className="overLine">${value.discount}</span>
                ) : (
                  <span className="overLine">{value.discount}</span>
                )}
              </ProductDiscount>
            </ProductCard>
          ))}
        </CategoryOfProduct>
      </CategoryContent>
    </CategoryWrapper>
  );
};

export default Category;
