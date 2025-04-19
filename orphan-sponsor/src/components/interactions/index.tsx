'use client';
import { Box, Button, Card, CardContent, Typography, FormControl, Select, MenuItem, Link } from '@mui/material';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const InteractionsPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const handleFromChange = (event: SelectChangeEvent) => {
    setFrom(event.target.value as string);
  };

  const handleToChange = (event: SelectChangeEvent) => {
    setTo(event.target.value as string);
  };

  const interactions = [
    { id: 1, text: 'قمت بالتعليق على منشور', entity: 'جمعية الأمل', date: '2025/02/15' },
    { id: 2, text: 'سجلات إعجابك بمنشور', entity: 'جمعية الأمل', date: '2025/02/15' },
    { id: 3, text: 'سجلات إعجابك بمنشور', entity: 'جمعية المحبة', date: '2025/02/15' },
  ];

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: '#f9fbf9',
        minHeight: '100vh',
        width: 1314,
        height: 453,
        gap: '32px',
      }}
    >
      <Typography
        variant="h6"
        align="right"
        mb={4}
        color="#836540"
        width={200}
        height={30}
        fontFamily={'Cairo'}
        fontSize={20}
        fontWeight={600}
      >
        سجل التفاعلات
      </Typography>

      <Box display="flex" gap={2} alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }} mb={3} dir="rtl">
        {/* من (اختياري) */}
        <Box >
          <Typography fontSize={16} fontWeight={400} mb={0.5} color="#1A1A1A">
            من (اختياري) <span style={{ color: 'red' }}>*</span>:
          </Typography>
          <FormControl size="small">
  <Select
    value={from}
    onChange={handleFromChange}
    displayEmpty
    open={fromOpen}
    onOpen={() => setFromOpen(true)}
    onClose={() => setFromOpen(false)}
    IconComponent={() => (
      <Box pl={2}>
        {fromOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
    )}
    sx={{
      color: "#B1B1B1",
      borderRadius: '24px',
      backgroundColor: '#fff',
      width: 500,
      height: 45,
    }}
  >
    <MenuItem value=""></MenuItem>
    <MenuItem value="option1">الخيار 1</MenuItem>
    <MenuItem value="option2">الخيار 2</MenuItem>
  </Select>
</FormControl>
        </Box>

        {/* إلى (اختياري) */}
        <Box>
          <Typography fontSize={16} fontWeight={400} mb={0.5} color="#1A1A1A">
            إلى (اختياري) <span style={{ color: 'red' }}>*</span>:
          </Typography>
          <FormControl size="small">
            <Select
              value={to}
              onChange={handleToChange}
              displayEmpty
              open={toOpen}
              onOpen={() => setToOpen(true)}
              onClose={() => setToOpen(false)}
              IconComponent={() => (
                <Box pl={2}>
                  {toOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Box>
              )}
              sx={{
                color: "#B1B1B1",
                borderRadius: '24px',
                backgroundColor: '#fff',
                width: 535,
                height: 45,
              }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="option1">الخيار 1</MenuItem>
              <MenuItem value="option2">الخيار 2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* زر البحث */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            bgcolor: '#A77F4C',
            color: '#fff',
            px: 3,
            borderRadius: '20px',
            width: 215,
            height: 45,
            padding: '8px 16px',
          
          }}
        >
          بحث مخصص
        </Button>
      </Box>

      {/* عرض التفاعلات */}
      {interactions.map((interaction) => (
        <Card key={interaction.id} sx={{ mb: 2, boxShadow: 1 }}>
       <CardContent>
  <Box display="flex" justifyContent="space-between" flexWrap="wrap" alignItems="center">
    <Typography sx={{ direction: 'rtl', flex: 1 ,fontSize:15,fontWeight:700}}>
      {interaction.text}{' '}
      <span style={{ color: '#504CD5' }}>{interaction.entity}</span>
    </Typography>
  </Box>

  {/* هذا السطر الجديد يحتوي على التاريخ + رابط عرض المنشور */}
  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
    <Typography sx={{ color: '#999', direction: 'rtl' }}>{interaction.date}</Typography>
    <Link
      href="#"
      underline="hover"
      sx={{
        direction: 'rtl',
        color: '#3f51b5',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Cairo',
        fontWeight: 600,
        fontSize: "16px",



      }}
    >
      عرض المنشور
      <ArrowBackIosNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
    </Link>
  </Box>
</CardContent>

        </Card>
      ))}
    </Box>
  );
};

export default InteractionsPage;
