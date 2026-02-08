// products/pages/ProductDetails.tsx
import { useParams } from "react-router-dom";
import { Typography, Box, Grid, Divider, Button } from "@mui/material";
import { products } from "../_mocks_products";
import { useCart } from "../../../providers/CartProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const { items, addToCart } = useCart();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <Typography>Nie znaleziono produktu</Typography>;
  }

  return (
    <Box>
      <Grid container spacing={6}>
        {/* LEWA STRONA – OBRAZ */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* PRAWA STRONA – INFO */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" mb={1}>
            {product.title}
          </Typography>

          <Typography variant="h5" color="primary" mb={1}>
            {product.price} zł
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Czas trwania: {product.duration}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" mb={4}>
            {product.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            disabled={items.some((item) => item.id === product.id)}
            fullWidth
            onClick={() => addToCart(product)}
          >
            Dodaj do koszyka
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
