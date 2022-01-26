import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Blogs from "../BlogPage/Blogs";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
