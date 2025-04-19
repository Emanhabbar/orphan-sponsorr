"use client";

import { Box, TextField, Button, MenuItem, Select, Typography, FormControl, InputAdornment, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationCityIcon from "@mui/icons-material/LocationCity"; 
import { useState } from "react";

const SearchBar = () => {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row-reverse" }, 
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* قائمة اختيار المدينة */}
        <FormControl sx={{ flex: 1, minWidth: { xs: "100%", sm: "250px" } }}>
          <Typography sx={{ color: "black", fontWeight: "bold", mb: 1, textAlign: "end" }}>
            المدينة (اختياري)
          </Typography>
          <Select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            fullWidth
            displayEmpty
            renderValue={(value) =>
              value === "" ? <span style={{ color: "#B1B1B1" }}>اختر المدينة</span> : value
            }
            sx={{
              color: "black",
              borderRadius: "34.7px",
              height: "45px",
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#C0C0C0" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#A9A9A9" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
              pl: 4,
              position: "relative",
            }}
          >
            <MenuItem value="" disabled>
              <span style={{ color: "#B1B1B1" }}>اختر المدينة</span>
            </MenuItem>
            <MenuItem value="إدلب">
              <ListItemIcon>
                <LocationCityIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="إدلب" />
            </MenuItem>
            <MenuItem value="حماة">
              <ListItemIcon>
                <LocationCityIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="حماة" />
            </MenuItem>
            <MenuItem value="حلب">
              <ListItemIcon>
                <LocationCityIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="حلب" />
            </MenuItem>
            <MenuItem value="عفرين">
              <ListItemIcon>
                <LocationCityIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="عفرين" />
            </MenuItem>
          </Select>
          <ArrowDropDownIcon
            sx={{
              position: "absolute",
              left: 10,
              top: "70%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#555",
            }}
          />
        </FormControl>

        {/* حقل البحث عن الجمعية */}
        <FormControl sx={{ flex: 2, minWidth: { xs: "100%", sm: "350px" } }}>
          <Typography sx={{ color: "black", fontWeight: "bold", mb: 1, textAlign: "end" }}>
            ابحث عن جمعية (اختياري)
          </Typography>
          <TextField
            placeholder="ابحث عن جمعية"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#B1B1B1" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "34.7px",
                height: "45px",
                "& fieldset": { borderColor: "#C0C0C0" },
                "&:hover fieldset": { borderColor: "#A9A9A9" },
                "&.Mui-focused fieldset": { borderColor: "black" },
              },
              "& .MuiInputBase-input": { color: "black", textAlign: "right" },
            }}
          />
        </FormControl>

        {/* زر البحث */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#a77f4c",
            color: "#fff",
            borderRadius: "25.44px",
            height: "45px",
            minWidth: "150px",
            mt: { xs: 2, sm: 4 }, 
            alignSelf: { xs: "center", sm: "auto" },
          }}
        >
          بحث
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
