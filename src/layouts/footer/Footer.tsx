import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a", // slate-900
        color: "#e5e7eb", // gray-200
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo / opis */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              ArchiStronka
            </Typography>
            <Typography variant="body2" sx={{ color: "#9ca3af" }}>
              Narazie jakis placeholder
            </Typography>
          </Grid>

          {/* Linki */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Nawigacja
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link href="#" underline="none" color="inherit">
                Strona główna
              </Link>
              <Link href="#" underline="none" color="inherit">
                Oferta
              </Link>
              <Link href="#" underline="none" color="inherit">
                Realizacje
              </Link>
              <Link href="#" underline="none" color="inherit">
                Kontakt
              </Link>
            </Box>
          </Grid>

          {/* Kontakt */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Kontakt
            </Typography>
            <Typography variant="body2" sx={{ color: "#9ca3af" }}>
              hello@archistronka.pl
              <br />
              +48 123 456 789
            </Typography>
          </Grid>
        </Grid>

        {/* Dolna belka */}
        <Box
          sx={{
            borderTop: "1px solid #1f2933",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "#9ca3af" }}>
            © {new Date().getFullYear()} ArchiStronka. Wszelkie prawa
            zastrzeżone.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
