import styled from "styled-components";

export const InputDiv = styled.div`
  transform: scale(1);
  transition: all 0.3s ease;
  margin: 20px 0;
`;

export const MainInput = styled.input`
  outline: none;
  border: 2px solid #757575;
  padding: 4px 10px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px;

  :focus {
    border: 2px solid #46a358;
  }
`;

export const EmaiInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 10px;
  background: #ffffff;
  border-radius: 6px;
  width: ${({ width }) => (width ? width : "")};
  -webkit-box-shadow: 10px 10px 45px 19px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 10px 10px 45px 19px rgba(34, 60, 80, 0.2);
  box-shadow: 10px 10px 45px 19px rgba(34, 60, 80, 0.2);

  :focus {
    border: 2px solid #46a358;
  }
`;
