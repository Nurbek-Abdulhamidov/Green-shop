import React from "react";
import SaleImg from "../../assets/images/SaleBanner.svg";
import Button from "../Button/Button.jsx";

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
import { useState } from "react";
import { items, products } from "../../data/Mock/data";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [item, setItem] = useState(items);
  const [product, setProduct] = useState(products);

  const sizes = [
    { id: 1, size: "Small", amount: 119 },
    { id: 2, size: "Medium", amount: 86 },
    { id: 3, size: "Large", amount: 78 },
  ];

  const contents = [
    { id: 1, status: "all", item: "All Plants" },
    { id: 2, status: "new", item: "New Arrivals" },
    { id: 3, status: "sale", item: "Sale" },
  ];

  const getData = (value) => {
    let filterData = products.filter((val) => val.category === value.category);
    setProduct(filterData);
    console.log(filterData);
  };

  const filterProduct = (content) => {
    let filterProduct = products.filter((val) => val.status === content.status);
    setProduct(filterProduct);
  };

  return (
    <CategoryWrapper>
      <CategoryImage>
        <CategoryDiv>
          <h6>Categories</h6>
          <CategoryItems>
            {item.map((value, key) => (
              <CategoryItem key={key} onClick={() => getData(value)}>
                <ItemText>{value.productName}</ItemText>
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
              <ProductItem key={key} onClick={() => filterProduct(content)}>
                {content.item}
              </ProductItem>
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
          {product.map((value, key) => (
            <ProductCard key={key}>
              <NavLink to="/productView">
                <ProductImage>
                  <img src={value.productImg} alt="" />
                </ProductImage>
              </NavLink>

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
              <p>{value.productName}</p>
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
