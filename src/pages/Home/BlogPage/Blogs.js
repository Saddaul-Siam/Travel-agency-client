import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import {
  Box,
  CircularProgress,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;
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
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#FF1493",
          display: "flex",
          justifyContent: "center",
          pt: 6,
          pb: 5,
        }}
      >
        Your Latest Blog
      </Typography>
      {blogs.length ? (
        ""
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
          <CircularProgress />
        </Box>
      )}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={4} key={blog._id}>
            <Link to={`/blog/${blog._id}`} style={{ textDecoration: "none" }}>
              <Blog blog={blog} />
            </Link>
          </Grid>
        ))}
      </Grid>
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
    </Container>
  );
};

export default Blogs;
