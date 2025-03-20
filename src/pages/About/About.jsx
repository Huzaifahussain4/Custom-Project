import React from "react";
import { Box, Typography, Container, Grid, Paper, Avatar } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          About Us
        </Typography>
        <Typography
          variant="h5"
          component="p"
          align="center"
          color="text.secondary"
        >
          We are a team of passionate individuals dedicated to creating amazing
          experiences.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our mission is to deliver high-quality solutions that empower
              businesses and individuals to achieve their goals. We believe in
              innovation, collaboration, and continuous improvement.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We envision a world where technology seamlessly integrates into
              everyday life, making it easier, more efficient, and more
              enjoyable for everyone.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: "John Doe", role: "CEO", avatar: "/images/john-doe.jpg" },
            {
              name: "Jane Smith",
              role: "CTO",
              avatar: "/images/jane-smith.jpg",
            },
            {
              name: "Alice Johnson",
              role: "Designer",
              avatar: "/images/alice-johnson.jpg",
            },
          ].map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.avatar}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h5" component="h3">
                  {member.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
