"use client";

import React from "react";
import {
  TextField,
  InputAdornment,
  Button,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
  Chip,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        direction: "rtl",
        fontFamily: "Tajawal, sans-serif",
        p:3
      }}
    >
      {/* العنوان الرئيسي */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#8B5E3B",
          mb: 2,
          textAlign: "right",
        }}
      >
        المنشورات
      </Typography>

      {/* حقل البحث */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            mb: 0.5,
            color: "black",
          }}
        >
          بحث (اختياري) *
        </Typography>
        <TextField
  placeholder="اكتب البحث"
  size="small"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon color="disabled" />
      </InputAdornment>
    ),
  }}
  sx={{
    borderRadius: "25px",
    backgroundColor: "#F7F7F7",
  }}
/>

      </FormControl>

      {/* زر البحث */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#8B5E3B",
          color: "#fff",
          borderRadius: "20px",
          fontWeight: "bold",
          fontSize: "14px",
          height: "38px",
          mt: 1,
          mb: 2,
          "&:hover": { backgroundColor: "#754A2B" },
        }}
      >
        بحث
      </Button>

      {/* اختيار الجمعية */}
     {/*  <FormControl fullWidth sx={{ mb: 2 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            mb: 0.5,
            color: "#8B5E3B",
          }}
        >
          الجمعية (اختياري) *
        </Typography>
        <Select
          defaultValue=" اختر الجمعية"
          sx={{
            backgroundColor: "#F7F7F7",
            borderRadius: "8px",
            height: "38px",
          }}
        >
          
          <MenuItem sx={{color:"black"}} value="">اختر الجمعية</MenuItem>
          <MenuItem value="جمعية الأمل">جمعية الأمل</MenuItem>
          <MenuItem value="جمعية الخير">جمعية الخير</MenuItem>
        </Select>
      </FormControl>
 */}
      {/* تصفية المساعدات */}
      {/* <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 ,width:"250px"}}>
        <Chip
          label="جمعية سواعد"
          variant="outlined"
          sx={{
            backgroundColor: "#F1F1F1",
            color: "#5A5A5A",
            fontSize: "12px",
            borderRadius: "6px",
          }}
        />
        <Chip
          label="جمعية الأمل"
          variant="outlined"
          sx={{
            backgroundColor: "#F1F1F1",
            color: "#5A5A5A",
            fontSize: "12px",
            borderRadius: "6px",
            
          }}
        />
        <Chip
          label="جمعية فاعل الخير"
          variant="outlined"
          sx={{
            backgroundColor: "#F1F1F1",
            color: "#5A5A5A",
            fontSize: "12px",
            borderRadius: "6px",
          }}
        />
      </Box> */}

      {/* نوع التبرع */}
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          mb: 0.5,
          color: "#8B5E3B",
         
        }}
      >
        نوع التبرع الافتراضي *
      </Typography>
      <FormControlLabel
        control={<Checkbox defaultChecked sx={{ color: "#8B5E3B" }} />}
        label="كفالة يتيم"
        sx={{ color: "#5A5A5A" }}
      />
      <FormControlLabel
        control={<Checkbox defaultChecked sx={{ color: "#8B5E3B" }} />}
        label="تبرع غذائي"
        sx={{ color: "#5A5A5A",display:"flex" }}
      />
      <FormControlLabel
        control={<Checkbox sx={{ color: "#8B5E3B" }} />}
        label="تبرع نقدي"
        sx={{ color: "#5A5A5A" }}
      />
       <FormControl fullWidth sx={{ mb: 2 }}>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          mb: 0.5,
          color: "#8B5E3B",
        }}
      >
        تاريخ  (النشر) *
      </Typography>
      <Select
        sx={{
          backgroundColor: "#F7F7F7",
          borderRadius: "8px",
          height: "38px",
        }}
        input={
          <InputBase
            sx={{
              paddingLeft: "30px", // إضافة مساحة للنص في البداية
              paddingRight: "30px", // إضافة مساحة للأيقونة في النهاية
            }}
          />
        }
      >
        <MenuItem value="">هذا الاسبوع</MenuItem>
        <MenuItem value="جمعية الأمل">هذا الشهر</MenuItem>
        <MenuItem value="جمعية الخير">هذا اليوم</MenuItem>
      </Select>
    </FormControl>
    </Box>
    
  );
};

export default FilterForm;
