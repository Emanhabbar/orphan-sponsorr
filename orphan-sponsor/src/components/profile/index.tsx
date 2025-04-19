"use client";

import { useState } from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PaidIcon from '@mui/icons-material/Paid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from "next/image";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          height: "450px",
          width: "90%",
          position: "relative",
          left: "5%",
          borderRadius: "15px",
        }}
      >
        <Image
          src="/Rectangle 24.png"
          alt="صدقة التطوع"
          width={window.innerWidth}
          height={450}
          objectFit="cover"
          priority
          style={{
            width: "100vw",
            maxWidth: "100%",
            height: "450px",
          }}
        />

      </Box>

      <Box sx={{ width: "90%", paddingLeft: "5%", display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ mt: 2, display: "flex", gap: 2, position: "relative", zIndex: 10 }}>
          <Button
            variant="contained"
            onClick={handleFollowClick}
            sx={{
              backgroundColor: isFollowing ? "#28A745" : "#1877F2",
              color: "white",
              width: "150px",
              cursor: "pointer",
            }}
          >
            <ThumbUpIcon fontSize="small" /> &nbsp; {isFollowing ? "متابع" : "متابعة"}
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#8B5E3C", color: "white", width: "150px", cursor: "pointer" }}>
            <PaidIcon fontSize="small" /> &nbsp; تبرع
          </Button>
        </Box>
      </Box>

      <Box sx={{ position: "relative", display: "flex", justifyContent: "end", alignItems: "center", paddingRight: "10%", marginTop: "-100px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, px: "3%" }}>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h6" fontWeight="bold">
              <CheckCircleIcon fontSize="small" sx={{ color: "blue" }} /> &nbsp;
              مركز الأمل لرعاية الأيتام
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px", color: "gray", fontSize: "14px" }}>
              <Link href="#" underline="hover" sx={{ color: "#1877F2", display: "flex", alignItems: "center" }}>
                Facebook Page <OpenInNewIcon fontSize="small" sx={{ color: "#1877F2", ml: 1 }} />
              </Link>
              <Typography>•</Typography>
              <Typography> <span style={{ color: "#28A745" }}>125</span> الأيتام</Typography>
              <Typography>•</Typography>
              <Typography> <span style={{ color: "#28A745" }}>1200</span> المتابعين</Typography>
            </Box>
          </Box>
        </Box>

        <Image
          src="/Ellipse 5.png"
          alt="صدقة التطوع"
          width={135}
          height={135}
          objectFit="cover"
          style={{ borderRadius: "70px", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" }}
        />
      </Box>
    </Box>
  );
};

export default Profile;
