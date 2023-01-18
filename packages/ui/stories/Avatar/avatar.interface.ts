import { CSSProperties } from "styled-components";
import { SizeType } from "../../interface/size.type";

export type AvartarProps = {
  alt?: string;
  src: string;
  size?: SizeType;
  style?: CSSProperties;
};
