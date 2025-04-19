import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

interface CharityCardProps {
  name: string;
  status: string;
  image: string;
  description: string;
  orphans: number;
  donations: number;
}

const CharityCard: React.FC<CharityCardProps> = ({ name, status, image, description, orphans, donations }) => {
  return (
    <Card 
      sx={{ 
        width: { xs: "100%", sm: "395px" }, 
        height: "auto", 
        textAlign: "center", 
        p: 2, 
        borderRadius: 3, 
        boxShadow: 3 
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {name} 
        <Typography component="span" mr={2} color={status === "متابعة" ? "blue" : "green"}>
          {status}
        </Typography>
      </Typography>
      <Avatar src={image} alt={name} sx={{ width: 105, height: 105, margin: "auto", my: 1 }} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Box textAlign="right" mt={2}>
          <Box display="flex" alignItems="center" justifyContent="flex-end" gap={1}>
            <Typography variant="body2">عدد الأيتام: {orphans}</Typography>
            <img src="/images/Frame 52868.svg" alt="عدد الأيتام" width="24" height="24" />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-end" gap={1}>
            <Typography variant="body2">التبرعات التي تم جمعها: ${donations}</Typography>
            <img src="/icons/cash-payment-svgrepo-com 1.svg" alt="التبرعات" width="24" height="24" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharityCard;
