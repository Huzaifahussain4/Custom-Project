import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import theme from "../../utils/theme";

const data = [
  { value: 200 },
  { value: 6700 },
  { value: 1300 },
  { value: 5000 },
  { value: 4502 },
];

export const KpiCard = ({ title, percent, amount, strokeColor, id, icon }) => {
  const gradientId = `gradient-${id}`;

  return (
    <Card
      variant="outlined"
      sx={{
        width: 285,
        maxWidth: 300,
        borderRadius: 2,
        p: 1,
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // mb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                fontSize: 17, // For font-based icons
                width: 18, // For SVG icons
                height: 18,
                color: theme.palette.text.secondary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {React.cloneElement(icon, { fontSize: "18px" })}
            </Box>

            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.text.secondary }}
            >
              {title}
            </Typography>
          </Box>
          <Typography style={{ fontSize: 13 }} color={strokeColor}>
            {percent} vs last month
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 0,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: 30 }}>
              {amount}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 100,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 0,
            }}
          >
            <ResponsiveContainer width="100%" height="200%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={strokeColor}
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="100%"
                      stopColor={strokeColor}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  type="natural"
                  dataKey="value"
                  stroke={strokeColor}
                  fillOpacity={1}
                  fill={`url(#${gradientId})`}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
