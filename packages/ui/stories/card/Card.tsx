import { stopBubbling } from "custom-util";
import React, { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { SizeType } from "../../interface/size.type";
import { CardContainer } from "./card.style";

type CardProps = {
  children?: ReactNode;
  size: SizeType;
  style?: CSSProperties;
  onClick?: () => void;
  hover?: boolean;
};

export const Card = ({
  children,
  size = "lg",
  style,
  onClick,
  hover,
}: CardProps) => {
  return (
    <CardContainer
      size={size}
      hover={hover ? "linear-gradient(94.67deg, #49E7BA 0%, #37DC81 100%)" : ""}
      onClick={(event: React.ChangeEvent<any>) => {
        stopBubbling(event);
        if (onClick !== undefined) onClick();
      }}
      style={style}
    >
      {children}
    </CardContainer>
  );
};
