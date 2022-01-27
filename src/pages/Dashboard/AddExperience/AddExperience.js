import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import useAuth from "../../../Hooks/useAuth";

const AddExperience = ({ approved }) => {
  const { user, admin } = useAuth();
  console.log(admin);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.userEmail = user.email;
    data.status = approved || "pending";
    fetch(`http://localhost:5000/addBlogPost`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
        }
      });
  };

  return (
    <Container sx={{ pb: 0 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#FF1493",
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      >
        Add your own experience
      </Typography>
      <Paper sx={{ p: 3, backgroundColor: "#ECF0F3 !important" }} elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            id="outlined-basic"
            sx={{ width: "100%", mb: 3, backgroundColor: "#fff" }}
            name="Name"
            label="Name"
            type="text"
            variant="outlined"
            {...register("name", { required: true })}
          />
          <TextField
            required
            id="outlined-basic"
            sx={{ width: "100%", my: 3, backgroundColor: "#fff" }}
            name="phone"
            variant="outlined"
            type="text"
            label="Category"
            {...register("category", { required: true })}
          />
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                sx={{ width: "100%", backgroundColor: "#fff" }}
                name="name"
                id="outlined-basic"
                label="Location"
                variant="outlined"
                {...register("location", { required: true })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="outlined-basic"
                sx={{ width: "100%", backgroundColor: "#fff" }}
                name="phone"
                variant="outlined"
                type="date"
                {...register("date", { required: true })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="outlined-basic"
                sx={{ width: "100%", backgroundColor: "#fff" }}
                name="phone"
                variant="outlined"
                type="number"
                label="Cost"
                {...register("cost", { required: true })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">Your Rating </Typography>
              <select
                {...register("rating", { required: true })}
                style={{ width: "100%", height: "30px" }}
              >
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </Grid>
          </Grid>
          <TextField
            required
            id="outlined-basic"
            sx={{ width: "100%", my: 3, backgroundColor: "#fff" }}
            name="Name"
            label="Add image URL"
            variant="outlined"
            {...register("img", { required: true })}
            type="url"
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
                // resize: "none",
                color: "black",
                // padding: "1%"
              }}
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
            ADD EXPERIENCE
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddExperience;
