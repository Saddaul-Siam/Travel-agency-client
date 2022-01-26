import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const Swal = require("sweetalert2");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const user = { email };
        fetch("http://localhost:5000/users/admin", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("idToken")}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire("Success!!!", "Make Admin Successfully", "success");
            } else if (!data.modifiedCount) {
              Swal.fire("Error!!!", "This user not found", "error");
            }
          })
          .finally(() => {
            const id = document.getElementById("email");
            id.value = "";
          });
      }
    });
    e.preventDefault();
  };

  return (
    <Container>
      <Box>
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
          Make A Admin
        </Typography>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            id="email"
            required
            sx={{ width: "75%" }}
            label="Email"
            type="email"
            onChange={handleChange}
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default MakeAdmin;
