import React, { PropsWithChildren } from "react";
import { ModalProps } from "./modal.interface";
import { ModalBackground } from "./modal.style";

export const Modal = ({
  isOpened,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpened && (
        <ModalBackground onClick={onClose}>{children}</ModalBackground>
      )}
    </>
  );
};
