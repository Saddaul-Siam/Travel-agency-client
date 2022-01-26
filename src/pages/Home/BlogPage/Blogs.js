import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getAllBlogPost`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
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
    </Container>
  );
};

export default Blogs;
