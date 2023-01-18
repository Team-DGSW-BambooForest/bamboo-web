import * as React from "react";
import { CSSProperties } from "styled-components";
import { ButtonProps } from "./button.interface";
import { ButtonBox, ButtonWrapperStyle } from "./button.style";

export const Button = ({
  children,
  disable = false,
  onClick,
  color = "primary",
  size = "sm",
  style,
}: React.PropsWithChildren<ButtonProps>): any => {
  return (
    <ButtonBox
      onClick={() => !disable && onClick?.()}
      color={color}
      size={size}
      disable={disable}
      style={style}
    >
      {children}
    </ButtonBox>
  );
};

type ButtonWrapperProps = {
  children: React.ReactNode;
  align: "flex-end" | "flex-start" | "center";
  style?: CSSProperties;
};

export const ButtonWrapper = ({
  children,
  align,
  style,
}: ButtonWrapperProps) => {
  return (
    <ButtonWrapperStyle align={align} style={style}>
      {children}
    </ButtonWrapperStyle>
  );
};
