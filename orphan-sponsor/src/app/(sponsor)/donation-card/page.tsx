import { Container, Grid } from "@mui/material";
import DonationCard from "@/components/donation-card";
export default function Home() {
    const cards = [
        {
          name: "سعيد العاصي",
          image: "/images/Foto perfil empresa (2).png",
          age: 9,
          amount: 200,
          isCharity: false,
        },
        {
          name: "مركز سواعد الخير",
          image: "/images/Ellipse 5.png" ,
          amount: 300,
          isCharity: true,
          status: "متابعة",
        }
      ];
    return (
        <>
        <Container sx={{ py: 5 }}>
  <Grid container spacing={4} justifyContent="center">
    {cards.map((card, i) => (
      <Grid item key={i}>
        <DonationCard {...card} />
      </Grid>
    ))}
  </Grid>
</Container>
        </>
    );
}