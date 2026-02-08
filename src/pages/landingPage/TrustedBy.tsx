import { Box, Typography } from "@mui/material";

const logos = [
  "https://img.freepik.com/free-vector/flat-neon-graphic-designer-logo_1421494-568.jpg",
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?ga=GA1.1.180070384.1763651698&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?ga=GA1.1.180070384.1763651698&semt=ais_hybrid&w=740&q=80",
];

const TrustedBy = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Zaufali nam
      </Typography>

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          py: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 8,
            animation: "ticker 20s linear infinite",
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {logos.map((logo, i) => (
            <Box
              key={i}
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 250,
                opacity: 1,
                //filter: "grayscale(100%)",
              }}
            />
          ))}
        </Box>
      </Box>

      <style>
        {`
          @keyframes ticker {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};
export default TrustedBy;
