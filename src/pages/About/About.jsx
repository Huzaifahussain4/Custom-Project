import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Business,
  EmojiPeople,
  Lightbulb,
  CheckCircleOutline,
  Email,
  Timeline,
} from "@mui/icons-material";
import {
  CustomButton,
  CustomStyleButton,
  CustomStyleButtonComponent,
  TeamMember,
  TeamSection,
} from "../../components";
import imagePic from "../../assets/model.jpeg";
import theme from "../../utils/theme";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/300",
      bio: "Jane has over 15 years of experience in the industry and founded the company in 2018.",
    },
    {
      name: "John Davis",
      role: "CTO",
      image: "https://via.placeholder.com/300",
      bio: "John brings technical expertise and innovative thinking to our product development.",
    },
    {
      name: "Emily Wilson",
      role: "Design Director",
      image: "https://via.placeholder.com/300",
      bio: "Emily ensures that user experience remains at the heart of everything we create.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We consistently push boundaries and explore new possibilities.",
    },
    {
      title: "Integrity",
      description:
        "We operate with honesty and transparency in all our dealings.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 8, mt: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "600" }}
          >
            About Our Company
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Innovative solutions for tomorrow's challenges
          </Typography>
          <Divider sx={{ mb: 4 }} />
        </Box>

        {/* Mission Statement */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Typography sx={{ fontWeight: "600" }} variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is to develop cutting-edge solutions that solve
                real-world problems while maintaining the highest standards of
                quality and customer satisfaction. We believe in creating
                technology that makes a positive impact on society.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imagePic}
              alt="Our mission"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        {/* Company History */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}
          >
            <Timeline sx={{ mr: 1 }} /> Our Journey
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in 2018, our company has grown from a small startup to an
            industry leader. What began as a passion project between colleagues
            has evolved into a thriving business with clients worldwide.
            Throughout our journey, we've remained committed to our core values
            and vision.
          </Typography>
          <Typography variant="body1" paragraph>
            We've celebrated numerous milestones over the years, from launching
            our first product to expanding our team and opening offices in
            multiple locations. Each step of our journey reflects our dedication
            to growth and excellence.
          </Typography>
        </Box>

        {/* Company Values */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}
          >
            <Lightbulb sx={{ mr: 1 }} /> Our Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      component="div"
                      gutterBottom
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.background.default}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}
          >
            <EmojiPeople sx={{ mr: 1 }} /> Meet Our Team
          </Typography>
          <Grid container spacing={4} mb={4}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontWeight: "500" }} paragraph>
                Trackit is a team of experienced professionals dedicated to
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: "14px" }} paragraph>
                We pride ourselves on delivering exceptional value to our
                clients through a combination of technical expertise, creative
                problem-solving, and unwavering commitment to quality. Our
                approach is collaborative, ensuring that we understand your
                unique challenges and develop solutions that address your
                specific needs.
              </Typography>
            </Grid>
          </Grid>
          <TeamSection />
        </Box>

        {/* Why Choose Us */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}
          >
            <Business sx={{ mr: 1 }} /> Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <List>
                {[
                  "Innovative solutions tailored to your needs",
                  "Dedicated customer support",
                  "Industry-leading expertise",
                  "Proven track record of success",
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleOutline color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                We pride ourselves on delivering exceptional value to our
                clients through a combination of technical expertise, creative
                problem-solving, and unwavering commitment to quality. Our
                approach is collaborative, ensuring that we understand your
                unique challenges and develop solutions that address your
                specific needs.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Contact CTA */}
        <Box
          sx={{
            textAlign: "center",
            bgcolor: theme.palette.primary.main,
            color: "white",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Ready to work with us?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Get in touch today to discuss how we can help you achieve your
            goals.
          </Typography>
          <Box sx={{ maxWidth: 400, mx: "auto" }}>
            <CustomStyleButtonComponent
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ py: 1.5, borderRadius: "15px" }}
              backgroundColor={theme.palette.secondary.main}
              color={theme.palette.primary.main}
              hover={theme.palette.greenBg.main}
              text={"Contact Us"}
              padding={"15px"}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
