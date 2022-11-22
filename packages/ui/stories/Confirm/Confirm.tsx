import React from "react";
import { ConfirmProps } from "./confirm.interface";
import { CofirmContainer } from "./confirm.style";
import { stopBubbling } from "custom-util";

const Confirm = ({ close, text, finaly }: ConfirmProps) => {
  return (
    <CofirmContainer
      onClick={(event: React.ChangeEvent<HTMLDivElement>) => {
        stopBubbling(event);
      }}
    >
      confirm
    </CofirmContainer>
  );
};

export default Confirm;
