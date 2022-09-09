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
  NavbarWrapper,
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
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState(true);

  const OpenSearch = () => {
    setSearch(!search);
  };

  return (
    <Nav>
      <MainContainer>
        <NavbarContainer>
          <NavLink to="/">
            <NavLogo>
              <img src={LogoImg} alt="" />
            </NavLogo>
          </NavLink>
          <NavSearchDiv>
            <NavItems>
              {navLinksData.map(({ key, path, title }) => (
                <li key={key}>
                  <NavLink to={path}>{title}</NavLink>
                </li>
              ))}
            </NavItems>
            <NavbarWrapper>
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
              <NavLink to="/productCart">
                <Busket>
                  <img src={BusketImg} alt="" />
                  <CountOfNav>
                    <span>3</span>
                  </CountOfNav>
                </Busket>
              </NavLink>
              <LoginBtn>
                <Button>
                  <HiOutlineLogout /> Login
                </Button>
              </LoginBtn>
            </NavbarWrapper>
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
