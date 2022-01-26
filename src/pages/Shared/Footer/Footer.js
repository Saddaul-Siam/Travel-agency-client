import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { makeStyles } from "@mui/styles";

const Footer = () => {
  const useStyle = makeStyles({
    listItem: {
      transition: "0.3s all ease-in-out",
      "&:hover": {
        color: "#fc6539",
        transform: "scale(1.1)",
      },
    },
  });
  const { listItem } = useStyle();
  return (
    <Box sx={{ background: "#303030", py: 5 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <List sx={{ color: "#ffffff" }}>
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "Playfair Display, serif",
                    color: "#ffffff",
                    pb: 3,
                  }}
                >
                  About Info
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemText>This website create by saddaul siam</ListItemText>
              </ListItem>
              <ListItem>
                <LocationOnIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>Addresss: Pabna Dhaka Bangladesh</ListItemText>
              </ListItem>
              <ListItem>
                <EmailIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>Email: saddaul.siam@gmail.com</ListItemText>
              </ListItem>
              <ListItem>
                <PhoneIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>Phone: +8801311333277</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <List sx={{ color: "#ffffff" }}>
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "Playfair Display, serif",
                    color: "#ffffff",
                    pb: 3,
                  }}
                >
                  Quick Links
                </Typography>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}> New Brands</ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>News & Blog</ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>Our Office</ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>Our Store</ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>Return Policy</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <List sx={{ color: "#ffffff" }}>
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "Playfair Display, serif",
                    color: "#ffffff",
                    pb: 3,
                  }}
                >
                  Information
                </Typography>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}> Best Value</ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>Your Order</ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>
                  Terms & Condition
                </ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>Contact us</ListItemText>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx={{ pr: 2, fontSize: "small" }} />
                <ListItemText className={listItem}>Manufactureres</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <List sx={{ color: "#ffffff" }}>
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "Playfair Display, serif",
                    color: "#ffffff",
                    pb: 3,
                  }}
                >
                  Follow Us On
                </Typography>
              </ListItem>
              <ListItem className={listItem}>
                <FacebookIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>Facebook</ListItemText>
              </ListItem>
              <ListItem className={listItem}>
                <YouTubeIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>YouTube</ListItemText>
              </ListItem>
              <ListItem className={listItem}>
                <InstagramIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>Instagram</ListItemText>
              </ListItem>
              <ListItem className={listItem}>
                <TwitterIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>Twitter</ListItemText>
              </ListItem>
              <ListItem className={listItem}>
                <LinkedInIcon sx={{ pr: 2, fontSize: 40 }} />
                <ListItemText>LinkedIn</ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
