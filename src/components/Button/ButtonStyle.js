import styled from "styled-components";

export const BtnDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  padding: 5px 15px;
  border: 1px solid #46a358;
  font-size: ${({ font }) => (font ? font : "")};
  height: ${({ height }) => (height ? height : "45px")};
  color: ${({ color }) => (color ? color : "#ffff")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#46a358")};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: #46a358;
    color: #fff;
  }

  :active {
    transform: scale(0.9);
  }
  @media (max-width: 720px) {
    height: 40px;
    font-size: 16px;
  }
  @media (max-width: 420px) {
    height: 32px;
    font-size: 13px;
  }
`;

// export const ButtonEmail = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
//   border: none;
//   height: 100%;
//   width: 85px;
//   color: #fff;
//   cursor: pointer;
//   background: #46a358;
//   border-bottom-right-radius: 6px;
//   border-top-right-radius: 6px;
// :active {
//   transform: scale(0.9s);
//   transition: all 0.3s ease;
// }
// `;

export const ButtonInput = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  height: 100%;
`;

export const ButtonWrap = styled.button`
  width: 100%;
  background: ${({ bg }) => (bg ? bg : "#46a358")};
  color: ${({ color }) => (color ? color : "#fff")};
  border-radius: 3px;
  height: 40px;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  margin:8px 0 ;

  :active {
    transform: scale(0.9);
    transition: all 0.3s ease;
  }
`;
