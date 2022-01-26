import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Rating from "react-rating";

const SingleBlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/getSingleBlogPost/${id}`)
      .then((result) => result.json())
      .then((data) => setBlog(data));
  }, [id]);
  return (
    <>
      <Navigation />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <img width="100%" src={blog.img} alt="" />
            <Typography sx={{ fontWeight: 700, fontSize: 16, py: 2 }}>
              {blog.name}
            </Typography>
            <Typography>{blog.date} </Typography>
            <Typography>Cost: {blog.cost} </Typography>
            <Typography sx={{ pb: 1 }}>
              <Rating
                readonly
                initialRating={blog.rating}
                emptySymbol={<StarBorderIcon sx={{ color: "#FFC107" }} />}
                fullSymbol={<StarIcon sx={{ color: "#FFC107" }} />}
              />
            </Typography>
            <Typography>{blog.description}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ fontWeight: 700, fontSize: 16, pb: 3 }}>
              Latest Posts{" "}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <img
                width="20%"
                src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-1.jpg"
                alt=""
              />
              <Typography sx={{ ml: 2 }}>
                Santorini Have Conquered a Corner of Your Imagination Before
                You’ve Set Eyes On It.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SingleBlogDetails;
