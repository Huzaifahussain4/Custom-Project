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

export const KpiCard = ({ title, percent, amount, strokeColor, id }) => {
  const gradientId = `gradient-${id}`;

  return (
    <Card
      variant="outlined"
      sx={{ width: 285, maxWidth: 300, borderRadius: 2 }}
    >
      <CardContent sx={{ p: 2 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="subtitle1">{title}</Typography>
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
