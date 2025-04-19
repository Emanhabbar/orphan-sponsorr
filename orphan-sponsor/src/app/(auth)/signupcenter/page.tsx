"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Paper,
  IconButton,
  LinearProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";


function SignUp() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [fileError, setFileError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size <= 15 * 1024 * 1024) {
        setSelectedFile(file);
        setFileError("");

        // محاكاة تحميل الملف
        const intervalId = setInterval(() => {
          setLoadingProgress((prevProgress) => {
            if (prevProgress >= 100) {
              clearInterval(intervalId);
              return prevProgress;
            }
            return Math.min(prevProgress + 10, 100);
          });
        }, 500);
      } else {
        setFileError("الملف يتجاوز الحد المسموح به (15MB).");
      }
    }
  };

  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" fontWeight="bold" sx={{ color: "#836540", marginBottom: "15px" }}>
            كفيل
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#7a6652",
            fontSize: "0.9rem",
            display: "flex",
            gap: "2px",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#717680",
              padding: "1px",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "15px",
              textAlign: "center",
              color: "white",
              marginLeft: "8px",
            }}
          >
            1
          </Typography>
          <Typography sx={{
            width: 134,
            height: 31,
            fontFamily: "Cairo",
            fontSize: "20px",
            color: "#717680",
          }}>
            معلومات المركز
          </Typography>

          <Box sx={{ width: "74%", height: "1px", backgroundColor: "#717680", marginRight: -2 }}></Box>
        </Typography>

        <Box sx={{ maxWidth: 400, width: "100%" }}>
          <Box sx={{ marginBottom: "15px", mt: 2 }}>
            <label style={{ color: "black" }}>اسم المركز</label>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="اكتب اسمك هنا"
              sx={{
                mt: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#b1b1b1",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "15px" }}>
            <label style={{ color: "black" }}>عنوان المركز</label>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="سوريا - ادلب"
              sx={{
                mt: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#b1b1b1",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "15px" }}>
            <label style={{ color: "black" }}>رقم التواصل</label>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="00963 981 555 026"
              sx={{
                mt: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#b1b1b1",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>

          <Box>
            <label style={{ color: "#1A1A1A", fontWeight: 400, fontSize: "16px" }}>
              ملف ترخيص المركز
            </label>
            <Paper
              elevation={0}
              sx={{
                height: "160px",
                border: "2px dashed #d4c4b4",
                borderRadius: "8px",
                p: 2,
                mt: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#7a5d34",
                },
              }}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <Image src="/Avatar.png" alt="upload" width={40} height={40} />
              <Typography variant="body2" sx={{ color: "black", mt: 1 }}>
                {selectedFile ? `ملف: ${selectedFile.name}` : "اضافة ملف ترخيص المركز"}
              </Typography>
              <Typography variant="caption" sx={{ color: "#7a6652", mt: 0.5 }}>
                PDF, PNG, JPG or WORD (max. 15MB)
              </Typography>
              <input
                type="file"
                accept=".pdf,.png,.jpg,.docx"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="fileInput"
              />
            </Paper>
          </Box>

          {/* معلومات التحميل تحت صندوق التحميل */}
          {selectedFile && (
            <Box sx={{ mt: 2, width: "100%" }}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <IconButton onClick={() => setSelectedFile(null)}>
                    <DeleteIcon sx={{ fontSize: 20, color: "#717680" }} />
                  </IconButton>

                </Grid>
                <Grid item xs>
                  <Typography variant="body2" sx={{ color: "#5d4730", textAlign: "left", marginTop: 4 }}>
                    {selectedFile.name}
                    <br />
                    {`${(selectedFile.size / 1024).toFixed(2)} kb • ${loadingProgress}% Loading`}
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={loadingProgress}
                    sx={{
                      marginRight: 10,
                      width: "75%",
                      mt: 1,
                      height: 5,
                      borderRadius: 5,
                      backgroundColor: "#d4c4b4",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "blue",
                      },
                    }}
                  />


                </Grid>
                <Grid item>
                  <Image src="/Avatar.png" alt="upload" width={40} height={40} />
                </Grid>
              </Grid>


            </Box>
          )}

          <Button
            sx={{
              backgroundColor: "#A77F4C",
              width: "400px",
              mt: 2,
              color: "white",
              fontSize: "16px",
            }}
          >
            التالي
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
              fontSize: "14px",
            }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "#7a6652",
                fontSize: "0.875rem",
                fontWeight: 500,
                "&:hover": { color: "#504CD5" },
              }}
            >
              لديك حساب بالفعل؟
              <span style={{ color: "blue" }}> تسجيل الدخول</span>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;








