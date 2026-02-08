import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import { AnimatedBox } from "../sharedComponents/AnimatedBox";

const About = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "background.default" }}>
      <Container>
        <AnimatedBox>
          <Grid container spacing={6} alignItems="center">
            {/* LEFT SIDE – TEXT */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="overline" color="primary">
                O nas
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, mb: 2 }}>
                Projektujemy cyfrowe doświadczenia, które sprzedają
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.7 }}
              >
                Jesteśmy zespołem, który łączy design, technologię i strategię.
                Pomagamy markom wyróżnić się w sieci, tworząc szybkie,
                estetyczne i przemyślane produkty cyfrowe.
              </Typography>
            </Grid>

            {/* RIGHT SIDE – IMAGE */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: { xs: 260, md: 380 },
                  borderRadius: 4,
                  backgroundImage: "url('/mt.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: 6,
                }}
              />
            </Grid>
          </Grid>
        </AnimatedBox>

        <AnimatedBox>
          <Grid container spacing={4} sx={{ mt: 8 }}>
            {["Strategia", "Design", "Development"].map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    backgroundColor: "background.paper",
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item}
                  </Typography>
                  <Typography color="text.secondary" fontSize={15}>
                    {item === "Strategia" &&
                      "Analizujemy, planujemy i budujemy solidne fundamenty pod rozwój Twojej marki."}
                    {item === "Design" &&
                      "Tworzymy nowoczesne interfejsy, które są intuicyjne i estetyczne."}
                    {item === "Development" &&
                      "Kodujemy szybkie, skalowalne i bezpieczne aplikacje webowe."}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </AnimatedBox>
      </Container>
    </Box>
  );
};

export default About;
