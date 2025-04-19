import AuthLayout from "@/components/head-page-auth";
import { Box, TextField, Button, Typography, Link, Grid, Divider } from "@mui/material";
import React from 'react';

function Login() {
  return (
    <Grid spacing={2} sx={{ height: "100vh" }}>
      <Grid xs={12} sx={{p: 2}}>
        <AuthLayout />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            width: { xs: "100%", md: "439px" },
            textAlign: "right",
            direction: "rtl",
            padding: { xs: "0 1rem", md: "0" },
          }}
        >
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>
              البريد الإلكتروني
            </Typography>
            <TextField
              variant="outlined"
              placeholder="اكتب البريد الإلكتروني هنا"
              fullWidth
              sx={{
                backgroundColor: "#FFFFFF",
                borderColor: "#b1b1b1",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>
              كلمة المرور
            </Typography>
            <TextField
              variant="outlined"
              type="password"
              placeholder="اكتب كلمة المرور هنا"
              fullWidth
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#8B6F42",
              color: "#fff",
              height: "45px",
              fontSize: "16px",
              marginBottom: "15px",
              marginTop: "20px",
              "&:hover": { backgroundColor: "#7A5D34" },
            }}
          >
            تسجيل
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ fontSize: "16px", paddingX: "10px", color: "#979797", fontWeight: "bold" }}>
              أو تسجيل عبر
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: "45px",
              fontSize: "16px",
              color: "black",
              borderColor: "#BFBFBF",
              marginBottom: "15px",
              '&:hover': {
                backgroundColor: '#E3E3E3',
                borderColor: "#BFBFBF",
              },
            }}
          >
            تسجيل الدخول باستخدام غوغل
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="23" height="23">
              <path fill="#4285F4" d="M23.49 12.27c1.57 0 3.06.26 4.44.74l3.31-3.24C28.91 8.06 26.29 7.5 23.49 7.5c-5.83 0-10.78 3.36-13.24 8.26l4.42 3.43c1.2-3.59 4.55-6.01 8.82-6.01Z" />
              <path fill="#34A853" d="M36.63 24.43c0-.87-.07-1.72-.2-2.55H24v5.39h7.17c-.33 1.66-1.23 3.07-2.52 4.04l4.06 3.15c2.39-2.21 3.92-5.46 3.92-9.03Z" />
              <path fill="#FBBC05" d="M14.68 27.33c-.32-.96-.5-1.97-.5-3.02s.18-2.06.5-3.02l-4.42-3.43a15.367 15.367 0 0 0-1.58 6.45c0 2.33.58 4.54 1.58 6.45l4.42-3.43Z" />
              <path fill="#EA4335" d="M24 39c3.24 0 5.95-1.08 7.95-2.93l-4.06-3.15c-1.15.77-2.63 1.24-3.89 1.24-4.27 0-7.62-2.92-8.82-6.01l-4.42 3.43C13.22 35.64 18.17 39 24 39Z" />
            </svg>
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginTop: "50px" }}>
            <Box sx={{ gap: "5" }}>
              <Typography sx={{ color: "#979797" }}>
                ليس لديك حساب ؟ <Link href="#" underline="none">إنشاء حساب جديد </Link>
              </Typography>
            </Box>
            <Box sx={{ gap: "5" }}>
              <Typography sx={{ color: "#979797" }}>
                لديك مركز رعاية أيتام ؟ <Link href="#" underline="none">إنشاء حساب </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;

 