import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { Box, Container, Pagination, Stack } from "@mui/material";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  /*   const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getAllBlogPost`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []); */
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
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
