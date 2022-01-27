import React from "react";
import { Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Box } from "@mui/system";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Header = () => {
  return (
    <Box id="back-to-top">
      <Swiper
        grabCursor={true}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
      >
        <SwiperSlide>
          <Card style={{ height: "80vh" }}>
            <img
              height="100%"
              width="100%"
              src="https://media.istockphoto.com/photos/female-coworker-making-presentation-in-office-picture-id842214506?b=1&k=20&m=842214506&s=170667a&w=0&h=ngtYrpqdF7hnGj3mjs4bqKtJWKGfBs4VG-jI83Xt6Pw="
              alt=""
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "80vh" }}>
            <img
              height="100%"
              width="100%"
              src="https://media.istockphoto.com/photos/yes-how-can-i-help-you-with-your-flight-picture-id1316971089?b=1&k=20&m=1316971089&s=170667a&w=0&h=CPCqA6Ff3q6JJimXcFNA7gDrtaIl5Z3IE8f6VvRQj8E="
              alt=""
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "80vh" }}>
            <img
              height="100%"
              width="100%"
              src="https://media.istockphoto.com/photos/pie-charts-experts-picture-id1222291339?b=1&k=20&m=1222291339&s=170667a&w=0&h=O2Cznxh5s56mgcUvjmEzRP7s9kMxbV_wxTpSZTRA6R4="
              alt=""
            />
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Header;
