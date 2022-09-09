import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 50px 0;
`;

export const LeftSide = styled.div`
  flex: 8;
  padding: 0 10px;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);

      td {
        padding-bottom: 10px;
      }
    }
    td {
      border-color: #fbfbfb;
    }
    tbody {
      background: #fbfbfb;

      td i {
        cursor: pointer;
        color: #727272;
        transition: all 0.3s ease;

        :hover {
          color: black;
        }
      }
    }
  }
`;

export const Price = styled.div`
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #727272;
  }
`;

export const Quantity = styled.div`
  span {
    font-weight: 400;
    font-size: 17px;
    color: #3d3d3d;
    margin: 0 10px;
  }

  button {
    border: none;
    width: 21.71px;
    height: 25px;
    background: linear-gradient(
      180deg,
      #46a358 0%,
      rgba(70, 163, 88, 0.8) 100%
    );
    border-radius: 29px;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    color: #fff;
  }
`;

export const Total = styled.div`
  gap: 15px;
  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #46a358;
  }
`;

export const RightSide = styled.div`
  flex: 4;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;

  h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3d3d3d;
    margin-bottom: 5px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: rgba(114, 114, 114, 1);
    span {
      color: rgba(165, 165, 165, 1);
    }
  }

  img {
    width: 70px;
    height: 70px;
  }
`;
