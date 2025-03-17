import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../utils/theme";

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.greenBg.main,
  padding: theme.spacing(8, 0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const ChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: "1. High-Quality Artworks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "2. Crypto Market Daily Report",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "3. The Immersive World of NFTs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <SectionContainer sx={{ height: "350px" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "left", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Why You Have to Choose Us?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.secondary }}
          >
            Reasonable reasons to pick us. Here what we offer for you
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.id}>
              <StyledCard>
                <CardContent sx={{ p: 4 }}>
                  <CardTitle variant="h5" component="h3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription variant="body1">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};
