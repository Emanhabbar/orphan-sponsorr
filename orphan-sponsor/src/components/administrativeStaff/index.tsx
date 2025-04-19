import { Card, Typography, Box, CardContent } from "@mui/material";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from "next/image";
type CardStaff = {
    title: string;
    value: string;
    imagePath: string;
};

const CardComponentStaff: React.FC<CardStaff> = ({ title, value, imagePath }) => {
    return (
        <Card
        
            sx={{
                p: 2,
                borderRadius: 1,
                boxShadow: 2,
                width: 350,
                height: 320,
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection:"column",

            }}
        >




                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
                    {title}
                </Typography>
                <Box>
                {imagePath ? (
                    <Image
                        src={imagePath}
                        alt={title}
                        width={110}
                        height={110}
                        style={{ objectFit: "contain", borderRadius: "55px" }}
                    />
                ) : (
                    <AccountCircleIcon sx={{ fontSize: 120 ,color:"grey"}} />
                )}
                </Box>
    

            <Typography variant="body1" sx={{ color: "#000" ,textAlign:"right" }}>
                {value}
            </Typography>
        </Card>
    );
}

export default CardComponentStaff;
