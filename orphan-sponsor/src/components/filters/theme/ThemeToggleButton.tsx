"use client";

import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useThemeToggle } from "../../../theme"; // استيراد سياق التبديل بين الثيمات
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ThemeToggleButton() {
  const theme = useTheme(); // جلب الثيم الحالي
  const { toggleTheme, mode } = useThemeToggle(); // دالة التبديل

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      aria-label={mode === "dark" ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
      sx={{
        backgroundColor: mode === "dark" ? "#333" : "#f5f5f5",
        borderRadius: "50%", 
        width: 45,
        height: 45,
        boxShadow: mode === "dark" ? "0px 4px 10px rgba(255, 255, 255, 0.2)" : "0px 4px 10px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          backgroundColor: mode === "dark" ? "#444" : "#ddd",
        },
        transition: "all 0.3s ease",
      }}
    >
      {mode === "dark" ? (
        <LightModeIcon sx={{ color: "#ffcc00", fontSize: 28 }} />
      ) : (
        <DarkModeIcon sx={{ color: "#333", fontSize: 28 }} />
      )}
    </IconButton>
  );
}

export default ThemeToggleButton;