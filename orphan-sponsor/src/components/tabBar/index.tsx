"use client";

import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

export default function TabBar() {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}> 
      <Tabs
        value={value}
        onChange={handleChange}
        // textColor="primary"
        // indicatorColor="primary"
        sx={{
          "& .MuiTab-root": { fontSize: "16px", fontWeight: "bold", color: "#B1B1B1" },
          "& .Mui-selected": { color: "#34C759" },
          "& .MuiTabs-indicator": { backgroundColor: "#34C759" },
        }}
      >
        <Tab label="جمعياتي أتابعها" />
        <Tab label="كل الجمعيات" />
      </Tabs>
    </Box>
  );
}
