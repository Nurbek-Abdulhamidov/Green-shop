import React from "react";
import BlogCardImg from "../../assets/images/01.svg";
import BlogCardImg2 from "../../assets/images/02.svg";
import BlogCardImg3 from "../../assets/images/03.svg";
import BlogCardImg4 from "../../assets/images/04.svg";
import { BsArrowRight } from "react-icons/bs";
import {
  BlogCard,
  BlogCardWrapper,
  BlogContainer,
  BlogTextWrap,
  BlogTime,
  ReadMore,
} from "./BlogStyle";
import Slider from "react-slick";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      img: BlogCardImg,
      title: "Cactus & Succulent Care Tips",
      paragraph:
        "Cacti are succulents are easy care plants for any home or patio. ",
      time: "September 13",
      readTime: "Read in 6 minutes",
    },
    {
      id: 2,
      img: BlogCardImg2,
      title: "Top 10 Succulents for Your Home",
      paragraph: "Best in hanging baskets. Prefers medium to high light.",
      time: "September 12",
      readTime: "Read in 2 minutes",
    },
    {
      id: 3,
      img: BlogCardImg3,
      title: "Top 10 Succulents for Your Home",
      paragraph:
        "Cacti and succulents thrive in containers and because most are..",
      time: "September 12",
      readTime: "Read in 3 minutes",
    },
    {
      id: 4,
      img: BlogCardImg4,
      title: "Best Houseplants Room by Room",
      paragraph: "The benefits of houseplants are endless. In addition to..",
      time: "September 15",
      readTime: "Read in 2 minutes",
    },
  ];

  return (
    <section>
      <BlogContainer>
        <h2>Our Blog Posts</h2>
        <p className="paragraphOfBlog">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.{" "}
        </p>
        <BlogCardWrapper>
          {blogs.map((value, key) => (
            <BlogCard key={key}>
              <img src={value.img} alt="BlogCardImg" />
              <BlogTextWrap>
                <BlogTime>
                  <span> {value.time} </span>|<span>{value.readTime}</span>
                </BlogTime>
                <h4>{value.title}</h4>
                <p>{value.paragraph}</p>
                <ReadMore>
                  Read More{" "}
                  <span>
                    <BsArrowRight />
                  </span>
                </ReadMore>
              </BlogTextWrap>
            </BlogCard>
          ))}
        </BlogCardWrapper>
      </BlogContainer>
    </section>
  );
};

export default Blog;
