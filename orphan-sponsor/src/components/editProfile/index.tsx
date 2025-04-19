"use client";
import { Box, TextField, Button, Typography, Grid, MenuItem, IconButton, Avatar, InputBase } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';

function EditProfile() {
    const [name, setName] = useState("محمد رامي جمعة");
    const [isEditing, setIsEditing] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    const handleNameBlur = () => {
        setIsEditing(false);
    };

    return (
        <Grid container justifyContent="flex-start" sx={{ direction: "rtl" }}>
            <Grid item>
                <Box
                    sx={{
                        width: "500px",
                        textAlign: "right",
                        padding: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "20px",
                        }}
                    >
                        <Avatar sx={{ width: 50, height: 50 }} />
                        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: "5px" }}>
                        {isEditing ? (
                                <InputBase
                                    value={name}
                                    onChange={handleNameChange}
                                    onBlur={handleNameBlur}
                                    autoFocus
                                    sx={{
                                        fontSize: "14px",
                                        borderBottom: "1px solid gray",
                                        padding: 0,
                                    }}
                                />
                            ) : (
                                <Typography sx={{ fontSize: "14px", color: "black" }}>
                                    {name}
                                </Typography>
                            )}
                            <IconButton size="small" onClick={() => setIsEditing(true)}>
                                <EditIcon fontSize="small" sx={{color:"blue"}} />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box sx={{ marginBottom: "15px" }}>
                        <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>
                            الجنس
                        </Typography>
                        <TextField
                            select
                            variant="outlined"
                            placeholder="يرجى تحديد الجنس"
                            fullWidth
                            sx={{
                                backgroundColor: "#FFFFFF",
                                height: "45px",
                                "& .MuiInputBase-input": { textAlign: "right" },
                            }}
                        >
                            <MenuItem value="male">ذكر</MenuItem>
                            <MenuItem value="female">أنثى</MenuItem>
                        </TextField>
                    </Box>

                    <Box sx={{ marginBottom: "15px" }}>
                        <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>
                            تاريخ الميلاد
                        </Typography>
                        <TextField
                            type="date"
                            fullWidth
                            sx={{
                                backgroundColor: "#FFFFFF",
                                height: "45px",
                                "& input": {
                                    textAlign: "right",
                                    height: "25px",
                                    paddingRight: "10px",
                                },
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
                        حفظ ومتابعة
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}

export default EditProfile;