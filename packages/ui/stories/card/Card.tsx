import { stopBubbling } from "custom-util";
import React, { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { SizeType } from "../../interface/size.type";
import { CardContainer } from "./card.style";

type CardProps = {
  children?: ReactNode;
  size: SizeType;
  style?: CSSProperties;
};

export const Card = ({ children, size = "lg", style }: CardProps) => {
  return (
    <CardContainer
      size={size}
      onClick={(event: React.ChangeEvent<HTMLDivElement>) => {
        stopBubbling(event);
      }}
      style={style}
    >
      {children}
    </CardContainer>
  );
};
