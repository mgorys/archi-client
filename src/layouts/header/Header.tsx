import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import RouterButton from "./RouterButton";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Toolbar
        sx={{
          maxWidth: 1000,
          mx: "auto",
          width: "100%",
          minHeight: 200,
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={2} alignItems="center" wrap="wrap">
          <Grid size={3}>
            <Button
              component={NavLink}
              to="/"
              disableRipple
              //onClick={() => handleScroll(navigate, 'welcome-part', 0)}
              sx={{
                padding: 0,
                minWidth: "unset",
                outline: "none",
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              <Box
                sx={{
                  height: 150,
                  width: 180,
                  backgroundImage: 'url("/7H_LOGO.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Button>
          </Grid>
          <Grid size={9}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
                justifyContent: "flex-start",
                m: 2,
              }}
            >
              <RouterButton to="/courses">Kursy online</RouterButton>
              <RouterButton to="/products">Plugins4Revit</RouterButton>
              <RouterButton to="/nasze-realizacje">
                Nasze realizacje
              </RouterButton>
              <RouterButton to="/wsparcie">
                Wsparcie projektowe w zakresie architektury i BIM
              </RouterButton>
              <RouterButton to="/plugin">Zamów plugin na Revital</RouterButton>
              <RouterButton to="/contact">Kontakt</RouterButton>
              <RouterButton to="/about">O nas</RouterButton>

              <IconButton onClick={() => setCartOpen(true)}>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
