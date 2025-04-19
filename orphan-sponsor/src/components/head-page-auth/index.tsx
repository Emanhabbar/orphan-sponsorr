import React from "react";
import { Box, Typography } from "@mui/material";

const AuthLayout = () => {
    return (
        <Box
            sx={{
             //   justifyContent: "center",
              //  alignItems: "center",
            }}
        >
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h2" fontWeight="bold" sx={{ color: "#836540", marginBottom: "15px" }}>
                    كفيل
                </Typography>
                <Typography variant="h5" sx={{ color: "#000" }}>
                    أنا وَكافلُ اليتيمِ في الجنَّةِ كَهاتين ، وأشارَ بأصبُعَيْهِ يعني : السَّبَّابةَ والوسطى
                </Typography>
            </Box>
        </Box>
    );
};

export default AuthLayout;