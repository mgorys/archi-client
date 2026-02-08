import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FullWidthPagePart from "../sharedComponents/FullWidthPagePart";
import { AnimatedBox } from "../sharedComponents/AnimatedBox";
import { MAX_MESSAGE_LENGTH, MAX_USER_LENGTH } from "../../types/Constants";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isContactAvaiable, setIsContactAvaiable] = useState(true);
  const STORAGE_VALUE = "contact_last_sent";
  //const requests = Requests();

  const [messageError, setMessageError] = useState<string | null>(null);
  const [userError, setUserError] = useState<string | null>(null);
  React.useEffect(() => {
    const lastSent = localStorage.getItem(STORAGE_VALUE);
    if (!lastSent) return;

    const hoursPassed = (Date.now() - Number(lastSent)) / (1000 * 60 * 60);

    if (hoursPassed < 24) {
      setIsContactAvaiable(false); // hide form
    }
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    try {
      setLoading(true);
      //   const response = await requests.ContactUsRequest({
      //     name: name,
      //     email: email,
      //     message: message,
      //   });
      setName("");
      setEmail("");
      setMessage("");
      localStorage.setItem(STORAGE_VALUE, Date.now().toString());
      setIsContactAvaiable(false);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > MAX_MESSAGE_LENGTH) {
      setMessageError(`Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`);
      return;
    }

    setMessageError(null);
    setMessage(value);
  };
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > MAX_USER_LENGTH) {
      setUserError(`User Name cannot exceed ${MAX_USER_LENGTH} characters`);
      return;
    }

    setUserError(null);
    setName(value);
  };
  return (
    <>
      <FullWidthPagePart
        image="https://aecdesign.pl/app/uploads/2022/11/top-kontakt-1024x203.jpg"
        height="50vh"
      />
      <AnimatedBox
        style={{
          paddingTop: 48,
          paddingBottom: 48,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Grid
          container
          spacing={1}
          p={2}
          margin="auto"
          sx={{ justifyContent: "center" }}
        >
          <Grid size={4}>
            <Box
              sx={{
                maxWidth: 600,
                mx: "auto",
                p: 3,
                color: "text.secondary",
              }}
            >
              <Typography variant="h5" fontWeight={700} mb={2}>
                Global Headquarters xd
              </Typography>

              <Typography variant="body1">
                Kraków Airport
                <br />
                Małopolska
                <br />
                Poland
              </Typography>

              <Box mt={2}>
                <Typography fontWeight={600}>Phone</Typography>
                <Typography>+48 793 731 300</Typography>

                <Typography fontWeight={600} mt={1}>
                  Email
                </Typography>
                <Typography>wupaviation@gmail.com</Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" fontWeight={700} mb={1}>
                24/7 Hotlines
              </Typography>

              <Box mt={1}>
                <Typography>+48 793 731 300</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyItems: "flex-start",
              maxWidth: "500px",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#555", marginBottom: 3 }}
              >
                Napisz do nas
              </Typography>
              <Typography variant="body1" sx={{ color: "#555" }}>
                Skontaktuj się z nami korzystając z formularza lub napisz na
                my@mail.pl
              </Typography>
              {isContactAvaiable ? (
                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    label="Imię i Nazwisko"
                    required
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={handleUserChange}
                    error={!!userError}
                    inputProps={{
                      maxLength: MAX_USER_LENGTH,
                    }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    label="Wiadomość"
                    required
                    multiline
                    rows={4}
                    fullWidth
                    variant="standard"
                    value={message}
                    onChange={handleMessageChange}
                    error={!!messageError}
                    helperText={
                      messageError ??
                      `${message.length}/${MAX_MESSAGE_LENGTH} znaków`
                    }
                    inputProps={{
                      maxLength: MAX_MESSAGE_LENGTH,
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ maxWidth: " 300px" }}
                    disabled={loading}
                  >
                    {loading ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    textAlign: "center",
                    p: 4,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "green", fontWeight: 500 }}
                  >
                    ✓ Wiadomość wysłana
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 2, color: "green" }}>
                    Dziękujemy za Wiadomość
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </AnimatedBox>
    </>
  );
};

export default Contact;
