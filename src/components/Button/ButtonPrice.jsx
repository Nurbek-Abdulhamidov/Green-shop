import React from "react";
import { ButtonWrap } from "./ButtonStyle";

const ButtonPrice = ({ children, bg, color }) => {
  return (
    <div>
      <ButtonWrap bg={bg} color={color}>
        {children}
      </ButtonWrap>
    </div>
  );
};

export default ButtonPrice;
