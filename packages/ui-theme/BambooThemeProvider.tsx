import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { colors, ColorThemeType } from "@bamboo/ui-mode";

type BambooThemeProviderType = {
  children: React.ReactNode;
  mode?: "dark" | "light";
};

export const BambooThemeProvider = ({
  children,
  mode = "light",
}: BambooThemeProviderType) => {
  const theme = useMemo(() => {
    const usingColor: ColorThemeType = colors[mode];
    return {
      colors: {
        ...usingColor,
      },
    };
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
};
