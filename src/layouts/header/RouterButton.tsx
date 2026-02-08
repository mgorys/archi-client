import { forwardRef } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { Button, type ButtonProps } from "@mui/material";

const RouterButton = forwardRef<HTMLAnchorElement, ButtonProps & NavLinkProps>(
  (props, ref) => (
    <Button
      sx={{ color: "gray", fontWeight: "bold", fontSize: "15px" }}
      ref={ref}
      component={NavLink}
      {...props}
    />
  ),
);

export default RouterButton;
