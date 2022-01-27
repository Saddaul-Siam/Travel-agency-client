import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const UpdateBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const Swal = require("sweetalert2");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://doctors-portal-24.herokuapp.com/getSingleBlogPost/${id}`)
      .then((result) => result.json())
      .then((data) => setBlog(data));
  }, [id]);

  const onSubmit = (data) => {
    fetch(`https://doctors-portal-24.herokuapp.com/updateBlog/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Blog update successful",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(
                `https://doctors-portal-24.herokuapp.com/getSingleBlogPost/${id}`
              )
                .then((result) => result.json())
                .then((data) => setBlog(data));
            }
          });
        }
      });
  };
  const useStyle = makeStyles({
    input: {
      height: "50px",
      width: "100%",
      marginBottom: "10px",
      paddingLeft: "10px",
      fontSize: "16px",
      marginTop: "0px",
    },
  });
  const { input } = useStyle();
  return (
    <Container sx={{ pb: 0 }}>
      <h2>Update your experience</h2>
      <Paper sx={{ p: 3, backgroundColor: "#ECF0F3 !important" }} elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="body1">Name </Typography>
          <input
            className={input}
            type="text"
            defaultValue={blog?.name}
            {...register("name", { required: true })}
          />
          <Typography variant="body1">Category </Typography>
          <input
            className={input}
            type="text"
            defaultValue={blog?.category}
            {...register("category", { required: true })}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">Location</Typography>
              <input
                className={input}
                type="text"
                defaultValue={blog?.location}
                {...register("location", { required: true })}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 0 }}>
              <Typography variant="body1">Date </Typography>
              <input
                className={input}
                type="date"
                defaultValue={blog?.date}
                {...register("date", { required: true })}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 0 }}>
              <Typography variant="body1"> Cost </Typography>
              <input
                className={input}
                type="text"
                defaultValue={blog?.cost}
                {...register("cost", { required: true })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">Rating </Typography>
              <select
                className={input}
                {...register("rating", { required: true })}
              >
                <option value={blog.rating}>{blog.rating}</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </Grid>
          </Grid>
          <Typography variant="body1">img ULR </Typography>
          <input
            className={input}
            type="text"
            defaultValue={blog?.img}
            {...register("img", { required: true })}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Your Experience</Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <textarea
              rows="8"
              style={{
                width: "100%",
                border: "none",
                fontFamily: "sans-serif",
                fontSize: 18,
                color: "black",
                padding: "15px",
              }}
              defaultValue={blog?.description}
              name="message"
              {...register("description", { required: true })}
            />
          </Box>
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <Button
            type="submit"
            sx={{ width: "100%", my: 3, py: 2 }}
            variant="contained"
          >
            Update
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateBlog;
