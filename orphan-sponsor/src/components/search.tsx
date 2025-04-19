"use client";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
export default function Inputserch() {
  const posts = [
    {
      id: 1,
      title: "تبرع لصالح جمعية صالح للطفل احمد العامر",
      discrption:
        "وحيد في ظلام الحرب رحل والده تبعته امه يبحث عن دفىء عن حضن عن امل",
      date: "2025/12/18",
      price: "340$",
    },
    {
      id: 2,
      title: "تبرع لصالح جمعية سامر للطفل محمد الموسى",
      discrption:
        "وحيد في ظلام الحرب رحل والده تبعته امه يبحث عن دفىء عن حضن عن امل",
      date: "2025/1/8",
      price: "800$",
    },
    {
      id: 3,
      title: "تبرع لصالح جمعية نسائم الخير للطفل مصعب العامر",
      discrption:
        "وحيد في ظلام الحرب رحل والده تبعته امه يبحث عن دفىء عن حضن عن امل",
      date: "2025/2/18",
      price: "540$",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredposts = useMemo(() => {
    const res = posts.filter((post) => post.title.includes(search));
    console.log(res);
    return res;
  }, [search]);

  return (
    <>
      <Typography sx={{ direction: "rtl", m: 1, fontSize: "18px" }}>
        ابحث عن جمعية او طفل (اختياري)
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          borderRadius: 2,
          direction: "rtl",
        }}
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث هنا..."
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              border: "1px solid black",
              borderRadius: "80px",
              textAlign: "right",
              height: "30px",
              color: "black",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          sx={{
            color: "white",
            backgroundColor: "rgb(97, 64, 34)",
            height: "30px",
            width: "150px",
            borderRadius: "80px",
          }}
          onClick={() => console.log(filteredposts)}
        >
          بحث
        </Button>
      </Box>
      {/* --------------------- */}
      {filteredposts.map((post) => (
        <Card
       key={post.id}
          sx={{
            display: "flex",
            direction: "rtl",
            boxShadow: "1px 1px 2px black",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "20px",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "450px" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography sx={{ color: "black", fontSize: "24px" }}>
                {post.title}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "rgb(0, 0, 0)", fontSize: "18px" }}
              >
                {post.discrption}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "rgb(83, 83, 83)" }}
              >
                {post.date}
              </Typography>
            </CardContent>
            {/*  -----  */}
            <CardContent sx={{}}>
              <Typography
                sx={{
                  color: "rgb(100, 50, 3)",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "end",
                  mb: 3,
                }}
              >
                {post.price}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "blue", fontSize: "18px" }}>
                    عرض المنشور{" "}
                  </Typography>
                  <ArrowBackIosNewOutlinedIcon
                    sx={{ color: "blue", width: "15px", height: "15px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ color: "blue", fontSize: "18px" }}>
                    عرض وصل التبرع"{" "}
                  </Typography>
                  <ArrowBackIosNewOutlinedIcon
                    sx={{ color: "blue", width: "15px", height: "15px" }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
      ))}
    </>
  );
}
