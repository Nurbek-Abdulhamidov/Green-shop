import React from "react";
import { BtnDiv } from "./ButtonStyle";

const Button = ({ children, bgColor, color, font }) => {
  return (
    <BtnDiv bgColor={bgColor} color={color} font={font}>
      {children}
    </BtnDiv>
  );
};

export default Button;
