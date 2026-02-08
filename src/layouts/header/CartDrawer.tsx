import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../providers/CartProvider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeFromCart, totalPrice } = useCart();
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 360,
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography fontWeight={700}>Koszyk</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* <Box sx={{ flex: 1, mt: 2 }}>
          {items.length === 0 ? (
            <Typography color="text.secondary">Koszyk jest pusty 🛒</Typography>
          ) : (
            items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price.toLocaleString("pl-PL")} zł
                  </Typography>
                </Box>

                <IconButton
                  size="small"
                  onClick={() => removeFromCart(item.id)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            ))
          )}
        </Box> */}

        {/* FOOTER */}
        {items.length > 0 ? (
          <>
            <Divider sx={{ my: 2 }} />

            {/* PODSUMOWANIE */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="overline"
                color="text.secondary"
                display="block"
                mb={1}
              >
                Podsumowanie
              </Typography>

              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 2,
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 1,
                      objectFit: "cover",
                    }}
                  />

                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} fontSize={14}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.duration} dni realizacji
                    </Typography>
                  </Box>

                  <Typography fontWeight={600}>
                    {item.price.toLocaleString("pl-PL")} zł
                  </Typography>
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* SUMA */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography fontWeight={600}>Łączna kwota</Typography>
              <Typography variant="h6" fontWeight={700}>
                {totalPrice.toLocaleString("pl-PL")} zł
              </Typography>
            </Box>

            {/* CTA */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => {
                onClose();
                console.log("GO TO CHECKOUT");
              }}
            >
              Przejdź do zapytania
            </Button>

            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
              mt={1}
            >
              Bez zobowiązań • Wycena indywidualna
            </Typography>
          </>
        ) : (
          <Typography color="text.secondary">Koszyk jest pusty 🛒</Typography>
        )}
      </Box>
    </Drawer>
  );
}
