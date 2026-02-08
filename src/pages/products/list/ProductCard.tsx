import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ cursor: "pointer", height: "100%" }}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
