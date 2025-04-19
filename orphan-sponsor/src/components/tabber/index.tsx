"use client";

import { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button, Box } from "@mui/material";
import Link from "next/link";
import SendIcon from '@mui/icons-material/Send';

export default function Tabber({ 
    tabsData,
    showSendButton = true,
}: { 
    tabsData: { label: string; component: React.ReactNode }[]; 
    showSendButton?: boolean;
}) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <AppBar position="static" sx={{ background: "white", boxShadow: "none", borderBottom: "2px solid #ccc", direction: "rtl", width: "90%", paddingLeft: "5%", height: "100vh" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    TabIndicatorProps={{ style: { backgroundColor: "green", height: "4px" } }}
                    sx={{ color: "gray" }}
                >
                    {tabsData.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            sx={{
                                color: activeTab === index ? "green" : "gray",
                                fontWeight: activeTab === index ? "bold" : "normal",
                            }}
                        />
                    ))}
                </Tabs>
                {showSendButton && (
                    <Box>
                        <Button variant="contained" sx={{ backgroundColor: "#c1c1c1", color: "black" }}>
                            <SendIcon /> &nbsp;
                            مراسلة
                        </Button>
                    </Box>
                )}
            </Toolbar>
            <Box sx={{ p: 2 }}>
                {tabsData[activeTab].component}
            </Box>
        </AppBar>
    );
}
