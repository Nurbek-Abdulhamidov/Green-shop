import styled from "styled-components";

export const HeaderWrapper = styled.div`

  margin-top: 12px;
  max-width: 100%;
  padding: 5px 12px ;
`;

export const HeaderContainer = styled.div`
  display: flex !important;
  align-items: center;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );

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

  @media (max-width: 1120px) {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 13px;
    }
  }
  @media (max-width: 1085px) {
    border-radius: 25px;
    h1 {
      font-size: 55px;
    }
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 45px;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 42px;
      line-height: 50px;
    }
  }
  @media (max-width: 720px) {
    h1 {
      font-size: 35px;
      line-height: 40px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
      margin: 5px 0 20px 0;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 30px;
    }
    h5 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
      margin: 5px 0 20px 0;
    }
  }
  @media (max-width: 490px) {
    h1 {
      font-size: 25px;
      line-height: 30px;
    }
    h5 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
      line-height: 15px;
      margin: 5px 0 20px 0;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 20px;
      line-height: 25px;
      margin-top: 5px;
    }
    h5 {
      font-size: 11px;
    }
    p {
      font-size: 10px;
      line-height: 16px;
      margin: 5px 0 20px 0;
    }
  }
  @media (max-width: 360px) {
    h1 {
      font-size: 17px;
      line-height: 22px;
    }
    h5 {
      font-size: 10px;
    }
    p {
      font-size: 9px;
      line-height: 12px;
      margin: 5px 0 15px 0;
    }
  }
`;

export const LeftHeader = styled.div`
  padding: 68px 200px 50px 40px;
  @media (max-width: 1200px) {
    padding: 60px 150px 50px 40px;
  }
  @media (max-width: 1120px) {
    padding: 60px 100px 50px 40px;
  }
  @media (max-width: 1085px) {
    padding: 60px 50px 50px 40px;
  }
  @media (max-width: 900px) {
    padding: 40px;
  }
  @media (max-width: 720px) {
    padding: 30px;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
  @media (max-width: 360px) {
    padding: 15px;
  }
`;

export const RightHeader = styled.div`
  position: relative;
  /* flex-shrink:2 ; */
`;

export const HeaderRightImage = styled.div`
  @media (max-width: 1200px) {
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 1085px) {
    img {
      max-width: 450px;
    }
  }

  @media (max-width: 900px) {
    img {
      max-width: 380px;
    }
  }

  @media (max-width: 800px) {
    img {
      max-width: 335px;
    }
  }

  @media (max-width: 720px) {
    img {
      max-width: 300px;
    }
  }

  @media (max-width: 600px) {
    img {
      max-width: 220px;
    }
  }
  @media (max-width: 490px) {
    img {
      max-width: 180px;
    }
  }
  @media (max-width: 420px) {
    img {
      max-width: 150px;
    }
  }
`;

export const SmallHeaderImgDiv = styled.div`
  position: absolute;
  bottom: 37px;

  @media (max-width: 600px) {
    bottom: 10px;
    img {
      max-width: 90px;
    }
  }
  @media (max-width: 490px) {
    display: none;
  }
`;
