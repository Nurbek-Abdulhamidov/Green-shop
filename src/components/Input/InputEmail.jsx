import React from "react";
import { ButtonEmail, ButtonInput } from "../Button/ButtonStyle";
import { EmaiInput, InputDiv, MainInput } from "./InputStyle";

const Input = ({ placeholder }) => {
  return (
    <InputDiv>
      <EmaiInput width="400px" placeholder={placeholder} />
      <ButtonInput>
        {/* <ButtonEmail>join</ButtonEmail> */}
      </ButtonInput>
    </InputDiv>
  );
};

export default Input;
