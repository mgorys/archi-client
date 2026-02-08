import { Alert, type AlertColor, Snackbar } from "@mui/material";
import { type FC, useState } from "react";

export const DefaultSnackBarProps: AdaptedSnackBarProps = {
  severity: "success",
  openSnackBar: false,
  message: "",
};

export interface AdaptedSnackBarProps {
  message: string;
  openSnackBar?: boolean;
  handleCloseSnackBar?: () => void;
  severity: AlertColor;
  duration?: number;
}

export const AdaptedSnackBar: FC<AdaptedSnackBarProps> = ({
  message,
  openSnackBar,
  handleCloseSnackBar,
  severity,
  duration,
}) => {
  return (
    <Snackbar
      open={openSnackBar}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      autoHideDuration={
        duration != undefined && duration != null ? duration : 6000
      }
      onClose={handleCloseSnackBar}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AdaptedSnackBar;

export function useSnackbar() {
  const [snackbarState, setSnackbarProps] =
    useState<AdaptedSnackBarProps>(DefaultSnackBarProps);
  function triggerSuccessSnackbar(message: string) {
    setSnackbarProps({
      severity: "success",
      message: message,
      openSnackBar: true,
    });
  }
  function triggerErrorSnackbar(message: string) {
    setSnackbarProps({
      severity: "error",
      message: message,
      openSnackBar: true,
    });
  }
  function closeSnackbar() {
    setSnackbarProps({ ...snackbarState, openSnackBar: false });
  }
  const DEFAULT_ERROR: string = "Something went wrong. Try once more.";
  return {
    snackbarState,
    closeSnackbar,
    triggerSuccessSnackbar,
    triggerErrorSnackbar,
    DEFAULT_ERROR,
  };
}
