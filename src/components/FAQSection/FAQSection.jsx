import React from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const FAQSection = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      id: "panel1",
      question: "How to buy NFTs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "panel2",
      question: "How to create NFTs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "panel3",
      question: "How to join the auction?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "panel4",
      question: "How to withdraw the coin?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "panel5",
      question: "Does the transaction worth it?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "25%" } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#0a192f",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            FAQs
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#64748b" }}>
            What people usually ask
          </Typography>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "75%" } }}>
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                mb: 2,
                borderRadius: "8px !important",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                border: "1px solid #f0f0f0",
                "&:before": {
                  display: "none",
                },
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === item.id ? (
                    <KeyboardArrowUpIcon sx={{ color: "#0a192f" }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ color: "#0a192f" }} />
                  )
                }
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                sx={{
                  px: 3,
                  py: 2,
                  backgroundColor: "#fff",
                  "&.Mui-expanded": {
                    borderBottom: "1px solid #f0f0f0",
                  },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#0a192f" }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3, backgroundColor: "#fff" }}>
                <Typography sx={{ color: "#64748b" }}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
