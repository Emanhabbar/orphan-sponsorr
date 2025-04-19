import { Card, Typography, Box, CardContent } from "@mui/material";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from "next/image";
type CardSrvices = {
    title: string;
    value: string;
    imagePath: string;
};

const CardComponentServices: React.FC<CardSrvices> = ({ title, value, imagePath }) => {
    return (
        <Card
        
            sx={{
                p: 1,
                borderRadius: 1,
                boxShadow: 2,
                width: 360,
                height: 370,
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection:"column",

            }}
        >


<Box>
                {imagePath ? (
                    <Image
                        src={imagePath}
                        alt={title}
                        width={350}
                        height={150}
                        style={{ objectFit: "contain", borderRadius: "5px" }}
                    />
                ) : (
                    <AccountCircleIcon sx={{ fontSize: 120 ,color:"grey"}} />
                )}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
                    {title}
                </Typography>
                
    

            <Typography variant="body1" sx={{ color: "#000" ,textAlign:"right" }}>
                {value}
            </Typography>
        </Card>
    );
}

export default CardComponentServices;
