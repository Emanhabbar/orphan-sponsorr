import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { Typography, Box, IconButton } from "@mui/material";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function SocialMediaLinks() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 560,
       
        direction: "rtl",
      }}
    >
      {/* قسم أرقام التواصل */}
      <ListItem sx={{ display: "flex", gap: 2 }}>
         <Image src="/phone-calling-svgrepo-com 1 .png" alt="logo" width={27} height={27} />
        <Typography sx={{ color: "black", fontWeight: "bold", fontSize: "20px",width: 126,
height: 37,

}}>
          أرقام التواصل:
        </Typography>
      </ListItem>
      <ListItem>
        <Typography sx={{ color: "#5D5D5D", fontWeight: "500",fontSize:16 ,lineHeight:"100%" }}>
          مركز حلب - 0987323957
        </Typography>
      </ListItem>
      <ListItem>
        <Typography sx={{ color: "#5D5D5D", fontWeight: "500",fontSize:16 ,lineHeight:"100%"}}>
        مركز دمشق - 0987322227
        </Typography>
      </ListItem>
      <ListItem>
        <Typography sx={{ color: "#5D5D5D", fontWeight: "500",fontSize:16 ,lineHeight:"100%"}}>
        مركز إدلب - 0963504457
        </Typography>
      </ListItem>

      {/* قسم الموقع */}
      <ListItem sx={{ display: "flex", gap: 2,marginTop:3 }}>
      <Image src="/location.png" alt="logo" width={27} height={27}  />
        <Typography sx={{ color: "black", fontWeight: "bold", fontSize: "20px"
}}>
          الموقع:
        </Typography>
      </ListItem>
      <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography sx={{ color: "#5D5D5D", fontWeight: "500",fontSize:16 ,lineHeight:"100%" }}>
          حلب - الجميلية - جانب مكتبة اسكندرون
        </Typography>
        <Typography sx={{ color: "#504CD5", fontWeight: "700", cursor: "pointer",fontSize:16,marginTop:2 }}>
          عرض الموقع على الخريطة
        </Typography>
      </ListItem>

      {/* قسم وسائل التواصل الاجتماعي */}
      <ListItem sx={{ display: "flex", gap: 2,marginTop:3}}>
  
      <Image src="/web-link-svgrepo-com 1.png" alt="logo" width={27} height={27}  />
        <Typography sx={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
          وسائل التواصل:
        </Typography>
      </ListItem>

      <ListItem>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* أيقونات وسائل التواصل */}
          <IconButton href="https://twitter.com/" target="_blank">
          <Image src="/11053970_x_logo_twitter_new_brand_icon 1.png" alt="logo" width={27} height={27} />
          </IconButton>
          <IconButton href="https://www.tiktok.com/@username" target="_blank">
          <Image src="/tiktok-icon-white-1-logo-svgrepo-com .png" alt="logo" width={27} height={27} />
          </IconButton>
          <IconButton href="https://t.me/username" target="_blank">
          <Image src="/telegram-logo-svgrepo-com.png" alt="logo" width={27} height={27} />
          </IconButton>
          <IconButton href="https://www.instagram.com/" target="_blank">
          <Image src="/instagram-2-1-logo-svgrepo-com.png" alt="logo" width={27} height={27} />
          </IconButton>
          <IconButton href=" https://www.facebook.com/" target="_blank">
          <Image src="/facebook-icon-logo-svgrepo-com.png" alt="logo" width={27} height={27} />
          </IconButton>
          <IconButton href="https://m.me/username" target="_blank">
          <Image src="/facebook-messenger-3-logo-svgrepo-com.png" alt="logo" width={27} height={27} />
          </IconButton>
          <IconButton href="https://wa.me/0987323957" target="_blank">
          <Image src="/whatsapp-svgrepo-com(2).png" alt="logo" width={27} height={27} />
          </IconButton>
        </Box>
      </ListItem>
    </List>
  );} 
 