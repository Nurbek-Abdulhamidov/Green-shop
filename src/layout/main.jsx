import React from "react";
import { MainContainer } from "../GlobalStyle/style";
import Footer from "./footer";
import Navbar from "./navbar";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </div>
  );
};

export default Main;
