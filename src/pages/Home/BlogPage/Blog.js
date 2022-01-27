import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function Blog({ blog }) {
  return (
    <div>
      <Paper>
        <img width="100%" height="300px" src={blog.img} alt="" />
        <Box sx={{ m: 3, pb: 3 }}>
          <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
            {blog.name}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}
