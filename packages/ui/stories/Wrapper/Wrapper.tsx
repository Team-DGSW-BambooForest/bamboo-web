import React, { PropsWithChildren } from "react";
import { WrapperProps } from "./wrapper.interface";
import { WrapperStyle } from "./wrapper.style";

export const Wrapper = ({
  align,
  children,
  flex,
  relative,
  style,
}: PropsWithChildren<WrapperProps>) => {
  return (
    <WrapperStyle align={align} flex={flex} relative={relative} style={style}>
      {children}
    </WrapperStyle>
  );
};
