import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const Nav = styled.nav``;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap:20px ;
  justify-content:space-between ;
`;

export const NavLogo = styled.div`
  cursor: pointer;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;

  li {
    margin: 0 25px;

    a {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #3d3d3d;
      text-decoration: none;
      transition: all 0.2s ease;

      :hover {
        font-weight: 600;
      }
    }

    @media (max-width: 1085px) {
      display: none;
    }
  }
`;

export const NavSearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  width: 100%;

  @media (max-width: 680px) {
    width: 100% !important;
    gap: 0;
  }
`;

export const SearchInputMedia = styled.div`
  display: flex;
  position: relative;
  display: none;

  @media (max-width: 680px) {
    display: block;
    width: 95%;
  }
`;

export const SearchIconMedia = styled.div`
  position: absolute;
  top: 30px;
  left: 15px;
`;

export const SearchIconDiv = styled.div`
  width: 263px;

  @media (max-width: 680px) {
    width: 0;
  }
`;

export const SearchIcon = styled.div`
  float: right;
  cursor: pointer;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const SearchCancelIcon = styled.div`
  cursor: pointer;
  margin-top: 8px;
  color: #a5a5a5;
  font-size: 24px;
  transition: all 0.3s ease;

  :hover {
    color: black;
  }
`;

export const Busket = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const CountOfNav = styled.div`
  position: absolute;
  top: -2px;
  right: -6px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border-radius: 50%;
  background: #46a358;
  color: white;
`;

export const FilterButton = styled.div`
  display: none;

  @media (max-width: 680px) {
    display: block !important;
  }
`;

export const LoginBtn = styled.div`
  @media (max-width: 680px) {
    display: none;
  }
`;
//  =====================================================================
// Footer style
//  =====================================================================

export const FooterContainer = styled.div``;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #fbfbfb;
  padding: 30px 25px;

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 1000px) {
    gap: 10px;
    padding: 20px 20px 20px 50px;
    grid-template-columns: auto auto;
  }

  @media (max-width: 660px) {
    gap: 10px;
    padding: 20px 0 20px 50px;
    grid-template-columns: auto;
  }

  @media (max-width: 440px) {
    padding: 30px 0;
  }
`;

export const FooterRow2 = styled.div`
  background: rgba(70, 163, 88, 0.1);
  padding: 25px;
  border-top: 1px solid #46a358;
  border-bottom: 1px solid #46a358;

  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;

    @media (max-width: 1000px) {
      gap: 10px;
      padding: 20px 0 20px 25px;
      grid-template-columns: auto auto;
      text-align: left;
    }

    @media (max-width: 660px) {
      gap: 10px;
      padding: 20px 0 20px 25px;
      grid-template-columns: auto;
    }
  }

  ul li {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    @media (max-width: 1000px) {
      text-align: left;
      justify-content: initial;
    }

    @media (max-width: 660px) {
      margin: 0 auto;
    }
  }
`;

export const FooterFlower = styled.div`
  position: relative;
  z-index: 5;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 10px;
  left: -10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e3f0e6;
  z-index: -2;
`;

export const FooterRowCol = styled.div`
  max-width: 250px;

  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    color: #3d3d3d;
    margin: 20px 0 10px 0;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #727272;
  }

  @media (max-width: 800px) {
    padding: 20px;
  }

  @media (max-width: 660px) {
    margin: 0 auto;
    width: 300px;
  }
`;

export const FooterRowCol2 = styled.div`
  max-width: 500px;

  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    color: #3d3d3d;
    margin: 20px 0 10px 0;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #727272;
  }
  @media (max-width: 800px) {
    max-width: initial;
    margin-top: 50px;
    padding: 0 20px;
  }
`;


export const ItemIcon = styled.div`
  margin-top: 5px;
  font-size: 24px;
  color: rgba(70, 163, 88, 1);
  a {
    color: rgba(70, 163, 88, 1);
  }
`;

export const ItemText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #3d3d3d;

  a {
    text-decoration: none;
    color: #3d3d3d;
  }
`;

export const Logo = styled.div`
  img {
    cursor: pointer;
  }

  @media (max-width: 660px) {
    margin: 0 auto;
    width: 250px;
  }
`;

export const FooterRowWrap = styled.div`
  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #3d3d3d;
  }

  ul {
    list-style-type: none;
  }

  ul li {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #3d3d3d;
    cursor: pointer;
    margin: 10px 0;

    :hover {
      transition: all 0.2s ease;
      font-weight: 500;
    }
  }

  img {
    margin-top: 20px;
  }

  @media (max-width: 660px) {
    margin: 0 auto;
    width: 140px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(70, 163, 88, 0.2);
  border-radius: 4px;
  color: rgba(70, 163, 88, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    -webkit-box-shadow: 0px 0px 9px 5px rgba(72, 180, 99, 0.31);
    -moz-box-shadow: 0px 0px 9px 5px rgba(72, 180, 99, 0.31);
    box-shadow: 0px 0px 9px 5px rgba(72, 180, 99, 0.31);
  }
`;

export const SubFooter = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #3d3d3d;
  border-top: 1px solid rgba(70, 163, 88, 0.2);
`;
