import { CSSProperties } from "styled-components";
import { SizeType } from "../../interface/size.type";

export type ColorType = "primary" | "cancel";

export interface ButtonProps {
  size: Exclude<SizeType, "md">;
  color: ColorType;
  disable?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}
