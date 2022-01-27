import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllBlogPosts = () => {
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://doctors-portal-24.herokuapp.com/getAllBlogPost`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleDeleteBlogs = (id) => {
    Swal.fire({
      title: "Are you sure?",
      // text: " The customer paid for it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove blogs ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://doctors-portal-24.herokuapp.com/deleteBlogPost/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("idToken")}`,
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: " blogs remove successful",
              }).then((result) => {
                if (result.isConfirmed) {
                  fetch(
                    `https://doctors-portal-24.herokuapp.com/getAllBlogPost`
                  )
                    .then((res) => res.json())
                    .then((data) => setBlogs(data));
                }
              });
            }
          });
      }
    });
  };
  const handleStatusUpdate = (id) => {
    const status = {
      id: id,
      status: "approved",
    };
    fetch("https://doctors-portal-24.herokuapp.com/blogStatusUpdate", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Blog approved successful",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://doctors-portal-24.herokuapp.com/getAllBlogPost`)
                .then((res) => res.json())
                .then((data) => setBlogs(data));
            }
          });
        }
      });
  };

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#FF1493",
          display: "flex",
          justifyContent: "center",
          py: 5,
        }}
      >
        All Blog Posts
      </Typography>
      {blogs.length === 0 && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            // color: "#FF1493",
            display: "flex",
            justifyContent: "center",
            p2: 5,
          }}
        >
          Available blogs : {blogs.length}
        </Typography>
      )}
      {blogs.length ? (
        ""
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
          <CircularProgress />
        </Box>
      )}
      <Box>
        {blogs.map((blog) => (
          <Paper sx={{ my: 3, p: 2 }} key={blog._id}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}
            >
              <Typography>
                blogs <span style={{ color: "orange" }}># {blog._id}</span>
              </Typography>
              <Button
                color="error"
                variant="outlined"
                onClick={() => handleDeleteBlogs(blog._id)}
              >
                Remove Post
              </Button>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", my: 2 }}
            >
              <img width="100px" src={blog.img} alt="" />
              <Typography>{blog.name}</Typography>
              <Typography sx={{}}>
                {blog.status === "approved" ? (
                  "Approved"
                ) : (
                  <Button
                    color="info"
                    variant="contained"
                    onClick={() => handleStatusUpdate(blog._id)}
                  >
                    Approved
                  </Button>
                )}
              </Typography>
              <Typography>
                <Button
                  color="success"
                  variant="outlined"
                  onClick={() => navigate(`/dashboard/updateBlog/${blog._id}`)}
                >
                  Update
                </Button>
              </Typography>
              <Typography>{blog.payment && "Paid"}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default AllBlogPosts;
