import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyExperience = () => {
  const Swal = require("sweetalert2");
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/getMyExperiencePost/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

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
        fetch(`http://localhost:5000/order/${id}`, {
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
        My Experience
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
                <span
                  style={{
                    background: "#EFF0F5",
                    padding: "5px 8px",
                    borderRadius: "50px",
                  }}
                >
                  {order.status}
                </span>
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

export default MyExperience;
