import React from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "@bamboo/ui-mode/BambooTheme";

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
