import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AccountBar, AccountDetailDiv, AccountWrapper } from "./style";
import MyProduct from "../../components/MyProducts";
import Address from "../../components/Address";
import Wishlist from "../../components/Wishlist";
import AccountDetails from "../../components/AccountDetails";
import { NavLink } from "react-router-dom";
import Account from "../../Account";

const MyAccount = () => {
  const sideBarData = [
    {
      id: 1,
      page: <AccountDetails />,
      item: "Account Details",
      active: false,
      path: "/accountDetails",
      icon: <AiOutlineUser />,
    },
    {
      id: 2,
      page: <MyProduct />,
      item: "My products",
      active: false,
      path: "/myProducts",
      icon: <BsHandbag />,
    },
    {
      id: 3,
      page: <Address />,
      item: "Address",
      active: false,
      path: "/address",
      icon: <MdLocationOn />,
    },
    {
      id: 4,
      page: <Wishlist />,
      item: "Wishlist",
      active: false,
      path: "/wishlist",
      icon: <VscHeart />,
    },
  ];
  const [data] = useState(sideBarData);

  return (
    <AccountWrapper>
      <AccountBar>
        <h2>My Account</h2>
        {data.map(({ path, id, item, icon }, key) => (
          <ul key={key}>
            <NavLink to={path} style={{}}>
              <li>
                <span>{icon}</span> {item}
              </li>
            </NavLink>
          </ul>
        ))}
      </AccountBar>
      <AccountDetailDiv>
        <div>
          <Account />
        </div>
      </AccountDetailDiv>
    </AccountWrapper>
  );
};

export default MyAccount;
