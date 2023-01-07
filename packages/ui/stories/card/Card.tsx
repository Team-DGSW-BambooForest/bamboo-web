import { stopBubbling } from "custom-util";
import React, { ReactNode } from "react";
import { CardSizeType } from "./card.interface";
import { CardContainer } from "./card.style";

type CardProps = {
  children: ReactNode;
  size: CardSizeType;
};

const Card = ({ children, size = "lg" }: CardProps) => {
  return (
    <CardContainer
      size={size}
      onClick={(event: React.ChangeEvent<HTMLDivElement>) => {
        stopBubbling(event);
      }}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
