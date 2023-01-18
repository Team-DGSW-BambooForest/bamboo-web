import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { CSSProperties } from "styled-components";

/**
 * close: 모달 닫기 Dispatch
 *
 * text: 컨펌 안에 들어가는 함수로 title과 accept(예), refuse(아니요)가 있습니다
 *
 */
interface ConfirmType {
  close: Dispatch<SetStateAction<boolean>>;
  text: "comment" | "write" | "delete" | "choose";
  style?: CSSProperties;
}

export type ConfrimTypeProps = PropsWithChildren<ConfirmType>;
