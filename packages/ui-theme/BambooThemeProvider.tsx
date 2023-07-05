import React from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./BambooTheme";

type BambooThemeProviderType = {
  children: React.ReactNode;
  mode: "dark" | "light";
};

export const BambooThemeProvider = ({
  children,
  mode = "light",
}: BambooThemeProviderType) => {
  return (
    <ThemeProvider theme={mode === "light" ? light : dark}>
      <>{children}</>
    </ThemeProvider>
  );
};
