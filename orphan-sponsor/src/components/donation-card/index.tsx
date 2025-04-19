import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Box,
    Link,
  } from "@mui/material";
  
  interface cardProps {
    name: string;
    image: string;
    age: number;
    amount: number;
    isCharity: boolean;
    followLink?: string;
    status?: string; // ✅ أضفنا status
  }
  
  export default function DonationCard({
    name,
    image,
    age,
    amount,
    isCharity,
    status, // ✅ أضفنا status هنا
  }: cardProps) {
    return (
      <Card
        sx={{ width:265,height:265, mx: "auto", boxShadow: 3, borderRadius: 1, p: 2 }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          {isCharity ? (
            <>
              {/* الجمعية: اسم + حالة المتابعة */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"row-reverse", gap: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {name}
                </Typography>
                {status && (
                  <Typography
                    component="span"
                    fontSize="14px"
                    color={status === "متابعة" ? "#504cd5" : "green"}
                  >
                    {status}
                  </Typography>
                )}
              </Box>
  
              {/* الصورة تحت النص */}
              <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                <Avatar alt={name} src={image} sx={{ width: 90, height: 90 }} />
              </Box>
  
              
  <Box sx={{display:"flex",flexDirection:"row-reverse",gap:1}}>
  <img src="/cash-payment-svgrepo-com 1.svg" alt="payment" width={25} height={25} />
  
              <Typography fontSize="14px">
                تبرعاتك لهذه الجمعية:{" "}
                <Typography component="span" color="#504cd5">
                  $ {amount}
                </Typography>
              </Typography>
              </Box>
            </>
          ) : (
            <>
              {/* الطفل: الصورة أولاً */}
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Avatar alt={name} src={image} sx={{ width: 90, height: 90 }} />
              </Box>
  
              <Typography variant="h6" fontWeight="bold">
                {name}
              </Typography>
  
              {/* ✅ عرض الحالة إذا كانت موجودة */}
              {status && (
                <Typography
                  component="span"
                  mr={2}
                  color={status === "متابعة" ? "#504cd5" : "green"}
                >
                  {status}
                </Typography>
              )}
  
              <Typography sx={{ mt: 1 }}>
                العمر:{" "}
                <Typography component="span" color="#504cd5">
                  {age} سنوات
                </Typography>
              </Typography>
  
              <Typography sx={{ mt: 1 }} fontSize="14px">
                تبرعاتك لهذا الطفل:{" "}
                <Typography component="span" color="#504cd5">
                $   {amount} 
                </Typography>
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    );
  }
  