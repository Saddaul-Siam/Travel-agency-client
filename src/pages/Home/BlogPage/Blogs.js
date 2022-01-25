import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const Blogs = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper>
            <img
              width="100%"
              height="300px"
              src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-1.jpg"
              alt=""
            />
            <Box sx={{ m: 3, pb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                Santorini Have Conquered a Corner of Your Imagination Before
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <img
              width="100%"
              height="300px"
              src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-2.jpg"
              alt=""
            />
            <Box sx={{ m: 3, pb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                Santorini Have Conquered a Corner of Your Imagination Before
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <img
              width="100%"
              height="300px"
              src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-6.jpg"
              alt=""
            />
            <Box sx={{ m: 3, pb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                Santorini Have Conquered a Corner of Your Imagination Before
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blogs;
