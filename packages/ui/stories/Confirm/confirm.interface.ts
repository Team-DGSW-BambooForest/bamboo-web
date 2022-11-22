import { Dispatch, SetStateAction } from "react";

/**
 * close: 모달 닫기 Dispatch
 * text: 컨펌 안에 들어가는 함수로 title과 accept(예), refuse(아니요)가 있습니다
 * finaly: boolean을 가지고 있는 함수로 이를 통해 예, 아니요를 판단하여 실행시킬 함수
 */
export interface ConfirmProps {
  close: Dispatch<SetStateAction<boolean>>;
  text: {
    title: string;
    accept: string;
    refuse: string;
  };
  finaly?: (result: boolean) => void;
}
