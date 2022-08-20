import styled from "styled-components";

export const BlogContainer = styled.div`
  margin: 50px 0;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 16px;
    text-align: center;
    color: #3d3d3d;
  }

  .paragraphOfBlog {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #727272;
    margin: 15px 0 35px 0;
  }
`;

export const BlogCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 1120px) {
    display: grid;
    grid-template-columns: auto auto;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const BlogCard = styled.div`
  max-width: 268px;
  background: #fbfbfb;

  @media (max-width: 1300px) {
    margin: 20px auto;
  }
`;

export const BlogTextWrap = styled.div`
  padding: 9px 15px;

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #3d3d3d;
    margin: 4px 0;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #727272;
    margin: 4x 0 9px 0;
  }
`;

export const BlogTime = styled.div`
  display: flex;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #46a358;
`;

export const ReadMore = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  margin: 10px 0;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #3d3d3d;
  transition: all 0.3s ease;
  transform: translateX(0px);

  :hover {
    color: #46a358;
  }

  :hover span {
    transition: all 0.3s ease;
    width: 50px;
    transform: translateX(100px);
  }

  :not(:hover) span {
    transition: all 0.3s ease;
    transform: translateX(0px);
  }
`;
