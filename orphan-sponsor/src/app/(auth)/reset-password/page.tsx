import AuthLayout from "@/components/head-page-auth";
import { Box, TextField, Button, Typography, Link, Grid, Divider } from "@mui/material";
import React from 'react';

function ResetPassword() {

    return (
        <>
            <Grid spacing={2} sx={{ height: "100vh" }}>
                <Grid xs={12} sx={{ p: 2 }}>
                    <AuthLayout />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
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
                                كلمة المرور
                            </Typography>
                            <TextField
                                variant="outlined"
                                placeholder="اكتب كلمة المرور هنا"
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
                                تأكيد كلمة المرور
                            </Typography>
                            <TextField
                                variant="outlined"
                                placeholder="أكد كلمة المرور هنا"
                                fullWidth
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#b1b1b1",
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
                            تغيير كلمة المرور
                        </Button>



                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ResetPassword