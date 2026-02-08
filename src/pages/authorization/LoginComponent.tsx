import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthPageStatusEnum } from "./PublicAuthorizationPage";
import { useStyling } from "../../theme/useStyling";
import UserService from "../../services/User/UserService";
import AdaptedSnackBar, {
  useSnackbar,
} from "../sharedComponents/AdaptedSnackBar";
import Loader from "../sharedComponents/Loader";

const LoginComponent: FC<{
  setAuthPageState: (value: AuthPageStatusEnum) => void;
}> = ({ setAuthPageState }) => {
  const { authenticate } = UserService();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [createAccountEnabled, setCreateAccountEnabled] = useState(false); //CREATE ACCOUNT / REMIND ENABLED
  const [loginParams, setLoginParams] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const { triggerErrorSnackbar, snackbarState, closeSnackbar, DEFAULT_ERROR } =
    useSnackbar();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsProcessing(true);
    try {
      let response = await authenticate(loginParams);
      if (response.responseStatus !== 200) {
        if ("message" in response) {
          triggerErrorSnackbar(response.message);
        } else triggerErrorSnackbar(DEFAULT_ERROR);
      }
    } catch (error) {
    } finally {
      setIsProcessing(false);
    }
  }

  const { isMobile } = useStyling();
  return (
    <>
      <Grid container sx={{ width: "100vw" }}>
        <Grid
          size={!isMobile ? 4 : 12}
          sx={{
            display: "flex",
            alignItems: "center",
            px: 3,
            height: !isMobile ? null : "40vh",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: 400, width: "100%", py: { xs: 0, md: 12 } }}>
            <Stack
              spacing={1}
              direction={"row"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography variant="h4">Login</Typography>
              <Box
                sx={{
                  width: !isMobile ? "10vw" : "40vw",
                  height: !isMobile ? "8vh" : "8vh",
                  backgroundImage: 'url("/logo.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Stack>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Stack spacing={3}>
                <TextField
                  disabled={isProcessing}
                  fullWidth
                  required
                  label="Email"
                  name="email"
                  onChange={(e) =>
                    setLoginParams({ ...loginParams, email: e.target.value })
                  }
                  InputLabelProps={{ required: false }}
                />
                <FormControl variant="outlined" disabled={isProcessing}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setLoginParams({
                        ...loginParams,
                        password: e.target.value,
                      })
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Hasło"
                  />
                </FormControl>
              </Stack>
              <Box mt={3}>
                {!isProcessing ? (
                  <Button
                    disabled={isProcessing}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Zaloguj
                  </Button>
                ) : (
                  <Loader />
                )}
              </Box>
            </form>
          </Box>
        </Grid>

        <Grid
          size={!isMobile ? 8 : 12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(/aboveview.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: !isMobile ? null : "60vh",
          }}
        >
          <Box
            sx={{
              color: "white",
              p: 4,
              borderRadius: 3,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              maxWidth: 420,
            }}
          >
            <Typography variant="h3">Welcome Back!</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Log in to access your dashboard and manage your projects.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <AdaptedSnackBar
        severity={snackbarState.severity}
        message={snackbarState.message}
        openSnackBar={snackbarState.openSnackBar}
        handleCloseSnackBar={closeSnackbar}
        duration={3000}
      />
    </>
  );
};

export default LoginComponent;
