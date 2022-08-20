import styled from "styled-components";

export const HeaderCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  padding: 0 20px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderCardContainer = styled.div`
  /* width: 586px; */
  position: relative;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  text-align: right;
  margin: 20px 0;

  @media (max-width: 470px) {
    flex-direction: column;
    padding: 5px 0px 40px 0px;
  }
`;

export const CardImage = styled.div`
  @media (max-width: 680px) {
    img {
      width: 200px;
    }
  }

  @media (max-width: 470px) {
    /* position: absolute;
    top: -20px; */
  }
`;

export const CardText = styled.div`
  position: relative;
  padding: 0px 25px 40px 0;
  text-align: right;

  h4 {
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
    /* text-align: right; */
    text-transform: uppercase;
    color: #3d3d3d;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* text-align: right; */
    color: #727272;
    margin: 10px 0;
  }

  @media (max-width: 470px) {
    text-align: left !important;
    padding: 15px;
  }
`;

export const CardButton = styled.div`
  position: absolute;
  right: 25px;

  @media (max-width: 470px) {
    left: 15px;
  }
`;
