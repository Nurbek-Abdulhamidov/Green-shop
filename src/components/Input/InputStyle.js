import styled from "styled-components";

export const InputDiv = styled.div`
  transform: scale(1);
  transition: all 0.3s ease;
  margin: 20px 0;
  width: 100%;
`;

export const MainInput = styled.input`
  outline: none;
  border: 1px solid #dee1e6;
  padding: 4px 10px;
  background: #f3f3f3;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  height: ${({ height }) => (height ? height : "45px")};
  width: 100%;

  :focus {
    border: 2px solid #46a358;
  }

  @media (max-width: 820px) {
    padding-left: 40px;
  }

  @media (max-width: 390px) {
    width: 100%;
    font-size: 14px;
    padding: 5px 0px 5px 35px;
  }
`;

export const EmaiInput = styled.input`
  outline: none;
  border: none;
  padding: 10px;
  background: #ffffff;
  border-radius: 6px;
  width: ${({ width }) => (width ? width : "400px")};
  -webkit-box-shadow: 10px 10px 45px 19px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 10px 10px 45px 19px rgba(34, 60, 80, 0.2);
  box-shadow: 10px 10px 45px 19px rgba(34, 60, 80, 0.2);

  :focus {
    border: 2px solid #46a358;
  }

  @media (max-width: 540px) {
    width: 330px;
  }

  @media (max-width: 440px) {
    width: 280px;
    font-size: 16px;
  }
`;
