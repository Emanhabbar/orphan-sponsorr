
import { Container, Grid } from "@mui/material";
import CharityCard from "@/components/card";

export default function Home() {
  const charities = [
    {
      name: "مركز سواعد الخير",
      status: "أتابع",
      image: "/images/Foto perfil empresa.png",
      description: "جمعية سواعد الخير هي منظمة خيرية في سوريا تُعنى برعاية الأيتام وتوفير حياة كريمة لهم. تقدم الجمعية الدعم التعليمي، الصحي، والمعيشي للأطفال الذين فقدوا أسرهم بسبب الحرب والأزمات. بجهود المتطوعين والمحسنين، تعمل الجمعية على بناء مستقبل مشرق للأيتام من خلال مشاريع تنموية مستدامة.",
      orphans: 45,
      donations: 1000,
    },
    {
      name: "مركز صناع الحياة",
      status: "متابعة",
      image: "/images/Foto perfil empresa (1).png",
      description: "جمعية سواعد الخير هي منظمة خيرية في سوريا تُعنى برعاية الأيتام وتوفير حياة كريمة لهم. تقدم الجمعية الدعم التعليمي، الصحي، والمعيشي للأطفال الذين فقدوا أسرهم بسبب الحرب والأزمات. بجهود المتطوعين والمحسنين، تعمل الجمعية على بناء مستقبل مشرق للأيتام من خلال مشاريع تنموية مستدامة.",
      orphans: 45,
      donations: 1000,
    },
  ];
  return (
    <>
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        {charities.map((charity, index) => (
          <Grid item key={index}>
            <CharityCard {...charity} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
      );
}
