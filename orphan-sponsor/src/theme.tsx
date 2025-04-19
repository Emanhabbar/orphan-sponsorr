"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode, createContext, useState, useMemo, useContext, useEffect } from "react";

const ThemeToggleContext = createContext<{
  toggleTheme: () => void;
  mode: "light" | "dark";
}>({
  toggleTheme: () => {},
  mode: "light", // تغيير الوضع الافتراضي إلى لايت مود
});

export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

export function ThemeRegistry({ children }: { children: ReactNode }) {
  // استخدام قيمة افتراضية "light" وسيتم استبدالها بالقيمة المخزنة في localStorage إن وجدت
  const [mode, setMode] = useState<"light" | "dark">("light");

  // استرجاع حالة الثيم من localStorage عند تحميل المكون
  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode");
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode);
    }
  }, []);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      // حفظ الحالة الجديدة في localStorage
      localStorage.setItem("theme-mode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#a87c5f",
          },
          secondary: {
            main: "#000000",
          },
          background: {
            default: mode === "dark" ? "#1a1a1a" : "#f5f5f5",
            paper: mode === "dark" ? "#262626" : "#ffffff",
          },
          text: {
            primary: mode === "dark" ? "#ffffff" : "#000000",
          },
        },
        typography: {
          fontFamily: "var(--font-cairo), sans-serif", // استخدام خط Cairo
        },
      }),
    [mode]
  );

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}