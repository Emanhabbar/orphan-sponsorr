import ThemeToggleButton from '@/components/filters/theme/ThemeToggleButton'
import PostCard from '@/components/post'
import Profile from '@/components/profile'
import Tabber from '@/components/tabber'
import { Box } from '@mui/material'
import React from 'react'

function Orphanage() {
    return (
        <>
            <Profile />
            <Box sx={{ mt: 2 }}>
                <hr />
                <Tabber
                    tabsData={[
                        {
                            label: "المنشورات",
                            component: <PostCard />,
                        },
                        {
                            label: "الفلترة ",
                            component: <ThemeToggleButton />,
                        },
                    ]}
                    showSendButton={false}
                />
            </Box>
        </>
    )
}

export default Orphanage