import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AddExperience from "../AddExperience/AddExperience";
import Blogs from "../BlogPage/Blogs";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Blogs />
      <AddExperience />
    </div>
  );
};

export default Home;
