import { Box, Grid } from "@mui/material";
import Image from "next/image";
import imageSrc from "@/../public/images/image.png";
import Headhome from "@/components/head";

type LayoutProps = {
    params: any;
    children: React.ReactNode;
};

const Layout = ({ params, children }: LayoutProps) => {
    return (
        <Box>
            <Headhome />
            <Box sx={{ mt: 2 }}>
                {children}
            </Box>
        </Box>

    );
};

export default Layout;