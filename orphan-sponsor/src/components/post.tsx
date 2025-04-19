import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Box,
  TextField,
} from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyIcon from "@mui/icons-material/Reply";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Image from "next/image";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
const PostCard = () => {
  return (
    <Card
      sx={{
        width: 562,
        height: 665,
        margin: "auto",
        boxShadow: 4,
        borderRadius: 4,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          textAlign: "right",
          paddingX: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "1rem", color: "#333" }}
          >
            مركز أمل لرعاية الأيتام
          </Typography>
          <Avatar
            sx={{ bgcolor: "#FFC107", width: 40, height: 40 }}
            src="/logo.png"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            mr: 6,
            mb: 2,
          }}
        >
          <PublicIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            20 يناير 2025
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 1 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "right", lineHeight: 1.6 }}
        >
          وجد في ظلام الحرب رجل، والدته تبعته وبقي الألم يبحث عن دمه، عن حضن، عن
          أمل لكن الصمت يعيه.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="250"
        width="562"
        image="/post.jpeg" // استبدل بالمسار الصحيح
        alt="طفل يتيم"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          marginY: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography>المشاركة 2</Typography>
          <Typography>21 التعليقات</Typography>
        </Box>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          62{" "}
          <ThumbUpAltIcon
            sx={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(0, 26, 255)",
              borderRadius: "50%",
              padding: "3px",
              width: "16px",
              height: "16px",
            }}
          />
          <FavoriteIcon
            sx={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(255, 29, 93)",
              borderRadius: "50%",
              padding: "3px",
              width: "16px",
              height: "16px",
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <Typography variant="body2">مشاركة</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <MonetizationOnIcon />
            </IconButton>
            <Typography variant="body2">تبرع</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <ChatBubbleOutline />
            </IconButton>
            <Typography variant="body2">تعليق</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <ThumbUpAltIcon />
            </IconButton>
            <Typography variant="body2">تفاعل</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // يجعل العناصر في عمود واحد
          alignItems: "end", // يجعل التعليقات تبدأ مباشرة أسفل النص
          paddingX: 2,
          marginY: 1,
        }}
      >
        <Typography sx={{ fontWeight: "bold", float: "right" }}>
          كل التعليقات
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingX: 2,
            paddingY: 1,
            mt: 2,
            backgroundColor: "#F0F2F5",
            width: "227px",
            height: "60px",
            borderRadius: "18px",
            float: "right",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "right" }}
          >
            <b>ماريا ماريا</b>: التبرع يساعد هؤلاء الأطفال في النجاة
          </Typography>
          <Avatar
            src="/user-avatar.png"
            sx={{ width: 32, height: 32, marginLeft: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "20px", mr: 5 }}>
          <Typography sx={{ fontSize: "12px" }}>10 h</Typography>
          <Typography sx={{ fontSize: "12px" }}>رد</Typography>
          <Typography sx={{ fontSize: "12px" }}>تفاعل</Typography>
        </Box>
      </Box>
    <Box sx={{display:"flex",alignItems:"center"}}>
  
      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "25px",
        padding: "5px 10px",
        width: "500px",
        height:"40px",
        backgroundColor: "#F5F7F9", // لون الخلفية الرمادي الفاتح
      }}
    >
      
      {/* أيقونة الإيموجي على اليسار */}
      <SentimentSatisfiedAltIcon sx={{ color: "#9E9E9E", marginRight: "10px" }} />

      {/* مربع الإدخال */}
      <TextField
        placeholder="اكتب تعليق ....."
        variant="standard"
        sx={{
          flex: 1,
          border: "none",
          backgroundColor: "transparent",
          "& .MuiInputBase-root": {
            paddingY: "5px",
            fontSize: "14px", 
            color: "#666", // لون النص الرمادي
          },
          "& .MuiInput-underline:before": { borderBottom: "none" }, // إزالة الخط السفلي
          "& .MuiInput-underline:hover:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
        }}
        InputProps={{
          disableUnderline: true, // تعطيل الخط السفلي
        }}
      />

     
    </Box>
    <Avatar
        src="/profile.jpg" // استبدل بمسار الصورة الفعلي
        sx={{ width: 32, height: 32, marginLeft: "8px" }}
      />
    </Box>
    </Card>
  );
};

export default PostCard;
