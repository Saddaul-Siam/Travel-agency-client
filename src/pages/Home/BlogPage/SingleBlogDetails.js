import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import StarIcon from "@mui/icons-material/Star";
const SingleBlogDetails = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <img
              width="100%"
              src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-1.jpg"
              alt=""
            />
            <Typography sx={{ fontWeight: 700, fontSize: 16, py: 2 }}>
              Santorini Have Conquered a Corner of Your Imagination Before
              You’ve Set Eyes On It.
            </Typography>
            <Typography>April 5, 2016, Bangladesh </Typography>
            <Typography>Cost: 5000 </Typography>
            <Typography sx={{ pb: 1 }}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              illo eum ipsum rem expedita ad odit quisquam atque, est quis
              molestiae unde, aut dolorum error cumque rerum suscipit earum
              temporibus omnis commodi. Eveniet, dolores voluptate cupiditate
              ipsa culpa voluptatem quos, dolorum, ipsam facere omnis ex!
              Tempora atque quidem repellendus reiciendis.
            </Typography>
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
    </>
  );
};

export default SingleBlogDetails;
