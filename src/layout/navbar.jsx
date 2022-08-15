import React, { useState } from "react";
import LogoImg from "../assets/images/Logo.svg";
import { VscCircuitBoard } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { navLinksData } from "../data/navData/navData";
import BusketImg from "../assets/images/busket.svg";
import { HiOutlineLogout } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import {
  Busket,
  CountOfNav,
  FilterButton,
  LoginBtn,
  Nav,
  NavbarContainer,
  NavItems,
  NavLogo,
  NavSearchDiv,
  SearchCancelIcon,
  SearchIcon,
  SearchIconDiv,
  SearchIconMedia,
  SearchInput,
  SearchInputMedia,
} from "./style";
import { MainContainer } from "../GlobalStyle/style";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Navbar = () => {
  const [search, setSearch] = useState(true);

  const OpenSearch = () => {
    setSearch(!search);
  };

  return (
    <Nav>
      <MainContainer>
        <NavbarContainer>
          <NavLogo>
            <img src={LogoImg} alt="" />
          </NavLogo>
          <NavSearchDiv>
            <NavItems>
              {navLinksData.map(({ key, path, title, active }) => (
                <li key={key}>
                  <NavLink to={path}>{title}</NavLink>
                </li>
              ))}
            </NavItems>
            <SearchIconDiv>
              {search ? (
                <SearchIcon onClick={OpenSearch}>
                  <FiSearch />
                </SearchIcon>
              ) : (
                <>
                  <SearchInput>
                    <Input placeholder="Find your plants" />
                    <SearchCancelIcon onClick={OpenSearch}>
                      <GiCancel />
                    </SearchCancelIcon>
                  </SearchInput>
                </>
              )}
            </SearchIconDiv>
            <SearchInputMedia>
              <Input height="45px" placeholder=" Find your plants" />
              <SearchIconMedia onClick={OpenSearch}>
                <FiSearch />
              </SearchIconMedia>
            </SearchInputMedia>
            <Busket>
              <img src={BusketImg} alt="" />
              <CountOfNav>
                <span>4</span>
              </CountOfNav>
            </Busket>
            <LoginBtn>
              <Button>
                <HiOutlineLogout /> Login
              </Button>
            </LoginBtn>
          </NavSearchDiv>
          <FilterButton>
            <Button height="45px">
              <VscCircuitBoard />
            </Button>
          </FilterButton>
        </NavbarContainer>
      </MainContainer>
    </Nav>
  );
};

export default Navbar;
