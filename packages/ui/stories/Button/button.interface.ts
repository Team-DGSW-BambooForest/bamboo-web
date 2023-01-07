export type ColorType = "primary" | "cancel";

export type SizeType = "lg" | "sm";

export interface ButtonProps {
  size: SizeType;
  color: ColorType;
  disable?: boolean;
  onClick?: () => void;
}
