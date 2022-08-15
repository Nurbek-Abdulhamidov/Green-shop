import styled from "styled-components";

export const BtnDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  padding: 5px 15px;
  color: #fff;
  background: #46a358;
  border-radius: 6px;
  cursor: pointer;

  :focus {
    transform: scale(0.9s);
    transition: all 0.3s ease;
  }
`;

export const ButtonEmail = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  height: 100%;
  width: 85px;
  color: #fff;
  cursor: pointer;
  background: #46a358;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  :active {
    transform: scale(0.9s);
    transition: all 0.3s ease;
  }
`;

export const ButtonInput = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  height: 100%;
`;
