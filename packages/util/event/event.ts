import { MouseEventHandler } from "react";

export const stopBubbling = (event: React.ChangeEvent<any>) => {
  event.stopPropagation();
};

export const stopReload = (event: React.ChangeEvent<any>) => {
  event.preventDefault;
};
