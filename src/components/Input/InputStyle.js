import styled from "styled-components";

export const InputDiv = styled.div`
  position: relative;
  transform: scale(1);
  transition: all 0.3s ease;
  margin: 20px 0;
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

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 76%;
  background: #46a358;
  border-radius: 0px 3px 3px 0px;
  width: 102px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff; ;
`;

export const InputComp = styled.input`
  width: 80%;
  padding: 10px 5px;
  border: 1px solid #46a358;
  border-radius: 3px;
  height: 40px;
  outline: none;
`;
//   :focus {
//     border: 2px solid #46a358;
//   }

//   @media (max-width: 540px) {
//     width: 330px;
//   }

//   @media (max-width: 440px) {
//     width: 280px;
//     font-size: 16px;
//   }
// `;
