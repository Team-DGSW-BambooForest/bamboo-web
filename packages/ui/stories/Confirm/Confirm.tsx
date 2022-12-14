import React from "react";
import { ConfirmProps } from "./confirm.interface";
import {
  CofirmContainer,
  ConfirmBottom,
  ConfirmContent,
} from "./confirm.style";
import { stopBubbling } from "custom-util";
import { Button } from "../Button/Button";

export const Confirm = ({ close, text, finaly }: ConfirmProps) => {
  return (
    <CofirmContainer
      onClick={(event: React.ChangeEvent<HTMLDivElement>) => {
        stopBubbling(event);
      }}
    >
      <ConfirmContent>{text.title}</ConfirmContent>
      <ConfirmBottom>
        <Button color="black" size="md" onClick={finaly}>
          {text.accept}
        </Button>
        <Button color="black" size="md" onClick={() => close(true)}>
          {text.refuse}
        </Button>
      </ConfirmBottom>
    </CofirmContainer>
  );
};
