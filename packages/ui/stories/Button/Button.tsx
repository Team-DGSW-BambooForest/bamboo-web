import * as React from "react";
import { ButtonProps } from "./button.interface";
import { ButtonBox } from "./button.style";

export const Button = ({
  children,
  disable = false,
  onClick,
  color = "black",
  size = "md",
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
