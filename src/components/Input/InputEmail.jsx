import React from "react";
import { InputComp, InputDiv, Button } from "./InputStyle";

const Input = ({ placeholder, title }) => {
  return (
    <InputDiv>
      <InputComp placeholder={placeholder} />
      <Button>{title}</Button>
    </InputDiv>
  );
};

export default Input;
