"use client";
import React, { useState } from 'react';
import { Box, IconButton, Popover, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

interface Reaction {
    id: string;
    type: 'like' | 'love' | 'haha' | 'wow' | 'sad';
    userId: string;
}

const Like: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [selectedReaction, setSelectedReaction] = useState<Reaction | null>(null);

    const handleReactionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleReactionSelect = (reaction: Reaction) => {
        setSelectedReaction(reaction);
        setAnchorEl(null);
        // Call API to save the selected reaction
        saveReaction(reaction);
    };

    const saveReaction = (reaction: Reaction) => {
        // Call API to save the reaction
        console.log('Saving reaction:', reaction);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box display="flex" alignItems="center">
            <IconButton onClick={handleReactionClick}>
                {selectedReaction ? (
                    getReactionIcon(selectedReaction.type)
                ) : (
                    <> <ThumbUpIcon /> <Typography variant="body2" color="text.secondary">
                        أعجاب
                    </Typography></>
                )}
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box p={2} display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={2}>
                    <IconButton onClick={() => handleReactionSelect({ id: '1', type: 'like', userId: 'user1' })}>
                        {getReactionIcon('like')}
                    </IconButton>
                    <IconButton onClick={() => handleReactionSelect({ id: '2', type: 'love', userId: 'user1' })}>
                        {getReactionIcon('love')}
                    </IconButton>
                    <IconButton onClick={() => handleReactionSelect({ id: '3', type: 'haha', userId: 'user1' })}>
                        {getReactionIcon('haha')}
                    </IconButton>
                    <IconButton onClick={() => handleReactionSelect({ id: '4', type: 'wow', userId: 'user1' })}>
                        {getReactionIcon('wow')}
                    </IconButton>
                    <IconButton onClick={() => handleReactionSelect({ id: '5', type: 'sad', userId: 'user1' })}>
                        {getReactionIcon('sad')}
                    </IconButton>
                </Box>
            </Popover>
        </Box>
    );
};

// دالة لإرجاع أيقونة التفاعل مع النص المناسب
const getReactionIcon = (type: Reaction['type']) => {
    const iconStyles = { fontSize: 20 }; // حجم الأيقونة

    switch (type) {
        case 'like':
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'blue' }}>
                    <ThumbUpIcon sx={iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                        أعجبني
                    </Typography>
                </Box>
            );
        case 'love':
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'red' }}>
                    <FavoriteIcon sx={iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                        أحببته
                    </Typography>
                </Box>
            );
        case 'haha':
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'yellow' }}>
                    <SentimentSatisfiedIcon sx={iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                        أضحكني
                    </Typography>
                </Box>
            );
        case 'wow':
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'orange' }}>
                    <SentimentVerySatisfiedIcon sx={iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                        فاجأني
                    </Typography>
                </Box>
            );
        case 'sad':
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'gray' }}>
                    <SentimentVeryDissatisfiedIcon sx={iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                        أحزنني
                    </Typography>
                </Box>
            );
        default:
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'blue' }}>
                    <ThumbUpIcon sx={iconStyles} />
                    <Typography variant="body2" color="text.secondary">
                        أعجبني
                    </Typography>
                </Box>
            );
    }
};

export default Like;