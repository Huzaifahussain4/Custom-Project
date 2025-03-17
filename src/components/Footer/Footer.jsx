import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import theme from "../../utils/theme";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ py: 4, borderTop: "1px solid #eaeaea", mt: 20, mb: 4 }}
    >
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                component="svg"
                sx={{
                  width: 32,
                  height: 32,
                  mr: 1,
                  color: theme.palette.primary.main,
                }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6.5A5.5,5.5 0 0,0 6.5,12A5.5,5.5 0 0,0 12,17.5A5.5,5.5 0 0,0 17.5,12A5.5,5.5 0 0,0 12,6.5M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
                />
              </Box>
              <Typography
                variant="h6"
                component="span"
                sx={{ fontWeight: "bold", color: "#0a192f" }}
              >
                OuterSpaces
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Typography>
          </Grid>

          {/* About Us */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 2, color: "#0a192f" }}
            >
              About Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" underline="none" color="text.secondary">
                About
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 2, color: "#0a192f" }}
            >
              Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" underline="none" color="text.secondary">
                Blog
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Help Center
              </Link>
            </Box>
          </Grid>

          {/* Community Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 2, color: "#0a192f" }}
            >
              Community Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" underline="none" color="text.secondary">
                Discord
              </Link>
              <Link href="#" underline="none" color="text.secondary">
                Community
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={6} sm={8} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 2, color: "#0a192f" }}
            >
              Social Media
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                aria-label="Instagram"
                sx={{
                  backgroundColor: theme.palette.greenBg.main,
                  color: theme.palette.primary.main,
                  "&:hover": { backgroundColor: theme.palette.secondary.main },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{
                  backgroundColor: theme.palette.greenBg.main,
                  color: theme.palette.primary.main,
                  "&:hover": { backgroundColor: theme.palette.secondary.main },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Facebook"
                sx={{
                  backgroundColor: theme.palette.greenBg.main,
                  color: theme.palette.primary.main,
                  "&:hover": { backgroundColor: theme.palette.secondary.main },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{
                  backgroundColor: theme.palette.greenBg.main,
                  color: theme.palette.primary.main,
                  "&:hover": { backgroundColor: theme.palette.secondary.main },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
