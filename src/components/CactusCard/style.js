import styled from "styled-components";

export const HeaderCardWrapper = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
`;

export const HeaderCardContainer = styled.div`
  width: 586px;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  text-align: right;
`;

export const CardImage = styled.div`
  /* position: absolute;
  top: 20px; */
`;

export const CardText = styled.div`
  position: relative;
  padding: 0px 25px 40px 0;

  h4 {
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
    text-align: right;
    text-transform: uppercase;
    color: #3d3d3d;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: right;
    color: #727272;
    margin: 10px 0;
  }
`;

export const CardButton = styled.div`
  position: absolute;
  right: 25px;
`;
