"use client";
import React, { useState } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Avatar,
    Typography,
    IconButton,
    Box,
    TextField,
    Grid,
    Button,
} from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyIcon from "@mui/icons-material/Reply";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import userImageSrc from "@/../public/images/a6.jpeg";
import ImageSrc from "@/../public/images/post.png";
import Like from "../like";
import SharePopup from "../share-popup";
import DonationPosts from "../commint";
import SendIcon from '@mui/icons-material/Send';

const StructurePost = () => {
    const [shareOpen, setShareOpen] = useState(false);
    const [donationOpen, setDonationOpen] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, author: "ماريا ماريا", text: "لزرع الأمل في هذه القلوب الطيبة", time: "10h" }
    ]);
    const [newComment, setNewComment] = useState("");
    const [showComments, setShowComments] = useState(false);

    const postUrl = "https://www.SyriaHomeless.com/posts/12390";

    const handleShareClick = () => {
        setShareOpen(true);
    };

    const handleCloseShare = () => {
        setShareOpen(false);
    };

    const handleCommintClick = () => {
        setDonationOpen(true);
    };

    const handleCloseDonation = () => {
        setDonationOpen(false);
    };

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            const newCommentObj = {
                id: comments.length + 1,
                author: "أنت",
                text: newComment,
                time: "الآن"
            };
            setComments([newCommentObj, ...comments]);
            setNewComment("");
        }
    };

    return (
        <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                <Typography variant="body2">التبرعات التي تم جمعها:</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF5722" }}>120$</Typography>
            </Box>
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
                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem", color: "#333" }}>
                        مركز أمل لرعاية الأيتام
                    </Typography>
                    <Avatar sx={{ bgcolor: "#FFC107", width: 40, height: 40 }} src={userImageSrc.src} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", mr: 6, mb: 2 }}>
                    <PublicIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">20 يناير 2025</Typography>
                </Box>
            </Box>
            <CardContent sx={{ paddingTop: 0, paddingBottom: 1 }}>
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: "right", lineHeight: 1.6 }}>
                    وجد في ظلام الحرب رجل، والدته تبعته وبقي الألم يبحث عن دمه، عن حضن، عن أمل لكن الصمت يعيه.
                </Typography>
            </CardContent>
            <CardMedia component="img" height="250" width="562" image={ImageSrc.src} alt="طفل يتيم" />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: 2, marginY: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography>المشاركة 2</Typography>
                    <Typography>{comments.length} التعليقات</Typography>
                </Box>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                    62 <ThumbUpAltIcon sx={{ color: "white", backgroundColor: "blue", borderRadius: "50%", padding: "3px", width: "16px", height: "16px" }} />
                    <FavoriteIcon sx={{ color: "white", backgroundColor: "red", borderRadius: "50%", padding: "3px", width: "16px", height: "16px" }} />
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={3}><IconButton onClick={handleShareClick}><ReplyIcon /><Typography variant="body2">مشاركة</Typography></IconButton></Grid>
                    <Grid item xs={3}><IconButton onClick={handleCommintClick}><MonetizationOnIcon /><Typography variant="body2">تبرع</Typography></IconButton></Grid>
                    <Grid item xs={3}><IconButton onClick={handleCommentClick}><ChatBubbleOutline /><Typography variant="body2">تعليق</Typography></IconButton></Grid>
                    <Grid item xs={3}><IconButton><Like /></IconButton></Grid>
                </Grid>
                <SharePopup open={shareOpen} onClose={handleCloseShare} postUrl={postUrl} anchorEl={null} />
                <DonationPosts open={donationOpen} onClose={handleCloseDonation} postId={"4452153"} />
            </Box>
            {showComments && (
                <Box sx={{ mt: 2, direction: "rtl" }}>
                    {comments.length > 0 ? (
                        <>
                            <Button onClick={() => setShowComments(!showComments)} variant="text">
                                عرض كل التعليقات
                            </Button>
                            {comments.map((comment) => (
                                <Box key={comment.id} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2, width: "300px" }
                                }>
                                    <Avatar src={userImageSrc.src} sx={{ width: 30, height: 30 }} />
                                    <Box>
                                    <Box sx={{ textAlign: "right", direction: "rtl", padding: "15px", borderRadius: "20px",backgroundColor:"#eee" }}>
                                        <Typography variant="subtitle2" fontWeight="bold">{comment.author}</Typography>
                                        <Typography variant="body2">{comment.text}</Typography>

                                    </Box>
                                    <Box sx={{ display: "flex", gap: "20px", mr: 5 }}>
                                        <Typography sx={{ fontSize: "12px" }}>رد</Typography>
                                        <Typography sx={{ fontSize: "12px" }}>تفاعل</Typography>
                                        <Typography variant="caption" sx={{  fontSize: "12px" }}>{comment.time} </Typography>
                                    </Box>
                                    </Box>
                                </Box>
                            ))}
                        </>
                    ) : (
                        <Typography variant="body2">لا توجد تعليقات بعد.</Typography>
                    )}


                    {/* مربع الإدخال */}
                    <Box sx={{ display: "flex" }}>
                        <Avatar
                            src="/profile.jpg" // استبدل بمسار الصورة الفعلي
                            sx={{ width: 32, height: 32, marginLeft: "8px" }}
                        />
                        <TextField
                            value={newComment} onChange={(e) => setNewComment(e.target.value)}
                            placeholder="اكتب تعليق ....."
                            variant="standard"
                            sx={{
                                width: "80%",
                                direction: "rtl",
                                flex: 1,
                                border: "none",
                                backgroundColor: "#eee",
                                borderRadius: "15px",
                                "& .MuiInputBase-root": {
                                    padding: "5px",
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
                        <SendIcon onClick={handleAddComment}  sx={{ mt: 1, color: "#2196F3" ,transform: "rotate(180deg)" , marginRight:"10px"}} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default StructurePost;