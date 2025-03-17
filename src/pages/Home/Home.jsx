import { Box } from "@mui/material";
import React from "react";
import theme from "../../utils/theme";
import { Height } from "@mui/icons-material";
import asset1 from "../../../src/assets/asset1.svg";
import visionAsset from "../../assets/vision.svg";
import missionAsset from "../../assets/mission.svg";
import aboutUs from "../../assets/aboutus.svg";
import PaletteIcon from "@mui/icons-material/Palette";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FlightIcon from "@mui/icons-material/Flight";
import DevicesIcon from "@mui/icons-material/Devices";

import {
  CustomButton,
  CustomStyleButton,
} from "../../components/CustomButton/CustomButton";
import {
  CategoryCard,
  ChooseUsSection,
  CustomCart,
  FAQSection,
  LiveCard,
  PopularProductsCard,
  TopCreatorsCards,
} from "../../components";

const Home = () => {
  const categories = [
    { id: 1, title: "Art", icon: <PaletteIcon /> },
    { id: 2, title: "Music", icon: <MusicNoteIcon /> },
    { id: 3, title: "Sports", icon: <SportsBasketballIcon /> },
    { id: 4, title: "Food", icon: <RestaurantIcon /> },
    { id: 5, title: "Travel", icon: <FlightIcon /> },
    { id: 6, title: "Technology", icon: <DevicesIcon /> },
  ];

  const popularProductsCategory = [
    { id: 1, title: "Abstract Attractive", createdBy: "Thomas Cox" },
    { id: 2, title: "Abstract Attractive", createdBy: "Thomas Cox" },
    { id: 3, title: "Abstract Attractive", createdBy: "Thomas Cox" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "100%",
        // backgroundColor: "white",
        // backgroundImage:
        //   "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
        // backgroundSize: "6rem 4rem",
      }}
    >
      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          width: { md: "100%", xs: "100%" },
          gap: 2,
          height: { md: "700px", xs: "auto" },
          backgroundColor: theme.palette.primary.main,
          backgroundImage:
            "linear-gradient(to right,rgba(240, 240, 240, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(240, 240, 240, 0.08)  1px, transparent 1px)",
          backgroundSize: "6rem 4rem",
          paddingTop: "70px",
        }}
      >
        <Box
          sx={{
            textAlign: { md: "start", xs: "center" },
            width: { md: "40%", sm: "80%", xs: "100%" },
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { md: "start", xs: "center" },
          }}
        >
          <Box
            sx={{
              color: theme.palette.greenBg.main,
              fontSize: { md: "50px", sm: "40px", xs: "30px" },
              lineHeight: { md: "50px", sm: "40px", xs: "30px" },
              fontWeight: "bold",
              display: "inline",
              marginLeft: { sm: "0px", xs: "15px" },
              marginRight: { sm: "0px", xs: "15px" },
            }}
          >
            Launch, Manage & Grow Your
            <Box
              sx={{ color: theme.palette.secondary.main, display: "inline" }}
            >
              {" "}
              TikTok
            </Box>{" "}
            Shop
            <Box
              sx={{ color: theme.palette.secondary.main, display: "inline" }}
            >
              {" "}
              Effortlessly.
            </Box>
          </Box>

          <span
            style={{
              color: theme.palette.background.default,
              width: "70%",
              marginTop: "20px",
            }}
          >
            TrackIt is your ultimate tool for tracking sales data across 50M+
            products on TikTok Shop. Stay ahead by monitoring top-performing
            products, creators, and videos in any category.
          </span>

          <Box sx={{ marginTop: "20px", width: "30%" }}>
            <CustomStyleButton
              text={"Get Started"}
              backgroundColor={theme.palette.secondary.main}
              color={theme.palette.primary.main}
              borderColor={theme.palette.primary.main}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            textAlign: "center",
            width: { md: "40%", sm: "50%", xs: "100%" },
            height: { md: "400px", sm: "300px", xs: "300px" },
          }}
        >
          <img src={asset1} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            width: "100%",
            height: "500px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              width: { md: "50%", sm: "80%", xs: "80%" },
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={aboutUs}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { md: "50%", sm: "80%", xs: "100%" },
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: { md: "start", xs: "center" },
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                color: theme.palette.primary.main,
              }}
            >
              About Us
            </Box>
            <Box
              sx={{
                color: theme.palette.text.secondary,
                marginTop: "20px",
                width: { md: "70%", sm: "100%" },
              }}
            >
              rackIt is your ultimate data-driven platform designed to help
              e-commerce sellers succeed in the TikTok Shop ecosystem. We
              simplify tracking, analyzing, and optimizing performance with
              real-time insights, empowering businesses to make smarter
              decisions and scale effortlessly. Our mission is to turn complex
              data into actionable intelligence, providing you with the tools to
              stay ahead of trends, discover top-performing products, and
              maximize growth opportunities. With TrackIt, you gain a
              competitive edge in the fast-paced world of e-commerce. 🚀Stay
              informed. Stay ahead. Scale smarter with TrackIt!{" "}
            </Box>
          </Box>
        </Box> */}

        <Box
          sx={{
            color: theme.palette.text.primary,
            fontSize: "35px",
            lineHeight: "50px",
            fontWeight: "800",
            marginTop: "50px",
            // marginLeft: { sm: "0px", xs: "15px" },
            // marginRight: { sm: "0px", xs: "15px" },
            textAlign: { md: "left", sm: "center", xs: "center" },
            width: { md: "80%", sm: "100%" },
            // padding: "0px 20px",
            lineHeight: "30px",
          }}
        >
          How it Works
        </Box>

        {/* <Box
          sx={{
            color: theme.palette.text.primary,
            width: { md: "30%", sm: "40%", xs: "80%" },
            marginTop: "10px",
            textAlign: "center",
            padding: "0px 20px",
          }}
        >
          No more juggling multiple tools—TrackIt centralizes your data for
          smarter decisions.
        </Box> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
            gap: 5,
            marginTop: "50px",
            justifyContent: "center",
          }}
        >
          <CustomCart
            img={visionAsset}
            title={"Vision"}
            description={
              "TrackIt empowers e-commerce sellers with a seamless, data-driven platform to track, analyze, and optimize performance. Our vision is to simplify decision-making and drive success in the TikTok Shop ecosystem."
            }
          />
          <CustomCart
            img={missionAsset}
            title={"Mission"}
            description={
              "Our mission is to empower businesses with real-time data insights, helping them make smarter decisions and scale effortlessly in the evolving e-commerce landscape."
            }
          />
          <CustomCart
            img={missionAsset}
            title={"Goal"}
            description={
              "Our mission is to empower businesses with real-time data insights, helping them make smarter decisions and scale effortlessly in the evolving e-commerce landscape."
            }
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: { md: "space-between", sm: "center", xs: "center" },
            marginTop: "50px",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "35px",
                fontWeight: "800",

                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "100%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "30px",
              }}
            >
              Live Auctions
            </Box>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "16px",
                // fontWeight: "bold",
                marginTop: 1,
                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "80%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "16px",
              }}
            >
              Compete with others to get the rarest product{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#0D1B2A", // Adjust color as needed
              position: "relative",
              "&::after": {
                content: '""',
                width: "50%",
                height: "3px",
                backgroundColor: theme.palette.primary.main, // Adjust color as needed
                position: "absolute",
                bottom: "10px",
                left: "76%",
                transform: "translateX(-50%)",
                borderRadius: "10px",
              },
            }}
          >
            Explore More
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            // flexDirection: { md: "row", sm: "column", xs: "column" },
            flexWrap: "wrap",
            gap: 2,
            mt: 4,
          }}
        >
          <LiveCard
            sx={{
              flexBasis: { xs: "100%", sm: "48%", md: "23%" },
              flexShrink: 0,
              transition: "all 0.3s ease-in-out",
              minWidth: "200px",
            }}
          />
          <LiveCard
            sx={{
              flexBasis: { xs: "100%", sm: "48%", md: "23%" },
              flexShrink: 0,
              transition: "all 0.3s ease-in-out",
              minWidth: "200px",
            }}
          />
          <LiveCard
            sx={{
              flexBasis: { xs: "100%", sm: "48%", md: "23%" },
              flexShrink: 0,
              transition: "all 0.3s ease-in-out",
              minWidth: "200px",
            }}
          />
          <LiveCard
            sx={{
              flexBasis: { xs: "100%", sm: "48%", md: "23%" },
              flexShrink: 0,
              transition: "all 0.3s ease-in-out",
              minWidth: "200px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: { md: "none", sm: "flex", xs: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#0D1B2A", // Adjust color as needed
            position: "relative",
            mt: 3,
            mb: 3,
            "&::after": {
              content: '""',
              width: "50%",
              height: "3px",
              backgroundColor: theme.palette.primary.main, // Adjust color as needed
              position: "absolute",
              bottom: "-5px",
              left: "76%",
              transform: "translateX(-50%)",
              borderRadius: "10px",
            },
          }}
        >
          Explore More
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: { md: "space-between", sm: "center", xs: "center" },
            marginTop: "50px",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "35px",
                fontWeight: "800",

                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "100%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "30px",
              }}
            >
              Top Creators
            </Box>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "16px",
                // fontWeight: "bold",
                marginTop: 1,
                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "80%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "16px",
              }}
            >
              Compete with others to get the rarest product{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#0D1B2A", // Adjust color as needed
              position: "relative",
              "&::after": {
                content: '""',
                width: "50%",
                height: "3px",
                backgroundColor: theme.palette.primary.main, // Adjust color as needed
                position: "absolute",
                bottom: "10px",
                left: "76%",
                transform: "translateX(-50%)",
                borderRadius: "10px",
              },
            }}
          >
            Explore More
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: { md: "row", sm: "column", xs: "column" },
            flexWrap: "wrap",
            gap: 3,
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3.5,
              width: "80%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {categories.map((category) => (
              <Box
                sx={{
                  // width: { xs: "100%", sm: "48%", md: "13%" },
                  flexBasis: "12%",
                  flexShrink: 0,
                  transition: "all 0.3s ease-in-out",
                  minWidth: "180px",
                }}
              >
                <TopCreatorsCards />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { md: "none", sm: "flex", xs: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#0D1B2A", // Adjust color as needed
            position: "relative",
            mt: 3,
            mb: 3,
            "&::after": {
              content: '""',
              width: "50%",
              height: "3px",
              backgroundColor: theme.palette.primary.main, // Adjust color as needed
              position: "absolute",
              bottom: "-5px",
              left: "76%",
              transform: "translateX(-50%)",
              borderRadius: "10px",
            },
          }}
        >
          Explore More
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: { md: "space-between", sm: "center", xs: "center" },
            marginTop: "50px",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "35px",
                fontWeight: "800",

                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "100%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "30px",
              }}
            >
              Top Creators
            </Box>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "16px",
                // fontWeight: "bold",
                marginTop: 1,
                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "80%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "16px",
              }}
            >
              Compete with others to get the rarest product{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#0D1B2A", // Adjust color as needed
              position: "relative",
              "&::after": {
                content: '""',
                width: "50%",
                height: "3px",
                backgroundColor: theme.palette.primary.main, // Adjust color as needed
                position: "absolute",
                bottom: "10px",
                left: "76%",
                transform: "translateX(-50%)",
                borderRadius: "10px",
              },
            }}
          >
            Explore More
          </Box>
        </Box>

        <Box
          sx={{
            flexBasis: "12%",
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            gap: 3.5,
            mt: 4,
            width: "80%",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category) => (
            <Box
              sx={{
                flexBasis: "12%",
                flexShrink: 0,
                transition: "all 0.3s ease-in-out",
                minWidth: "180px",
              }}
            >
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
              />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: { md: "none", sm: "flex", xs: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#0D1B2A", // Adjust color as needed
            position: "relative",
            mt: 3,
            mb: 3,
            "&::after": {
              content: '""',
              width: "50%",
              height: "3px",
              backgroundColor: theme.palette.primary.main, // Adjust color as needed
              position: "absolute",
              bottom: "-5px",
              left: "76%",
              transform: "translateX(-50%)",
              borderRadius: "10px",
            },
          }}
        >
          Explore More
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: { md: "space-between", sm: "center", xs: "center" },
            marginTop: "50px",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "35px",
                fontWeight: "800",

                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "100%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "30px",
              }}
            >
              Top Creators
            </Box>
            <Box
              sx={{
                color: theme.palette.text.primary,
                fontSize: "16px",
                // fontWeight: "bold",
                marginTop: 1,
                textAlign: { md: "left", sm: "center", xs: "center" },
                width: { md: "80%", sm: "100%" },
                // padding: "0px 20px",
                lineHeight: "16px",
              }}
            >
              Compete with others to get the rarest product{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#0D1B2A", // Adjust color as needed
              position: "relative",
              "&::after": {
                content: '""',
                width: "50%",
                height: "3px",
                backgroundColor: theme.palette.primary.main, // Adjust color as needed
                position: "absolute",
                bottom: "10px",
                left: "76%",
                transform: "translateX(-50%)",
                borderRadius: "10px",
              },
            }}
          >
            Explore More
          </Box>
        </Box>

        <Box
          sx={{
            // flexBasis: "12%",
            // flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            mt: 4,
            width: "80%",
            flexWrap: "wrap",
          }}
        >
          {popularProductsCategory.map((category) => (
            <Box
              sx={{
                flexBasis: "390px",
                flexShrink: 0,
                transition: "all 0.3s ease-in-out",
                width: "100%",
                // minWidth: "180px",
                // display: "flex",
              }}
            >
              <PopularProductsCard
                title={category.title}
                createdBy={category.createdBy}
              />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: { md: "none", sm: "flex", xs: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#0D1B2A", // Adjust color as needed
            position: "relative",
            mt: 3,
            mb: 3,
            "&::after": {
              content: '""',
              width: "50%",
              height: "3px",
              backgroundColor: theme.palette.primary.main, // Adjust color as needed
              position: "absolute",
              bottom: "-5px",
              left: "76%",
              transform: "translateX(-50%)",
              borderRadius: "10px",
            },
          }}
        >
          Explore More
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "100%", mt: 10 }}>
          <ChooseUsSection />
        </Box>

        <Box sx={{ width: "100%", mt: "100px" }}>
          <FAQSection />
        </Box>
      </Box>

      {/* Background Grids  */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: { md: "40%", sm: 0 },
          top: 0,
          background:
            "radial-gradient(circle 500px at 50% 200px, #d4e9f4, transparent)",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Home;
