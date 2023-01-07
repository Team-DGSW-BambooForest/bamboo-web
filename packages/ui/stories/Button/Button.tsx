import * as React from "react";
import { ButtonProps } from "./button.interface";
import { ButtonBox, ButtonWrapperStyle } from "./button.style";

export const Button = ({
  children,
  disable = false,
  onClick,
  color = "primary",
  size = "sm",
}: React.PropsWithChildren<ButtonProps>): any => {
  return (
    <ButtonBox
      onClick={() => !disable && onClick?.()}
      color={color}
      size={size}
      disable={disable}
    >
      {children}
    </ButtonBox>
  );
};

type ButtonWrapperProps = {
  children: React.ReactNode;
  align: "flex-end" | "flex-start" | "center";
};

export const ButtonWrapper = ({ children, align }: ButtonWrapperProps) => {
  return <ButtonWrapperStyle align={align}>{children}</ButtonWrapperStyle>;
};
