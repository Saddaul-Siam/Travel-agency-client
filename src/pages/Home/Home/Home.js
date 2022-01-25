import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Blogs from "../BlogPage/Blogs";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Blogs />
    </div>
  );
};

export default Home;
