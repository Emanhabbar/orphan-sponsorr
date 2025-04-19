"use client";

import React, { useState } from "react";
import { Box, Collapse, IconButton, List, ListItem, ListItemText, Grid, Typography, Link } from '@mui/material'
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CardComponentServices from "@/components/servicesWeProvide";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AboutSection from "@/components/aboutAssociation";
import CardComponentStaff from "@/components/administrativeStaff";
import Services from "@/components/servicesWeProvide";
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';


function Info() {
    const [openAssociation, setopenAssociation] = useState(false);
    const [openStaff, setopenStaff] = useState(false);
    const [openVolunteer, setopenVolunteer] = useState(false);

    const cardStaff = [
        {
            title: "فاطمة الناصري",
            value: "فاطمة الناصري ناشطة في المجال الإنساني، تكرس وقتها لرعاية الأيتام ودعمهم نفسياً وتعليمياً. تعمل على تطوير برامج توعوية وتدريبية للفتيات اليتيمات، وتؤمن بأهمية تمكين المرأة لتحقيق مستقبل مستدام وآمن.",
            imagePath: "",
        }, {
            title: "يوسف الدليمي",
            value: "يوسف الدليمي مهندس ومدرب متطوع، يشارك في مشاريع تهدف إلى تمكين الأيتام عبر التعليم المهني والتدريب التقني. يسعى لتحسين حياة الأطفال عبر تقديم فرص تعلم جديدة، ومساعدتهم على تحقيق أحلامهم رغم الظروف الصعبة.",
            imagePath: "",
        }, {
            title: "سامر الجبوري",
            value: "سامر الجبوري متطوع شغوف بالأعمال الخيرية، يعمل في مجالات الإغاثة وتقديم الدعم النفسي والاجتماعي للأيتام. يؤمن بأهمية التعليم كوسيلة لتحقيق الاستقلال، ويساعد في إنشاء برامج تدريبية لتنمية مهارات الأطفال والشباب المحرومين.",
            imagePath: "/person.png"
        }
    ]
    return (
        <Box sx={{ direction: "rtl" }}>
            <List>
                <ListItem   //قسم عن الجمعية
                    sx={{ direction: "rtl", display: "flex", justifyContent: "flex-start", alignItems: "center" }}
                    onClick={() => setopenAssociation(!openAssociation)}
                >
                    <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold", flexDirection: "row-reverse", }}>
                        <IconButton
                            onClick={() => setopenAssociation(!openAssociation)}
                            sx={{ transition: "0.3s", fontWeight: "bold" }}
                        >
                            {openAssociation ? <ExpandMore /> : <NavigateBeforeIcon />}
                        </IconButton>
                        <ListItemText primary=" عن الجمعية " sx={{ textAlign: "right", fontWeight: "bold", color: "black" }} />
                        <Groups2OutlinedIcon />
                    </Box>
                </ListItem>
                <Collapse in={openAssociation} timeout="auto" unmountOnExit>
                    <AboutSection />
                </Collapse>

                <ListItem  //قسم تطوع معنا
                    sx={{ direction: "rtl", display: "flex", justifyContent: "flex-start", alignItems: "center" }}
                    onClick={() => setopenVolunteer(!openVolunteer)}
                >
                    <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold", flexDirection: "row-reverse", }}>
                        <IconButton
                            onClick={() => setopenVolunteer(!openVolunteer)}
                            sx={{ transition: "0.3s", fontWeight: "bold" }}
                        >
                            {openVolunteer ? <ExpandMore /> : <NavigateBeforeIcon />}
                        </IconButton>
                        <ListItemText primary=" تطوع معنا" sx={{ textAlign: "right", fontWeight: "bold", color: "black" }} />
                        <PersonAddOutlinedIcon />
                    </Box>
                </ListItem>
                <Collapse in={openVolunteer} timeout="auto" unmountOnExit sx={{marginBottom: 5,marginRight:5}}>
                    <Typography variant="body1" color="initial">  باب التطوع مفتوح للراغبين على هذا الرابط
                        <Link href="#" underline="none" color="#blue">
                            {' www.google.forms/6578'}
                        </Link>                         
                    </Typography>
                </Collapse>

                <ListItem   //قسم الكادر الاداري
                    sx={{ direction: "rtl", display: "flex", justifyContent: "flex-start", alignItems: "center" }}
                    onClick={() => setopenStaff(!openStaff)}
                >
                    <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold", flexDirection: "row-reverse", }}>
                        <IconButton
                            onClick={() => setopenStaff(!openStaff)}
                            sx={{ transition: "0.3s", fontWeight: "bold" }}
                        >
                            {openStaff ? <ExpandMore /> : <NavigateBeforeIcon />}
                        </IconButton>
                        <ListItemText primary="الكادر الاداري  " sx={{ textAlign: "right", fontWeight: "bold", color: "black" }} />
                        <SupervisorAccountOutlinedIcon />
                    </Box>
                </ListItem>
                <Collapse in={openStaff} timeout="auto" unmountOnExit>
                    <Grid container spacing={2} sx={{ marginBottom: 5,marginRight:5 }}>
                        {cardStaff.map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <CardComponentStaff {...item} />
                            </Grid>
                        ))}
                    </Grid>
                </Collapse>

                <Services // قسم الخدمات
                />
            </List>

        </Box>


    )
}

export default Info