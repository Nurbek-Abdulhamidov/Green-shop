import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  margin-top: 12px;
`;

export const HeaderContainer = styled.div`
  display: flex !important;
  align-items: center;

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3d3d3d;
  }

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    color: #3d3d3d;
    margin-top: 7px;

    span {
      color: #46a358;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
    margin: 5px 0 44px 0;
  }
`;

export const LeftHeader = styled.div`
  padding: 68px 200px 50px 40px;
`;

export const RightHeader = styled.div`
  position: relative;
`;

export const HeaderRightImage = styled.div``;

export const SmallHeaderImgDiv = styled.div`
  position: absolute;
  bottom: 37px;
`;
