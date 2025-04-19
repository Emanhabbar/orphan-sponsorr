import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Link } from "@mui/material";


export default function SignUpform() {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" fontWeight="bold" sx={{ color: "#836540", marginBottom: "15px" }}>
            كفيل
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#7a6652",
            fontSize: "0.9rem",
            display: "flex",
            gap: "2px",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#717680",
              padding: "1px",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "15px",
              textAlign: "center",
              color: "white",
              marginLeft: "8px",
            }}
          >
            2
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#717680", width: 200 }}>معلومات حساب المركز</Typography>
          <Box sx={{ width: "74%", height: "1px", backgroundColor: "#717680", marginRight: 1 }}></Box>
        </Typography>

        {/* النموذج */}
        <Box sx={{ width: "439px", height: "332px", textAlign: "right", direction: "rtl", marginTop: "10px", marginRight: "20px" }}>
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>البريد الإلكتروني</Typography>
            <TextField
              variant="outlined"
              placeholder="اكتب البريد الإلكتروني هنا"
              fullWidth
              sx={{
                backgroundColor: "#FFFFFF",
                borderColor: "#b1b1b1",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>كلمة المرور</Typography>
            <TextField
              variant="outlined"
              type="password"
              placeholder="اكتب كلمة المرور هنا"
              fullWidth
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={{ fontSize: "16px", marginBottom: "5px", color: "black" }}>تأكيد كلمة المرور</Typography>
            <TextField
              variant="outlined"
              type="password"
              placeholder="اكتب كلمة المرور هنا"
              fullWidth
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                "& input": { textAlign: "right", height: "15px" },
              }}
            />
          </Box>

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <span>
                أوافق على{" "}
                <Link href="#" color="primary" sx={{ textDecoration: "none", fontWeight: "bold" }}>
                  شروط الاستخدام
                </Link>{" "}
                و{" "}
                <Link href="#" color="primary" sx={{ textDecoration: "none", fontWeight: "bold" }}>
                  سياسة الخصوصية
                </Link>
              </span>
            }
            sx={{
              color: "#666",
              fontSize: "14px",
              "& .MuiCheckbox-root": {
                padding: "5px",
              },
              "& .MuiTypography-root": {
                fontSize: "14px",
              },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#8B6F42",
              color: "#fff",
              height: "45px",
              fontSize: "16px",
              marginBottom: "15px",
              marginTop: "20px",
              "&:hover": { backgroundColor: "#7A5D34" },
            }}
          >
            تسجيل
          </Button>
        </Box>
      </Box>
    </>
  );
}
