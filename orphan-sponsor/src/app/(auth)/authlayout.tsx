import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Login from "./Signup/page";
import Register from "./register/page";
import Image from "next/image";
interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
       <Box
       sx={{  backgroundColor: "#f1f1f1",height:912}}
       >
        
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#f1f1f1",
             
                height: "750px",
              }}
            >
              {/* القسم الخاص بالصورة */}
              <Box
                sx={{
                    backgroundColor: "#f1f1f1",

                  backgroundImage:"url('/Vector.png')",
                  backgroundRepeat:"no-repeat",
                 backgroundSize: "contain",
                  flex: 1.2,
                  position: "relative",
                  overflow: "hidden",
                 
                }}
              >
             
              </Box>
        
          
        
        
              {/* القسم الخاص بالنموذج */}
           
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  padding: "0 5%",
                  direction: "rtl",
                  height: "914px",
                 
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0px",
                  mb: 3,
                }}
              >
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Image src="/Frame 11230.png" alt="logo" width={434} height={157} />
                </Box>

                <Container>{children}</Container>
            </Box>
        </Box>
        </Box>
  
    );
};

export default AuthLayout;