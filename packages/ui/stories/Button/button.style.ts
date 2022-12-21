import styled, {
  css,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";
import { ColorType, SizeType } from "./button.interface";
import { ColorThemeType } from "@bamboo/ui-mode";

export const ButtonBox = styled.div<{
  color: ColorType;
  disable: boolean;
  size: SizeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  border-radius: 5px;

  cursor: ${({ disable = false }) => (disable ? "not-allowed" : "pointer")};
  ${({ color }) => colorStyle[color]}
  ${({ size }) => sizeStyle[size]}
`;

const sizeStyle: Record<SizeType, FlattenSimpleInterpolation> = {
  lg: css`
    width: 200px;
    height: 50px;
  `,
  md: css`
    width: 100px;
    height: 25px;
  `,
  sm: css`
    width: 50px;
    height: 12px;
    font-size: 10px;
  `,
};

const colorStyle: Record<
  ColorType,
  FlattenInterpolation<ThemeProps<ColorThemeType>>
> = {
  black: css`
    background-color: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors.black};
    color: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors.whiteInText};
  `,
  white: css`
    background-color: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors.white};
    color: ${(props: ThemeProps<ColorThemeType>) =>
      props.theme.colors.blackInText};
  `,
};
