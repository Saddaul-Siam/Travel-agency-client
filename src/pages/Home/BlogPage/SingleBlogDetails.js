import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Rating from "react-rating";

const SingleBlogDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`https://doctors-portal-24.herokuapp.com/getSingleBlogPost/${id}`)
      .then((result) => result.json())
      .then((data) => setBlog(data));
  }, [id]);

  useEffect(() => {
    fetch(
      `https://doctors-portal-24.herokuapp.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value - 1);
  };
  return (
    <Box sx={{ pt: 5 }}>
      <Navigation />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 700, fontSize: 24, py: 2 }}>
              Recent Post
            </Typography>
            {blogs.map((blog) => (
              <Link
                to={`/blog/${blog._id}`}
                style={{ textDecoration: "none" }}
              >
                <Box sx={{ display: "flex", py: 1 }}>
                  <img width="20%" src={blog.img} alt="" />
                  <Typography sx={{ ml: 2 }}>{blog.name}</Typography>
                </Box>
              </Link>
            ))}
            <Stack spacing={2}>
              <Box sx={{ pt: 5, display: "flex", justifyContent: "center" }}>
                {
                  <Pagination
                    count={pageCount}
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                  />
                }
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default SingleBlogDetails;
