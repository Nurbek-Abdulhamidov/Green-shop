import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 50px;
  margin: 20px 0;
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 5;
`;

export const RightSide = styled.div`
  flex: 5;
`;

export const MultipleImages = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin: 0px 29px 16px 0;
  cursor: pointer;
`;

export const MainImage = styled.div`
  /* background-color: rgba(251, 251, 251, 1); */
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainImg = styled.img`
  width: 70%;
`;

export const SearchIconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  i {
    cursor: pointer;
  }
`;

//   Right side

export const CustomerReview = styled.div`
  display: flexs;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);

  div {
    display: flex;
    align-items: center;
  }

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 16px;
    color: #46a358;
  }

  i {
    color: #ffac0c;
    cursor: pointer;
  }

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #3d3d3d;
    height: 20px;
    margin-left: 10px;
  }
`;

export const ProductInfo = styled.div`
  margin: 15px 0;
  h6 {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #3d3d3d;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
    margin: 10px 0;
  }
`;

export const ProductSize = styled.div``;

export const Sizes = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid #eaeaea;
    border-radius: 50%;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #727272;
    margin: 10px 10px 10px 0;
    cursor: pointer;
    transition: all 0.3s ease;

    :hover {
      border: 1px solid #46a358;
      
      span {
        color: #46a358;
        font-weight: 700;
      }
    }
  }
`;
