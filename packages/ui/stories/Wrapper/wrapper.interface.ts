import { PropsWithChildren } from "react";
import { CSSProperties } from "styled-components";
import { AlignType } from "../../interface/align.type";

export type WrapperProps = {
  relative?: boolean;
  flex?: boolean;
  align?: AlignType;
  style?: CSSProperties;
};
