import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Box, Typography, useTheme, Paper, Stack } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const data = [
  { name: "Electronics", value: 4000 },
  { name: "Fashion", value: 6300 },
  { name: "Groceries", value: 4200 },
  { name: "Decor", value: 5600 },
  { name: "Fitness", value: 7500 },
  { name: "Books", value: 4678 },
  { name: "Toys", value: 3800 },
  { name: "Beauty", value: 5900 },
  { name: "Sports", value: 6200 },
  { name: "Automotive", value: 7400 },
  { name: "Health", value: 2900 },
  { name: "Pets", value: 4300 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Paper
        elevation={0}
        sx={{ px: 2, py: 1, backgroundColor: "#000", color: "#fff" }}
      >
        ${payload[0].value.toLocaleString()}
      </Paper>
    );
  }
  return null;
};

export function CategoryRevenueChart() {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        p: 3,
        background:
          "radial-gradient(circle at top left, rgba(70, 178, 255, 0.27) 0%, #ffffff 60%)",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: 20,
              height: 20,
            }}
          >
            <AttachMoneyIcon sx={{ fontSize: "20px" }} />
          </Box>
          <Box>
            {/* <Typography variant="body2" color="textSecondary">
              Chartly
            </Typography> */}
            <Typography variant="subtitle1" fontWeight={600}>
              Revenue Rate
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body2" color="textSecondary">
          Category Wise
        </Typography>
      </Stack>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.palette.primary.main}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={theme.palette.primary.main}
                stopOpacity={0.3}
              />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="3"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{ fontSize: "12px" }} />
          <YAxis
            tickFormatter={(value) => `$${value / 1000}K`}
            style={{ fontSize: "12px" }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[8, 8, 0, 0]}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            shape={({ x, y, width, height, index }) => (
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={8}
                ry={8}
                fill="url(#barGradient)"
                filter={index === activeIndex ? "url(#glow)" : "none"}
              />
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
