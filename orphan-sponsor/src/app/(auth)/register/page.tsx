"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box, Typography, Link, Checkbox, FormControlLabel, Grid, InputAdornment, IconButton } from "@mui/material";
import AuthLayout from "@/components/head-page-auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
    const verificationCodeRefs = useRef<Array<HTMLInputElement | null>>([]);
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePassword = (type: string) => {
        if (type === "password") {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleRegister = () => {
        setOpenDialog(true);
    };

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value.trim();

        if (/^\d$/.test(value)) {
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = value;
            setVerificationCode(newVerificationCode);

            if (index < verificationCode.length - 1) {
                verificationCodeRefs.current[index + 1]?.focus();
            }
        } else if (value === "") {
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = "";
            setVerificationCode(newVerificationCode);
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace") {
            event.preventDefault();

            const newVerificationCode = [...verificationCode];

            if (verificationCode[index]) {
                newVerificationCode[index] = "";
                setVerificationCode(newVerificationCode);
            } else if (index > 0) {
                verificationCodeRefs.current[index - 1]?.focus();
            }
        }
    };


    const handleConfirm = () => {
        if (verificationCode.every((digit) => digit !== "")) {
            router.push("/profile");
        }
    };

    return (
        <Grid container spacing={2} sx={{ height: "100vh" }}>
            <Grid item xs={12} sx={{ p: 2 }}>
                <AuthLayout />
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "450px", textAlign: "right", direction: "rtl" }}>
                    {["الاسم بالكامل", "البريد الإلكتروني"].map((label, index) => (
                        <Box key={index} sx={{ marginBottom: "15px" }}>
                            <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>{label}</Typography>
                            <TextField
                                variant="outlined"
                                placeholder={`اكتب ${label} هنا`}
                                type="text"
                                fullWidth
                                sx={{ backgroundColor: "#FFFFFF", "& input": { textAlign: "right" } }}
                            />
                        </Box>
                    ))}
                    {["كلمة المرور", "تأكيد كلمة المرور"].map((label, index) => (
                        <Box key={index} sx={{ marginBottom: "15px" }}>
                            <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>{label}</Typography>
                            <TextField
                                variant="outlined"
                                placeholder={`اكتب ${label} هنا`}
                                type={index === 0 ? (showPassword ? "text" : "password") : (showConfirmPassword ? "text" : "password")}
                                fullWidth
                                sx={{ backgroundColor: "#FFFFFF", "& input": { textAlign: "right" } }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => handleTogglePassword(index === 0 ? "password" : "confirmPassword")}>
                                                {index === 0 ? (showPassword ? <VisibilityOff /> : <Visibility />) : (showConfirmPassword ? <VisibilityOff /> : <Visibility />)}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    ))}

                    <FormControlLabel
                        control={<Checkbox />}
                        label={
                            <Typography variant="body1" color="black">
                                أوافق على <Link href="#" underline="none">شروط الاستخدام</Link> و <Link href="#" underline="none">سياسة الخصوصية</Link>
                            </Typography>
                        }
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleRegister}
                        sx={{ backgroundColor: "#8B6F42", color: "#fff", height: "45px", fontSize: "16px", marginBottom: "15px", marginTop: "20px", "&:hover": { backgroundColor: "#7A5D34" } }}
                    >
                        تسجيل
                    </Button>
                    <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginTop: "10px" }}>
                        <Box sx={{ gap: "5" }}>
                            <Typography sx={{ color: "#979797" }}>
                                لديك حساب ؟ <Link href="/login" underline="none"> تسجيل الدخول </Link>
                            </Typography>
                        </Box>
                        <Box sx={{ gap: "5" }}>
                            <Typography sx={{ color: "#979797" }}>
                                لديك مركز رعاية أيتام ؟ <Link href="#" underline="none">إنشاء حساب </Link>
                            </Typography>
                        </Box>
                    </Box>
                    <Dialog
                        open={openDialog}
                        onClose={() => setOpenDialog(false)}
                        maxWidth="sm"
                        fullWidth
                        sx={{
                            "& .MuiDialog-paper": {
                                width: "650px",
                                height: "500px",
                                backgroundColor: "#F6EADB",
                                borderRadius: "30px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }}
                    >
                        <DialogTitle sx={{ fontSize: "36px", fontWeight: "bold", textAlign: "center" }}>
                            تحقق من بريدك الوارد
                        </DialogTitle>
                        <DialogContent sx={{ textAlign: "center", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
                            <Typography sx={{ fontSize: "14px", color: "gray", marginBottom: "20px" }}>
                                أدخل الرمز الذي أرسلناه إلى البريد الإلكتروني
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                                {verificationCode.map((value, i) => (
                                    <TextField
                                        key={i}
                                        inputRef={(el) => (verificationCodeRefs.current[i] = el)}
                                        variant="outlined"
                                        value={value}
                                        onChange={(e) => handleChange(i, e)}
                                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(i, e)} // تأكيد نوع الحدث هنا
                                        inputProps={{ maxLength: 1, style: { textAlign: "center" }, inputMode: "numeric" }}
                                        sx={{ width: "40px", backgroundColor: "#FFFFFF", borderRadius: "5px" }}
                                    />

                                ))}
                            </Box>
                            <Button
                                variant="contained"
                                onClick={handleConfirm}
                                disabled={verificationCode.some((digit) => digit === "")}
                                sx={{ backgroundColor: "#8B6F42", "&:hover": { backgroundColor: "#7A5D34" }, width: "400px" }}
                            >
                                تأكيد
                            </Button>
                        </DialogContent>
                    </Dialog>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Register;
