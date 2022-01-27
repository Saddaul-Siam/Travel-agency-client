import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const MyExperience = () => {
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/getMyExperiencePost/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [user.email]);

  const handleDeleteBlogs = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: " The customer paid for it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove blogs ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/blogs/${id}`, {
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
              });
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
        My Experience
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
                <span
                  style={{
                    background: "#EFF0F5",
                    padding: "5px 8px",
                    bblogsRadius: "50px",
                  }}
                >
                  {blog.status}
                </span>
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

export default MyExperience;
