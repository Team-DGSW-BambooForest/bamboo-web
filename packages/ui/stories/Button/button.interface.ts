export type ColorType = "black" | "white";

export type SizeType = "lg" | "md" | "sm";

export interface ButtonProps {
  size: SizeType;
  color: ColorType;
  disable?: boolean;
  onClick?: () => void;
}
