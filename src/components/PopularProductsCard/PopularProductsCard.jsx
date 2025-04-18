import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import theme from "../../utils/theme";

export const PopularProductsCard = ({
  title,
  createdBy,
  ImgSrc,
  likesCount,
  dpImgSrc,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: "24px",
        padding: "16px",
        // boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        border: "1px solid lightGray",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundColor: "#d3d3d3",
          borderRadius: "16px",
          height: "200px",
          mb: 5,
        }}
      >
        <img
          src={ImgSrc}
          alt=""
          style={{ width: "100%", borderRadius: "16px" }}
        />
        {/* Like button */}
        <Box
          sx={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            borderRadius: "8px",
            padding: "4px 12px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <FavoriteIcon fontSize="small" />
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {likesCount}
          </Typography>
        </Box>

        {/* Avatar that overlaps image and content */}
        {dpImgSrc ? (
          <Box
            sx={{
              position: "absolute",
              bottom: "-28px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "56px",
              height: "56px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={dpImgSrc}
              alt=""
              style={{
                width: "56px",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid white",
                objectFit: "cover", // This prevents stretching
                objectPosition: "center",
              }}
            />
          </Box>
        ) : (
          <Avatar
            sx={{
              position: "absolute",
              bottom: "-28px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "56px",
              height: "56px",
              backgroundColor: "#d3d3d3",
              border: "2px solid white",
            }}
          />
        )}
      </Box>

      <CardContent
        sx={{
          textAlign: "center",
          padding: "0 16px 16px",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#0f2847",
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created by <span style={{ fontWeight: 500 }}>{createdBy}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};
