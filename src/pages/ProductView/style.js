import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 50px;
  margin: 20px 0;
`;

export const Wrapper = styled.div``;

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

export const AddCart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    margin: 0 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 10px;
    color: #3d3d3d;
  }
`;

export const CounterButton = styled.button`
  width: 33px;
  height: 38px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  border-radius: 29px;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const Tags = styled.div`
  margin-top: 20px;
  p {
    color: rgba(114, 114, 114, 1);
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;

    span {
      color: rgba(165, 165, 165, 1);
    }
  }

  h6 {
    display: flex;
    gap: 20px;
    margin: 20px 0;

    i {
      cursor: pointer;
      font-size: 17px;

      :hover {
        transition: all 0.3s ease;
        -webkit-box-shadow: 0px 10px 2px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 10px 2px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 10px 2px 2px rgba(34, 60, 80, 0.2);
        border-radius: 20%;
      }
    }
  }
`;

export const DescriptionProductContainer = styled.div``;

export const DescriptionProduct = styled.div`
  display: flex;
  gap: 50px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  margin-bottom: 18px;

  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 16px;
    color: #3d3d3d;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

export const Review = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
    margin-bottom: 18px;
  }
  b {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #3d3d3d;
  }
`;

export const Releted = styled.div`
  margin: 50px 0 30px 0;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #46a358;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);

  p {
    margin-bottom:10px ;
  }
`;
