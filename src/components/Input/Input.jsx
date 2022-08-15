import React from "react";
import { InputDiv, MainInput } from "./InputStyle";

const Input = ({ placeholder }) => {
  return (
    <InputDiv>
      <MainInput placeholder={placeholder} />
    </InputDiv>
  );
};

export default Input;
