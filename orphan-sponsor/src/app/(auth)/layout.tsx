import { Box } from "@mui/material";
import Image from "next/image";
import imageSrc from "@/../public/images/image.png";

type LayoutProps = {
  params: any;
  children: React.ReactNode;
};

const Layout = ({ params, children }: LayoutProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        bgcolor: "background.default",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flex: 0.6,
          height: "100vh",
          position: "relative",
        }}
      >
        <Image
          src={imageSrc}
          alt="Image description"
          layout="fill"
          objectFit="cover"
          style={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem",
          textAlign: "right",
          direction: "rtl",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;