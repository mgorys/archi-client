import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import React, { createContext, useContext, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

type StylingContextType = {
  isMobile: boolean;
  adHeight: string;
  adWidth: string;
  mode: ThemeMode;
  toggleTheme: () => void;
  language: string;
  updateLanguage: (newLang: string) => void;
};

const StylingContext = createContext<StylingContextType | undefined>(undefined);
export const useStyling = () => {
  const context = useContext(StylingContext);
  if (!context)
    throw new Error("useStyling must be used within StylingProvider");
  return context;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const StylingProvider: React.FC<ProviderProps> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [mode, setMode] = useState<ThemeMode>(() => {
    const userSecondaryRaw = localStorage.getItem("user_secondary");
    try {
      const parsed = userSecondaryRaw ? JSON.parse(userSecondaryRaw) : {};
      return (parsed.theme as ThemeMode) || "light";
    } catch {
      return "light";
    }
  });

  const [language, setLanguage] = useState(() => {
    const raw = localStorage.getItem("user_secondary");
    try {
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed.language || "pl";
    } catch {
      return "pl";
    }
  });

  const updateLanguage = (newLang: string) => {
    setLanguage(newLang);
    const raw = localStorage.getItem("user_secondary");
    const parsed = raw ? JSON.parse(raw) : {};
    const updated = { ...parsed, language: newLang };
    localStorage.setItem("user_secondary", JSON.stringify(updated));
  };

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      const current = JSON.parse(
        localStorage.getItem("user_secondary") || "{}",
      );
      const updated = { ...current, theme: next };
      localStorage.setItem("user_secondary", JSON.stringify(updated));
      return next;
    });
  };

  const theme: Theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: "#6096B4",
        },
        secondary: {
          main: "#93BFCF",
        },
        text: {
          primary: "#6096B4",
        },
        action: {
          selected: "#EEE9DA",
        },
        background: {
          default: mode === "light" ? "#f7fafb" : "#121212",
          paper: mode === "light" ? "#ffffff" : "#1e1e1e",
        },
      },
      typography: {
        fontFamily: [
          //FONT_FAMILY,
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              //fontFamily: FONT_FAMILY + ', sans-serif',
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              //fontFamily: FONT_FAMILY + ', sans-serif',
            },
            label: {
              //fontFamily: FONT_FAMILY + ', sans-serif',
            },
          },
        },
        MuiImageListItemBar: {
          styleOverrides: {
            title: {
              //fontFamily: FONT_FAMILY + ', sans-serif',
            },
          },
        },
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                //backgroundColor: MODAL_BACKGROUND_COLOR,
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "white",
                borderRadius: "6px",
              },
            },
          },
        },
      },
    });
  }, [mode]);

  const value: StylingContextType = {
    isMobile,
    adHeight: "70px",
    adWidth: "100%",
    mode,
    toggleTheme,
    language,
    updateLanguage,
  };

  return (
    <StylingContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylingContext.Provider>
  );
};
