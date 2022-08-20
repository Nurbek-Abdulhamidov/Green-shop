import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 50px 0;
`;

export const CategoryDiv = styled.div`
  margin: 0px 30px;
  padding: 14px 18px;
  background: #fbfbfb;

  h6 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3d3d3d;
  }
  @media (max-width: 935px) {
    margin: 0 25px;
  }
  @media (max-width: 660px) {
    margin: 0 20px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

export const CategoryImage = styled.div`
  @media (max-width: 935px) {
    img {
      width: 305px;
    }
  }
  @media (max-width: 660px) {
    img {
      width: 250px;
    }
  }
  @media (max-width: 875px) {
    display: none;
  }
`;

export const CategoryItems = styled.ul`
  list-style-type: none;
  padding: 5px 10px;
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-size: 15px;
  line-height: 40px;
  color: #3d3d3d;
  margin: 5px 0;
  transition: all 0.1s ease;

  :hover {
    font-weight: 600;
    color: #46a358;
    cursor: pointer;
  }
`;

export const SliderPrice = styled.div`
  margin: 20px 0;
`;

export const PriceRange = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3d3d3d;
    margin: 20px 0;

    span {
      color: #46a358;
      font-weight: 500;
    }
  }
`;

export const SizeUl = styled.ul`
  h6 {
    margin: 40px 0 20px 0;
  }
`;

export const SizeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  color: #3d3d3d;
  padding: 0 10px;

  :hover {
    font-weight: 600;
    color: #46a358;
    cursor: pointer;
  }
`;

export const CategoryContent = styled.div`
  flex-shrink: 3;
  width: 100%;
  margin: 0 10px;
`;

export const ItemText = styled.div``;

export const ItemCount = styled.div``;

export const ProductLists = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductItems = styled.div`
  display: flex;
  gap: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const ProductItem = styled.div``;

export const ProductSort = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;

  select {
    outline: none;
    border: none;
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3d3d3d;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CategoryOfProduct = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 585px) {
    img {
      max-width: 150px;
    }
  }
  @media (max-width: 430px) {
    img {
      max-width: 120px;
    }
  }
  @media (max-width: 390px) {
    img {
      max-width: 110px;
    }
  }
`;

export const ProductCard = styled.div`
  padding: 20px;
  background: #fbfbfb;
  max-width: 258px;
  margin: 15px 0;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #3d3d3d;
    margin: 0 0 10px 0;
  }

  @media (max-width: 875px) {
    margin: 10px auto;
    border-radius: 25px;
  }

  @media (max-width: 585px) {
    max-width: 240px;
  }
  @media (max-width: 430px) {
    p {
      font-size: 14px;
    }
  }
`;

export const ProductDiscount = styled.div`
  display: flex;
  gap: 20px;

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
    color: #46a358;
  }

  .overLine {
    text-decoration: line-through;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: #a5a5a5;
  }
  @media (max-width: 390px) {
    font-size: 14px;

    span {
      font-size: 14px;
    }
    .overLine {
      font-size: 14px;
    }
  }
`;

export const ProductIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #3d3d3d;
  transition: all 0.3s ease;

  span:hover {
    color: #46a358;
    cursor: pointer;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
  @media (max-width: 390px) {
    font-size: 14px;
  }
`;
