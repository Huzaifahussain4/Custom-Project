import React from "react";
import { Box, Typography, Paper, Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../utils/appStyle.css";

export const TopCreatorsCards = ({ shopName, rating, imgSrc }) => {
  return (
    <Box
      sx={{
        maxWidth: 180,
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          bgcolor: "transparent",
        }}
      >
        <Box
          sx={{
            height: 180,
            width: "100%",
            bgcolor: "#fff",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imgSrc}
            alt={shopName}
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </Box>

        <Box sx={{ p: 1, mt: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#0A2647",
              fontSize: "18px",
            }}
          >
            {shopName}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Typography>{rating}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export const TopCreatorsSlider = ({ shopData }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 25 },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      style={{
        padding: "20px 0 50px 0",
      }}
    >
      {shopData.map((category, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TopCreatorsCards
            shopName={category.shopName}
            rating={category.rating}
            imgSrc={category.imgSource}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
