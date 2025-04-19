import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "next/image";
import { Box } from "@mui/material";


const AboutSection = () => {
    return (

        <Box sx={{ width: "80%", margin: "auto", direction: "rtl", textAlign: "right",fontWeight:"bold" }}>

            <Typography variant="h6" >
                جمعية الأمل هي منظمة خيرية في سوريا تعنى برعاية الأيتام وتوفير حياة كريمة لهم. تقدم الجمعية الدعم
                التعليمي، الطبي، والمعنوي للأطفال الذين فقدوا أسرهم بسبب الحروب والكوارث. تهدف الجمعية إلى بناء
                مستقبل مشرق للأيتام من خلال مشاريع تنموية مستدامة.
            </Typography>
            <div style={{  backgroundColor: "#0000FF1A", display: "flex", justifyContent: "center", alignItems: "start",padding:"25px",borderRadius:"5px",gap:"50px",marginTop:"25px" }}>
                    <Typography variant="body1" color="#808080">
                        جمعية الأمل لرعاية الأيتام هي منظمة خيرية تهدف إلى دعم الأيتام وتوفير حياة كريمة لهم من خلال برامج شاملة تغطي مختلف جوانب حياتهم. توفر الجمعية السكن الآمن للأطفال الذين فقدوا أسرهم، وتحرص على تأمين احتياجاتهم الأساسية مثل الغذاء والملابس والرعاية الصحية.<br /> 
                        كما تهتم الجمعية بالتعليم، فتقدم منحًا دراسية وبرامج تعليمية متخصصة لمساعدتهم على بناء مستقبل ناجح.
                        وتوفر أيضًا الدعم النفسي والاجتماعي للأطفال لمساعدتهم على تجاوز صعوبات الحياة.<br /> 
                        إلى جانب ذلك، تعمل الجمعية على تطوير مهارات الأيتام عبر دورات تدريبية وبرامج تنموية تؤهلهم لدخول سوق العمل. وتسعى دائمًا للحصول على دعم المتبرعين والمتطوعين لضمان استمرارية خدماتها، إيمانًا بأهمية التكافل الاجتماعي في بناء مستقبل أفضل للأطفال الأيتام.
                    </Typography>
                    <Image
                        src="/Rectangle 4181.png"
                        alt="Video Thumbnail"
                        width={300}
                        height={200}
                        style={{ borderRadius: "8px" }}
                    />


            </div>
        </Box>
    );
};

export default AboutSection;
