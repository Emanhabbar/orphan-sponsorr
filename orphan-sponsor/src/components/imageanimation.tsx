"use client";

import { useState, useEffect, JSX } from "react";
import { Box } from "@mui/material";

const images: string[] = ["ramadan.jpeg", "fox.png", "ramadan.jpeg", "fox.png"];

export default function RamadanSlider(): JSX.Element {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      width="100%"
      
    >
      <img
        src={images[currentImage]}
        alt="رمضان كريم"
        style={{
          width: "1314px",
          height: "340px",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
}
