"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export default function MediaControlCard() {
  return (
  <Box sx={{direction:"rtl"}}>
      <Card
      sx={{
        display: "flex",
        direction: "rtl",
        width: "280px",
        backgroundColor: "rgb(146, 146, 146)",
        borderRadius:"20px",
        m:2
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography>المبلغ الذي تبرعت به حتى الان</Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "rgb(66, 24, 0)" }}
          >
            1250$
          </Typography>
        </CardContent>
        <MonetizationOnOutlinedIcon
          sx={{ height: "50px", width: "50px", color: "rgb(75, 75, 75)" }}
        />
      </Box>
    </Card>
  </Box>
  );
}
