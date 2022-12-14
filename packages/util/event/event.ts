import { MouseEventHandler } from "react";

/**
 * 버블링을 멈추는 함수
 * @param event
 */
export const stopBubbling = (event: React.ChangeEvent<any>) => {
  event.stopPropagation();
};

/**
 * form의 action을 막는 함수
 * @param event
 */
export const stopReload = (event: React.ChangeEvent<any>) => {
  event.preventDefault();
};
