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
`;

export const CategoryImage = styled.div``;

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
`;

export const CategoryOfProduct = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
