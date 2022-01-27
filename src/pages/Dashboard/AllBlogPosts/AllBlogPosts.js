import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const AllBlogPosts = () => {
  const Swal = require("sweetalert2");
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/getAllBlogPost`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: " The customer paid for it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove order ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://glacial-earth-17759.herokuapp.com/order/${id}`, {
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
                title: " Order remove successful",
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
        All Blog Posts
      </Typography>
      {orders.length === 0 && (
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
          Available Order : {orders.length}
        </Typography>
      )}

      <Box>
        {orders.map((order) => (
          <Paper sx={{ my: 3, p: 2 }} key={order._id}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}
            >
              <Typography>
                Order <span style={{ color: "orange" }}># {order._id}</span>
              </Typography>
              <Button
                color="error"
                variant="outlined"
                onClick={() => handleDeleteOrder(order._id)}
              >
                Remove Post
              </Button>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", my: 2 }}
            >
              <img width="100px" src={order.img} alt="" />
              <Typography>{order.name}</Typography>
              <Typography sx={{}}>
                {order.status === "approved" ? (
                  "Approved"
                ) : (
                  <Button
                    color="info"
                    variant="contained"
                    // onClick={() => handleStatusUpdate(order._id)}
                  >
                    Approved
                  </Button>
                )}
              </Typography>
              <Typography>
                <Button
                  color="success"
                  variant="outlined"
                  onClick={() => handleDeleteOrder(order._id)}
                >
                  Update
                </Button>
              </Typography>
              <Typography>{order.payment && "Paid"}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default AllBlogPosts;
