import styled from "styled-components";

export const AccountWrapper = styled.div`
  display: flex;
  margin: 60px 0;
`;

export const AccountBar = styled.div`
  flex: 3;
  background-color: #fbfbfb;
  padding: 18px 0;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3d3d3d;
    padding: 18px 17px;
  }

  ul {
    list-style-type: none;
  }

  li {
    color: #727272;
    font-style: normal;
    font-size: 15px;
    line-height: 45px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 5px 18px;

    :hover {
      font-weight: 700;
      color: #46a358;
      background-color: #fff;
      border-left: 5px solid #46a358;
    }
  }
`;

export const AccountDetailDiv = styled.div`
  flex: 8;
`;
