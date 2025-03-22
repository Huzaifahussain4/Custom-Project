import { Box, Grid } from "@mui/material";
import React from "react";
import { TeamMember } from "../TeamMemberCard/TeamMemberCard";
import imagePic from "../../assets/model.jpeg";

export const TeamSection = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={12} gap={2} sx={{ display: "flex" }}>
        <Grid item xs={12} md={6} gap={2} sx={{ display: "flex" }}>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              // isQuote={true}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              // isQuote={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} gap={2} sx={{ display: "flex" }}>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              // isQuote={true}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              isQuote={true}
              social={{ linkedin: true, twitter: true }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={12} gap={2} sx={{ display: "flex" }}>
        <Grid item xs={12} md={6} gap={2} sx={{ display: "flex" }}>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              // isQuote={true}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              // isQuote={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} gap={2} sx={{ display: "flex" }}>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              // isQuote={true}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <TeamMember
              name={"John Doe"}
              role={"CEO"}
              image={imagePic}
              quote={"Innovation is the future of business."}
              // isQuote={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
