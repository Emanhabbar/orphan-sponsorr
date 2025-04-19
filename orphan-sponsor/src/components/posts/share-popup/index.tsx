"use client";
import React from "react";
import {
    Box, Typography, IconButton, Popover, InputAdornment, TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface SharePopupProps {
    open: boolean;
    onClose: () => void;
    postUrl: string;
    anchorEl: HTMLElement | null;
}

const SharePopup: React.FC<SharePopupProps> = ({ open, onClose, postUrl, anchorEl }) => {
    // توليد الروابط عند النقر
    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(postUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
        instagram: `https://www.instagram.com/`, // لا يوجد مشاركة مباشرة عبر الرابط
        telegram: `https://t.me/share/url?url=${encodeURIComponent(postUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}`,
    };

    // نسخ الرابط إلى الحافظة
    const handleCopyLink = () => {
        navigator.clipboard.writeText(postUrl);
        alert("تم نسخ الرابط!");
    };

    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            PaperProps={{
                style: {
                    width: 400,
                    padding: "16px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    marginTop: "10px",
                },
            }}
        >
            {/* عنوان النافذة مع زر الإغلاق */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#6D4C41" }}>
                    شارك هذا المنشور عبر:
                </Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* أيقونات المشاركة */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                <IconButton component="a" href={shareLinks.whatsapp} target="_blank">
                    <WhatsAppIcon sx={{ color: "#25D366" }} />
                </IconButton>
                <IconButton component="a" href={shareLinks.facebook} target="_blank">
                    <FacebookIcon sx={{ color: "#1877F2" }} />
                </IconButton>
                <IconButton component="a" href={shareLinks.instagram} target="_blank">
                    <InstagramIcon sx={{ color: "#E4405F" }} />
                </IconButton>
                <IconButton component="a" href={shareLinks.telegram} target="_blank">
                    <TelegramIcon sx={{ color: "#0088CC" }} />
                </IconButton>
                <IconButton component="a" href={shareLinks.twitter} target="_blank">
                    <TwitterIcon sx={{ color: "#1DA1F2" }} />
                </IconButton>
            </Box>

            {/* خيار نسخ الرابط */}
            <Typography variant="body2" align="center" sx={{ mt: 2, color: "#6D4C41" }}>
                أو انسخ رابط المنشور
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <TextField
                    fullWidth
                    value={postUrl}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleCopyLink}>
                                    <ContentCopyIcon sx={{ color: "#6D4C41" }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                        readOnly: true,
                    }}
                />
            </Box>
        </Popover>
    );
};

export default SharePopup;
