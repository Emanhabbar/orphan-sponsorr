"use client";

import React, { useState } from "react";
import { ListItem, IconButton, Box, ListItemText, Collapse, Grid } from "@mui/material";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CardComponentServices from "./cardServices";
import { ExpandMore } from "@mui/icons-material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
type CardSrvices = {
    title: string;
    value: string;
    imagePath: string;
};

function Services() {
    const [openServices, setopenServices] = useState(false)
    const cardServices = [
        {
            title: "الرعاية الشاملة",
            value: "في جمعية الأمل لرعاية الأيتام، نؤمن بأن كل طفل يستحق حياة كريمة وآمنة. نقدم للأيتام بيئة دافئة تشمل المأوى، الطعام، والاحتياجات الأساسية لضمان نموهم في بيئة صحية ومستقرة. من خلال دعمكم، نوفر لهم حياة مليئة بالاهتمام والحب، ليعيشوا طفولتهم دون حرمان أو معاناة.",
            imagePath: "/care.png",
        }, {
            title: "التعليم والتدريب",
            value: "نؤمن بأن التعليم هو مفتاح المستقبل، لذا نقدم للأيتام منحًا دراسية، دروس دعم، وبرامج تعليمية متقدمة. كما نوفر دورات تدريبية لتنمية مهاراتهم وتمكينهم أكاديميًا ومهنيًا. هدفنا هو بناء جيل واعٍ قادر على تحقيق أحلامه والمساهمة في مجتمعه بإبداع وثقة.",
            imagePath: "/education.png",
        }, {
            title: "الدعم الصحي والنفسي",
            value: "الحياة الكريمة تبدأ بالصحة الجيدة، لذا نوفر للأيتام رعاية طبية شاملة تشمل الفحوصات الدورية، العلاجات اللازمة، والاستشارات النفسية لمساعدتهم على تجاوز صعوبات الحياة. بفضل دعمكم، نمنحهم الفرصة للنمو في بيئة صحية متكاملة تعزز رفاههم الجسدي والنفسي.",
            imagePath: "/support.png",
        }, {
            title: "التمكين والتوظيف",
            value: "نؤمن بقدرات الأيتام ونعمل على تأهيلهم لسوق العمل عبر برامج تدريبية متخصصة، ورش عمل، وشراكات مع مؤسسات توفر فرص عمل مناسبة لهم. نسعى لتمكينهم بالمهارات اللازمة ليصبحوا أفرادًا مستقلين قادرين على بناء مستقبلهم وتحقيق النجاح بإرادتهم وجهودهم.",
            imagePath: "/employment.png",
        }
    ]
    return (<>
        <ListItem
            sx={{ direction: "rtl", display: "flex", justifyContent: "flex-start", alignItems: "center" }}
            onClick={() => setopenServices(!openServices)}
        >
            <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold", flexDirection: "row-reverse", }}>
                <IconButton
                    onClick={() => setopenServices(!openServices)}
                    sx={{ transition: "0.3s", fontWeight: "bold" }}
                >
                    {openServices ? <ExpandMore /> : <NavigateBeforeIcon />}
                </IconButton>
                <ListItemText primary="الخدمات التي نقدمها" sx={{ textAlign: "right", fontWeight: "bold", color: "black" }} />
                <InfoOutlinedIcon />
            </Box>
        </ListItem>
        <Collapse in={openServices} timeout="auto" unmountOnExit>
            <Grid container spacing={2} sx={{ marginBottom: 5, marginRight: 5 }}>
                {cardServices.map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <CardComponentServices {...item} />
                    </Grid>
                ))}
            </Grid>
        </Collapse>
    </>
    );
}

export default Services;