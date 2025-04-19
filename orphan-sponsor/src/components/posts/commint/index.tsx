"use client";
import React from "react";
import {
    Box, Typography, IconButton, Popover, InputAdornment, TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StructurePost from "../structure-post";


interface DonationPopupProps {
    open: boolean;
    onClose: () => void;
    postId: string;
}

const DonationPosts: React.FC<DonationPopupProps> = ({ open, onClose, postId }) => {

    return (
        <Popover
            open={open}
            onClose={onClose}
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
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <StructurePost />
            </Box>
        </Popover>
    );
};

export default DonationPosts;
