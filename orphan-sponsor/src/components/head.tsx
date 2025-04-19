"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import ThemeToggleButton from "./filters/theme/ThemeToggleButton";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "@mui/material/Avatar"; 
import userImageSrc from "@/../public/images/a6.jpeg"; 

const pages = ["الرئيسية", "الجمعيات", "سجل التبرع"];

function Headhome() {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Container maxWidth="xl">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fafafa",
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          width: '100%',
          height: { xs: '60px', md: '70px' },
          borderRadius: '16px',
          direction: 'rtl',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            pl: { xs: 2, md: 4 },
            pr: { xs: 2, md: 4 },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component="a"
              href="/"
              variant="h4"
              sx={{
                fontFamily: "Arabic Poetry",
                fontWeight: 500,
                color: "#836540",
                textDecoration: "none",
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              كفيل
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: { md: "32px", lg: "64px" }
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#1A1A1A",
                  display: "block",
                  fontWeight: 500,
                  '&:hover': {
                    color: '#836540',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#1A1A1A" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenu-paper": { direction: "rtl" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="right">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2
            }}
          >
            <Box
              onClick={handleOpenUserMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '24px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <Avatar
                src={userImageSrc.src}
                alt="صورة المستخدم"
                sx={{ 
                  width: 41, 
                  height: 41 
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#1A1A1A",
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                احمد الحمصي
              </Typography>
              <ArrowBackIosIcon
                sx={{
                  height: "12px",
                  width: "12px",
                  color: "#1A1A1A",
                  display: { xs: 'none', sm: 'block' },
                  transform: 'rotate(180deg)' 
                }}
              />
            </Box>

            <Menu
              id="user-menu"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{
                mt: 1.5,
                "& .MuiMenu-paper": { 
                  width: 250,
                  direction: "rtl",
                  p: 1,
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Box sx={{ p: 2, textAlign: 'center' }}>
                <Avatar
                  src={userImageSrc.src}
                  alt="avatar"
                  sx={{ 
                    width: 60, 
                    height: 60,
                    margin: "0 auto 10px"
                  }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333' }}>
                  احمد الحمصي
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mt: 0.5 }}>
                  <EmailIcon sx={{ fontSize: 16, color: '#666' }} />
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    ahmed@example.com
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 1 }} />
              
              <MenuItem onClick={handleCloseUserMenu} sx={{ py: 1.5 }}>
                <ListItemIcon>
                  <PersonOutlineIcon sx={{ fontSize: 20, mr: 1 }} />
                </ListItemIcon>
                <Typography>البروفايل</Typography>
              </MenuItem>
              
              <MenuItem onClick={handleCloseUserMenu} sx={{ py: 1.5 }}>
                <ListItemIcon>
                  <SettingsIcon sx={{ fontSize: 20, mr: 1 }} />
                </ListItemIcon>
                <Typography>الإعدادات</Typography>
              </MenuItem>
              
              <Divider sx={{ my: 1 }} />
              
              <MenuItem onClick={handleCloseUserMenu} sx={{ py: 1.5, color: '#d32f2f' }}>
                <ListItemIcon>
                  <LogoutIcon sx={{ fontSize: 20, mr: 1, color: '#d32f2f' }} />
                </ListItemIcon>
                <Typography>تسجيل الخروج</Typography>
              </MenuItem>
            </Menu>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ThemeToggleButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Headhome;