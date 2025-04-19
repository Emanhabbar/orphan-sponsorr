"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, Card } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";

interface Comment {
  id: number;
  author: string;
  text: string;
  likes: number;
  replies?: Comment[];
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: Date.now(), author: "أنت", text: newComment, likes: 0, replies: [] }]);
    setNewComment("");
  };

  const handleLike = (commentId: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleReply = (commentId: number, replyText: string) => {
    if (!replyText.trim()) return;
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [...(comment.replies || []), { id: Date.now(), author: "أنت", text: replyText, likes: 0 }],
            }
          : comment
      )
    );
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="اكتب تعليقًا..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button onClick={handleAddComment} variant="contained" sx={{ mt: 2 }}>إرسال</Button>

      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onLike={handleLike} onReply={handleReply} />
      ))}
    </Box>
  );
};

const CommentItem = ({ comment, onLike, onReply }: { comment: Comment; onLike: (id: number) => void; onReply: (id: number, text: string) => void }) => {
  const [replyText, setReplyText] = useState("");

  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <Typography variant="subtitle1"><strong>{comment.author}</strong></Typography>
      <Typography>{comment.text}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
        <IconButton onClick={() => onLike(comment.id)}><ThumbUpIcon /></IconButton>
        <Typography>{comment.likes}</Typography>
        <IconButton onClick={() => onReply(comment.id, replyText)}><ReplyIcon /></IconButton>
        <TextField size="small" variant="outlined" placeholder="رد..." value={replyText} onChange={(e) => setReplyText(e.target.value)} />
      </Box>
      {comment.replies?.map((reply) => (
        <Box key={reply.id} sx={{ ml: 4, mt: 1 }}>
          <Typography variant="body2"><strong>{reply.author}</strong>: {reply.text}</Typography>
        </Box>
      ))}
    </Card>
  );
};

export default CommentSection;
