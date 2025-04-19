"use client";

import React from "react";
import { Box, Container, IconButton, Typography, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/system";
import ImageSrc from "@/../public/images/a6.jpeg";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const categories = [
  { name: "أصدقاء الخير", image: ImageSrc },
  { name: "كن عونا", image: ImageSrc },
  { name: "الفتاة اليتيمة", image: ImageSrc },
  { name: "لأجل الإنسان", image: ImageSrc },
  { name: "سعود", image: ImageSrc },
  { name: "أمل", image: ImageSrc },
  { name: "نماء", image: ImageSrc },
  { name: "لأجل الإنسان", image: ImageSrc },
  { name: "سعود", image: ImageSrc },
  { name: "أمل", image: ImageSrc },
  { name: "نماء", image: ImageSrc },
  { name: "لأجل الإنسان", image: ImageSrc },
  { name: "سعود", image: ImageSrc },
  { name: "أمل", image: ImageSrc },
  { name: "نماء", image: ImageSrc },
];

const ScrollContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  overflowX: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
}));

const CategoryItem = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "100px",
  margin: "0 10px",
}));

const ImageCircle = styled("img")(() => ({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "2px solid #fff",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
}));

const CategoriesSlider = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollBy({ left: direction === "left" ? -150 : 150, behavior: "smooth" });
    }
  };

  return (
    <Container>
      {/* Header Section */}
      <Box display="flex" alignItems="center" position="relative" width="100%" padding={2}>
        <Typography variant="h6" sx={{ color: "#7a39b0", position: "absolute", left: 0 }}>
          <KeyboardBackspaceOutlinedIcon /> عرض الكل    
        </Typography>
        <Typography variant="h6" sx={{ color: "#836540", position: "absolute", right: 0 }}>
          الجمعيات
        </Typography>
      </Box>

      <Grid container alignItems="center" spacing={1} sx={{ mt: 2 }}>
        <Grid xs={0.5}>
          <IconButton onClick={() => scroll("left")} sx={{ color: "#afafaf", backgroundColor: "#836540" }}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>

        <Grid xs={11}>
          <ScrollContainer ref={scrollRef} sx={{ flexGrow: 1, justifyContent: "center" }}>
            {categories.map((category, index) => (
              <CategoryItem key={index}>
                <ImageCircle src={category.image.src} alt={category.name} />
                <Typography fontSize={14} sx={{ mt: 1 }}>
                  {category.name}
                </Typography>
              </CategoryItem>
            ))}
          </ScrollContainer>
        </Grid>

        <Grid xs={0.5}>
          <IconButton onClick={() => scroll("right")} sx={{ color: "#afafaf", backgroundColor: "#836540", ml: 3 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoriesSlider;