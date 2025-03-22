import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  Avatar,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export const TeamMember = ({
  name,
  role,
  image,
  quote,
  isQuote = false,
  social = {},
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 0,
        overflow: "hidden",
        bgcolor: isQuote ? theme.palette.secondary.main : "transparent",
        display: "flex",
        flexDirection: "column",
        borderRadius: "0 25px 25px 25px",
      }}
    >
      {image && !isQuote && (
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            mb: 1,
            borderRadius: "0 25px 25px 25px",
          }}
        />
      )}

      {isQuote ? (
        <Box
          sx={{
            p: 2,
            pt: 4,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mb: 1,
            }}
          >
            {social.linkedin && (
              <Avatar
                sx={{ bgcolor: "#333", width: 24, height: 24, fontSize: 12 }}
              >
                <LinkedInIcon sx={{ fontSize: 14 }} />
              </Avatar>
            )}
            {social.twitter && (
              <Avatar
                sx={{ bgcolor: "#333", width: 24, height: 24, fontSize: 12 }}
              >
                <TwitterIcon sx={{ fontSize: 14 }} />
              </Avatar>
            )}
          </Box>
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", mb: 2, fontSize: "0.9rem", flexGrow: 1 }}
          >
            "{quote}"
          </Typography>
          <Box>
            <Chip
              label={name}
              sx={{
                borderRadius: 1,
                bgcolor: "#333",
                color: "white",
                fontWeight: "medium",
                mb: 0.5,
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: "#333", fontSize: "0.8rem" }}
            >
              {role}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ p: 1, textAlign: "left" }}>
          <Box
            // label={name}
            sx={{
              //   borderRadius: 1,
              fontSize: "20px",
              color: theme.palette.text.primary,
              fontWeight: "medium",
              mb: 0.5,
            }}
          >
            {name}
          </Box>
          <Typography variant="body2" sx={{ color: "#333", fontSize: "16px" }}>
            {role}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

// const AboutUsWeb3 = () => {
//   const teamMembers = [
//     {
//       name: 'Chris Bruce',
//       role: 'Founder & CEO',
//       image: '/api/placeholder/250/250',
//     },
//     {
//       name: 'Sean Carey',
//       role: 'Founder & CTO',
//       image: '/api/placeholder/250/250',
//     },
//     {
//       name: 'Aileen Gomes',
//       role: 'Chief of Staff',
//       image: '/api/placeholder/250/250',
//     },
//     {
//       name: '"Rambo"',
//       role: 'Blockchain Reliability Engineer',
//       quote: 'You miss 100% of the shots you don\'t take. -Wayne Gretzky -Michael Scott',
//       isQuote: true,
//       social: { linkedin: true, twitter: true }
//     },
//     {
//       name: 'Thomas Stätter',
//       role: 'Backend Engineer',
//       image: '/api/placeholder/250/250',
//     },
//     {
//       name: 'Oleksii Suslov',
//       role: 'Systems Engineer',
//       image: '/api/placeholder/250/250',
//     },
//     {
//       name: 'Joe Harrison',
//       role: 'Frontend Engineer',
//       image: '/api/placeholder/250/250',
//     },
//     {
//       name: 'Jason Alex',
//       role: 'Site Reliability Engineer',
//       image: '/api/placeholder/250/250',
//     }
//   ];

//   return (
//     <Box sx={{ bgcolor: '#e9e9e6', py: 8, minHeight: '100vh' }}>
//       <Container maxWidth="lg">
//         <Box sx={{ mb: 5 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
//             <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'black' }} />
//             <Typography variant="caption" sx={{ fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase' }}>
//               WHO WE ARE
//             </Typography>
//           </Box>

//           <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, textTransform: 'uppercase' }}>
//             A TEAM OF<br />WEB3 EXPERTS
//           </Typography>

//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Typography variant="body1" paragraph sx={{ fontWeight: 'medium' }}>
//                 BLOCKJOY STARTED AS A PROJECT TO MANAGE STAKING WITH FRIENDS AND FAMILY.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="body1" paragraph>
//                 We built advanced tooling to optimize validator management for teams of two. But, due to the sheer difficulty of installing and running nodes, our little Web3 company grew crazy fast.
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 We quickly realized that blockchain nodes are too complex for most teams to control. We turned our platform into a SaaS product so that anyone could launch and run their own node with full control over where and on what infrastructure it runs. Now, network operators can run their own nodes; BlockJoy just takes the headaches away.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>

//         <Grid container spacing={2}>
//           {teamMembers.map((member, index) => (
//             <Grid item xs={6} sm={4} md={3} key={index}>
//               <TeamMember {...member} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutUsWeb3;
