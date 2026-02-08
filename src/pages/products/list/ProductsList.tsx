// products/pages/ProductsList.tsx
import { Grid, Typography } from "@mui/material";
import { products } from "../_mocks_products";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <>
      <Typography variant="h3" mb={4}>
        Produkty
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid size={{ xs: 12, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
