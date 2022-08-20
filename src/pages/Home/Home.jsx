import React from "react";
import Blog from "../../components/Blogs/Blog";
import HeaderCard from "../../components/CactusCard";
import Category from "../../components/Category";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <HeaderCard />
      <Blog />
    </div>
  );
};

export default Home;
